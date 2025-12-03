# Microblink Platform SDK Vanilla Example (Device-to-Device)

This example shows how to embed the Microblink Platform SDK in a vanilla JavaScript application using Vite. It includes both the classic browser experience and the device-to-device (D2D) flow that allows a desktop session to hand off the capture experience to a mobile device.

## Prerequisites

-   Node.js 18 or later (required by Vite 5)
-   npm (comes with Node.js)

## Installation

1. Install dependencies.

    ```bash
    npm install
    ```

2. Build the project once to ensure dependencies are properly set up.

    ```bash
    npm run build
    ```

    This step will copy resources from `node_modules/@microblink/platform-sdk/dist/resources` to `public/resources` that are required for the SDK to function correctly. See the `vite.config.js` file for details.

## Configuration

Before running the app, set the Vite environment variables expected by `main.js`. Create a `.env` file (or use any Vite-supported method) with:

```bash
VITE_PROXY_URL=<https URL of your proxy server>
VITE_WORKFLOW_ID=<workflow id from Microblink Platform>
```

**Proxy Server:**

-   `VITE_PROXY_URL` must point to the API endpoint of **your own proxy** that starts Microblink transactions. You can find more information about setting up a proxy server in the [Microblink Platform transaction proxy repo](https://github.com/MicroblinkPlatform/microblink-platform-transaction-proxy).

**User Identification:**

-   The `getUserId()` function in `main.js` is a placeholder for retrieving a unique user identifier. You should replace its implementation with logic that fits your application's user management.
-   The SDK `consentData.userId` **has to be unique per user and remain consistent across their transactions**. Persist it if you reuse sessions so the same ID is sent every time.

## Run the Development Server

Start the Vite dev server:

```bash
npm run dev
```

Then open the printed URL (defaults to <http://localhost:5173/>) in your browser. Click **Start** to launch the classic flow. When classic flow reaches the D2D handoff point, generated QR will point to the same original URL with the `sdk` query parameter included. When testing locally set `apiConfig.d2d.runAddress` parameter to your local `IP:PORT`, and ensure your mobile device has access to that address. **Also you must ensure secure context to be able to use camera on mobile device.**
