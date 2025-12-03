/**
 * Copyright (c) Microblink. All rights reserved. This code is provided for
 * use as-is and may not be copied, modified, or redistributed.
 */
import { createIdvFlow } from "@microblink/platform-sdk/vanilla";

const startBtn = document.getElementById("start-btn");
startBtn?.addEventListener("click", () => initializeMicroblinkPlatformSDK());

document.addEventListener("DOMContentLoaded", () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    if (urlSearchParams.has("sdk")) {
        initializeMicroblinkPlatformSDK();
    }
});

const getUserId = () => {
    let userId = sessionStorage.getItem("microblink-platform-userid");
    if (!userId) {
        const randomString = Math.random().toString(36).substring(2, 15);
        userId = `user-vanilla-example-d2d-${randomString}`;
        sessionStorage.setItem("microblink-platform-userid", userId);
    }
    return userId;
};

const initializeMicroblinkPlatformSDK = () => {
    let apiConfig = {
        url: import.meta.env.VITE_PROXY_URL, // IMPORTANT: this has to be API endpoint of your proxy server for starting the transaction
        workflowId: import.meta.env.VITE_WORKFLOW_ID, // Workflow ID to be used for the transaction. Can be found in Microblink Platform Management UI
        d2d: { runAddress: window.location.origin + window.location.pathname }, // Used when generating QR code for Device-to-Device flow
    };

    let isD2DFlow = false;
    const urlSearchParams = new URLSearchParams(window.location.search);
    if (urlSearchParams.has("sdk")) {
        const data = urlSearchParams.get("sdk");
        if (!data) {
            alert("Missing sdk param data");
            return;
        }
        try {
            const jsonString = atob(data);
            const result = JSON.parse(jsonString);

            if (!result || !result.apiAddress || !result.transactionId || !result.ephemeralKey || !result.deviceJoinKey) {
                alert("Invalid sdk param data");
                return;
            }

            apiConfig = {
                apiUrl: result.apiAddress,
                transactionId: result.transactionId,
                ephemeralKey: result.ephemeralKey,
                d2d: {
                    joinKey: result.deviceJoinKey,
                    runAddress: "", // This is ignored in `mode: "d2d"`
                },
            };

            isD2DFlow = true;
        } catch (e) {
            console.error(e);
            alert("Error parsing sdk param data");
            return;
        }
    }

    const unmount = createIdvFlow({
        enableD2D: !isD2DFlow, // If true, SDK will generate QR code for Device-to-Device flow if desktop device is detected
        mode: isD2DFlow ? "d2d" : "classic",
        apiConfig: apiConfig,
        consentData: {
            userId: getUserId(), // IMPORTANT: this ID must be unique per user and consistent across multiple transactions for the same user
            note: "",
            givenOn: new Date().toISOString(),
            isTrainingAllowed: true,
            isProcessingStoringAllowed: true,
        },
        onTransactionFinished: (result) => {
            console.log("Transaction ID: ", result.transactionId);
            console.log("Transaction verification status: ", result.status);
            unmount();
        },
        onAbort: () => {
            console.log("User aborted Transaction flow");
            unmount();
        },
    });
};
