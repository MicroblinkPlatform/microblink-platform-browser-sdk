<p align="center" >
  <img src="https://raw.githubusercontent.com/wiki/blinkid/blinkid-android/images/logo-microblink.png" alt="Microblink" title="Microblink">
</p>

# Microblink Platform Browser SDK

Microblink Platform Browser SDK enables seamless and secure user authentication by integrating advanced identity verification features, such as document scanning, facial recognition, and real-time validation, into your application. It helps businesses ensure compliance, prevent fraud, and enhance user trust with minimal development effort.

## Table Of Contents

- [Installation](#installation)
  - [React integration](#react-integration)
  - [Vanilla integration](#vanilla-integration)
- [Configuration](#configuration)
  - [Defining communication with proxy service](#defining-communication-with-proxy-service)
  - [Customizing the look and feel of the SDK](#customizing-the-look-and-feel-of-the-sdk)
  - [Translating the SDK](#translating-the-sdk)
- [Examples](#examples)
  - [React example](#react-example)
  - [Vanilla example](#vanilla-example)

## Installation

Identity Platform Web SDK offers two types of integration into your web application based on the underlying
technology stack used:

### React integration

Suitable for applications build using React JS. SDK exposes React component which needs to be placed in your code where applicable. Sample code below will show steps needed to integrate the component into your codebase:

```typescript
import { IdvFlow } from '@microblink/platform-sdk/react';

// Render component where applicable

<IdvFlow
     workflowId="{id-of-workflow-to-use}"
     proxyConfig={{
         url: '{url-to-your-proxy-service}'
     }}
     onExit={() => {
         setShowIdvFlow(false);
     }}
/>
```

When component is rendered it will show as full screen modal above web app content and it will capture the focus, triggering the start of identity verification flow.

### Vanilla integration

Suitable for all web applications built in any technology stack. Sample code below will show minimal steps needed to integrate the component into your codebase:

```typescript
import { createIdvFlow } from '@microblink/platform-sdk/vanilla';

// Render component where applicable
createIdvFlow({
  proxyConfig: {
    url: '{url-to-your-proxy-service}',
  },
  workflowId: '{id-of-workflow-to-use}',
});
```

The difference between vanilla and React versions is that in vanilla one, calling the function will render IDV flow in the same manner as React one - using full screen modal, but it will remove component from the DOM when flow is finished or aborted, and if needed again, the same function needs to be called again.

## Configuration

Configuration properties for both versions of integration are the same and explained in the table below:

| Property               | Type                                                         | Required | Description                                                         |
| ---------------------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------------- |
| `workflowId`           | `string`                                                     | Yes      | Id of workflow to use in IDV flow                                   |
| `proxyConfig`          | [`ProxyConfig`](#defining-communication-with-proxy-service)  | Yes      | Configuration parameters for the proxy server                       |
| `themeOverride`        | [`ThemeOverride`](#customizing-the-look-and-feel-of-the-sdk) | No       | Options to override default look and feel                           |
| `translationsOverride` | [`TranslationMessages`](#translating-the-sdk)                | No       | Options to override default English text in the app                 |
| `onExit`               | `(status: 'completed' \| 'aborted') => void`                 | No       | Callback which is called when flow is either finished or user exits |

For Vanilla version, `target` can be defined to control where in the DOM the content will be placed.

### Defining communication with proxy service

In order to use the SDK, you need to define a proxy service which will be used to communicate with the Microblink Platform. This service should be used to forward requests from the SDK to the Microblink Platform and back in order to start the transaction. The service should be implemented on your side and SDK will use it to communicate with the platform.

Configuration object for the proxy service is defined with following properties:

| Property     | Type                     | Required | Description                                                                                                                                                                                                                 |
| ------------ | ------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`        | `string`                 | Yes      | Url of the proxy server                                                                                                                                                                                                     |
| `headers`    | `Record<string, string>` | No       | Additional HTTP headers you want to pass with the request                                                                                                                                                                   |
| `formFields` | `Record<string, string>` | No       | Form fields configured for the start of the workflow. Can dictate some data which is necessary in order to complete it. Consult with the platform and specific workflow version if having any questions about those fields. |

### Customizing the look and feel of the SDK

SDK provides options to customize default look and feel presented to the end users. You can customize the following properties in order to align SDK look with the rest of your application:

| Property             | Type                                                                                                                                               | Description                                                                                                                                                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `startScreenIcon`    | `string`                                                                                                                                           | Path to the image or svg which will be used on the start screen instead of the default one. This path needs to be accessible by the root application                                                            |
| `buttonBorderRadius` | `string \| number`                                                                                                                                 | Radius for the buttons. Accepts any valid CSS border radius value or number. If number is used it will corresponds to value in pixels.                                                                          |
| `fontFamily`         | `string`                                                                                                                                           | Name of the font family to be used. This font needs to be loaded into parent application.                                                                                                                       |
| `accent`             | `{ 25: string; 50: string; 100: string; 200: string; 300: string; 400: string; 500: string; 600: string; 700: string; 800: string; 900: string; }` | Primary color used in the app. Defined as the object of different shades of color based on the numeric scale.                                                                                                   |
| `resultsScreen`      | `{ identityVerifiedIcon?: string; identityNotVerifiedIcon?: string; identityVerifyingIcon?: string;  }`                                            | Paths to the images or svgs which will be used as replacement for the default images on the result screen to indicate status of verification process. This paths needs to be accesible by the root application. |

To customize the theme, you need to pass an object which will properties you want to override, and pass it to the SDK as `themeOverride` property.

If you're using TypeScript, you can use the following interface to define your custom theme:

```typescript

// If you're using React version
import { ThemeOverride } from '@microblink/platform-sdk/react';

// Or vanilla one

import { ThemeOverride } from '@microblink/platform-sdk/vanilla';

const customTheme: ThemeOverride = {
  startScreenIcon: '/icons/start.svg', // Replace with your own path
  buttonBorderRadius: 10,
  fontFamily: 'Arial',
  accent: {
    25: '#f0f0f0',
    50: '#e0e0e0',
    100: '#d0d0d0',
    200: '#c0c0c0',
    300: '#b0b0b0',
    400: '#a0a0a0',
    500: '#909090',
    600: '#808080',
    700: '#707070',
    800: '#606060',
    900: '#505050',
  },
  resultsScreen: {
    identityVerifiedIcon: '/icons/verified.svg', // Replace with your own path
    identityNotVerifiedIcon: '/icons/not-verified.svg', // Replace with your own path
    identityVerifyingIcon: '/icons/verifying.svg', // Replace with your own path
  },
};

```

After you've defined all of the properties, you can pass the object to the SDK as `themeOverride` property as shown in the example above.

#### React

```typescript
<IdvFlow
  /* Other properties... */
  themeOverride={customTheme}
/>

```

#### Vanilla

```typescript
createIdvFlow({
  proxyConfig: {
    url: '{url-to-your-proxy-service}',
  },
  workflowId: '{id-of-workflow-to-use}',
  themeOverride: customTheme,
});
```

### Translating the SDK

SDK provides options to change default English text shown to the end users to any other language. Table below show property names, their descriptions and default English text. You can customize the following properties in order to align SDK text with the rest of your application.

| Property                                                    | Description                                                               | Default                                                                                                                                                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actions.done`                                              | Button text for done action                                               | Done                                                                                                                                                                                            |
| `actions.tryAgain`                                          | Button text for try again action                                          | Try again                                                                                                                                                                                       |
| `actions.start`                                             | Button text for start action                                              | Start                                                                                                                                                                                           |
| `actions.continue`                                          | Button text for continue action                                           | Continue                                                                                                                                                                                        |
| `actions.exit`                                              | Button text for exit action                                               | Exit                                                                                                                                                                                            |
| `statuses.cameraLoading`                                    | Message indicating the camera is loading                                  | Camera loading                                                                                                                                                                                  |
| `statuses.checkingCamera`                                   | Message indicating the camera is being checked                            | Checking camera...                                                                                                                                                                              |
| `statuses.noInternetConnection`                             | Message indicating there is no internet connection                        | No internet connection                                                                                                                                                                          |
| `statuses.processing`                                       | Message indicating processing is in progress                              | Processing...                                                                                                                                                                                   |
| `statuses.verificationNotAvailable`                         | Message indicating verification is not available                          | Verification not available                                                                                                                                                                      |
| `statuses.cameraPermissionRequiredTitle`                    | Message indicating camera permission is required                          | Camera permission required                                                                                                                                                                      |
| `statuses.cameraPermissionRequiredCaption`                  | Caption indicating that camera permission is required                     | We don't have your permission to use the camera. To continue, please make sure that camera is enabled.                                                                                          |
| `statuses.nextUp`                                           | Message indicating the next step                                          | Next up                                                                                                                                                                                         |
| `statuses.completed`                                        | Message indicating the process is completed                               | Completed                                                                                                                                                                                       |
| `statuses.retakeSelfieTitle`                                | Title for the retake selfie message                                       | Retake selfie                                                                                                                                                                                   |
| `statuses.retakeSelfieCaption`                              | Caption for the retake selfie message                                     | Try again, making sure your eyes are open, your face is fully visible and only one in the frame and there's good lighting.                                                                      |
| `statuses.noCameraDevices`                                  | Message indicating there are no camera devices                            | No camera devices found                                                                                                                                                                         |
| `statuses.documentNotSupportedTitle`                        | Title for the document not supported message                              | Document not accepted                                                                                                                                                                           |
| `statuses.documentNotSupportedCaption`                      | Caption for the document not supported message                            | Try scanning a different document.                                                                                                                                                              |
| `statuses.documentScanErrorTitle`                           | Title for the document scan error message                                 | Scan again                                                                                                                                                                                      |
| `statuses.documentScanErrorCaption`                         | Caption for the document scan error message                               | Try again, ensuring your document is fully visible and well-lit. Keep the document steady to prevent any blurriness.                                                                            |
| `home.title`                                                | Title for the home screen                                                 | Let's verify your identity                                                                                                                                                                      |
| `home.caption`                                              | Caption for the home screen                                               | This will only take a couple of minutes.                                                                                                                                                        |
| `home.additionalActionsCaption`                             | Caption for additional actions on the home screen                         | We may ask you to take additional actions to complete your verification.                                                                                                                        |
| `home.documentVerificationStepTitle`                        | Title for the document verification step on the home screen               | Scan your document                                                                                                                                                                              |
| `home.documentVerificationStepCaption`                      | Caption for the document verification step on the home screen             | Go grab your ID                                                                                                                                                                                 |
| `home.faceMatchStepTitle`                                   | Title for the face match step on the home screen                          | Take a selfie                                                                                                                                                                                   |
| `home.faceMatchStepCaption`                                 | Caption for the face match step on the home screen                        | Make sure your face is well-lit                                                                                                                                                                 |
| `end.identityVerifiedTitle`                                 | Message indicating the identity is verifiedscreen                         | Identity verified!                                                                                                                                                                              |
| `end.identityVerifiedCaption`                               | Caption for the identity verified message screen                          | Thank you for proving your identity - it was you all along!                                                                                                                                     |
| `end.identityNotVerifiedTitle`                              | Message indicating the identity is not verified                           | Identity not verified                                                                                                                                                                           |
| `end.identityNotVerifiedCaption`                            | Caption for the identity not verified messages                            | We couldn't verify your identity this time. Please double-check your information and try again, or contact support for assistance.                                                              |
| `end.identityVerifyingTitle`                                | Message indicating the identity is being verified                         | Thanks! We're verifying your identity now                                                                                                                                                       |
| `end.identityVerifyingCaption`                              | Caption for the identity verifying message                                | We've got everything we need. We'll notify you as soon as it's complete.                                                                                                                        |
| `faceCapture.centerYourFace`                                | Message indicating that the user should center their face                 | Center your face                                                                                                                                                                                |
| `faceCapture.placeFaceInFrame`                              | Message indicating that the user should place their face within the frame | Place your face in the frame                                                                                                                                                                    |
| `faceCapture.moveCloser`                                    | Message indicating that the user should move closer to the camera         | Move closer                                                                                                                                                                                     |
| `faceCapture.lookDirectylIntoCamera`                        | Message indicating that the user should look directly into the camera     | Look directly into the camera                                                                                                                                                                   |
| `faceCapture.onlyOneFaceShouldBeVisible`                    | Message indicating that only one face should be visible in the frame      | Only one face should be visible                                                                                                                                                                 |
| `faceCapture.keepStill`                                     | Message indicating that the user should keep still                        | Keep still                                                                                                                                                                                      |
| `documentVerification.helpButtonTooltip`                    | Tooltip text for the help button                                          | Need help?                                                                                                                                                                                      |
| `documentVerification.helpButtonBack`                       | Text for the back button in the help section                              | Back                                                                                                                                                                                            |
| `documentVerification.helpButtonNext`                       | Text for the next button in the help section                              | Next                                                                                                                                                                                            |
| `documentVerification.helpButtonDone`                       | Text for the done button in the help section                              | Done                                                                                                                                                                                            |
| `documentVerification.helpButtonStartScanning`              | Text for the start scanning button in the help section                    | Start Scanning                                                                                                                                                                                  |
| `documentVerification.helpDocInfoTitle`                     | Title for the document information help section                           | Keep all the details visible                                                                                                                                                                    |
| `documentVerification.helpDocInfoDescription`               | Description for the document information help section                     | Make sure you keep the document well lit. All document fields should be visible on the camera screen.                                                                                           |
| `documentVerification.helpDocKeepDetailsVisibleTitle`       | Title for the keep details visible help section                           | Keep all the details visible                                                                                                                                                                    |
| `documentVerification.helpDocKeepDetailsVisibleDescription` | Description for the keep details visible help section                     | Make sure you aren't covering parts of the document with a finger, including the bottom lines. Also, watch out for hologram reflections that go over the document fields.                       |
| `documentVerification.helpDocAvoidHarshLightTitle`          | Title for the avoid harsh light help section                              | Watch out for harsh light                                                                                                                                                                       |
| `documentVerification.helpDocAvoidHarshLightDescription`    | Description for the avoid harsh light help section                        | Avoid direct harsh light because it reflects from the document and can make parts of the document unreadable. If you can't read data on the document, it won't be visible to the camera either. |
| `documentVerification.helpDocKeepStillTitle`                | Title for the keep still help section                                     | Keep still while scanning                                                                                                                                                                       |
| `documentVerification.helpDocKeepStillDescription`          | Description for the keep still help section                               | Try to keep the phone and document still while scanning. Moving either can blur the image and make data on the document unreadable.                                                             |
| `documentVerification.initializationError`                  | Message displayed when there is an initialization error                   | Failed to load component. Try using another device or update your browser.                                                                                                                      |
| `documentVerification.cameraDisabled`                       | Message displayed when the camera is disabled                             | Camera disabled.                                                                                                                                                                                |
| `documentVerification.cameraNotAllowed`                     | Message displayed when camera access is not allowed                       | Cannot access camera.                                                                                                                                                                           |
| `documentVerification.cameraInUse`                          | Message displayed when the camera is in use                               | Camera is already used by another application.                                                                                                                                                  |
| `documentVerification.cameraGenericError`                   | Generic error message for camera issues                                   | Cannot access camera.                                                                                                                                                                           |
| `documentVerification.cameraFeedbackScanFront`              | Feedback message for scanning the front of the document                   | Scan the front side of a document                                                                                                                                                               |
| `documentVerification.cameraFeedbackScanBack`               | Feedback message for scanning the back of the document                    | Scan the back side of a document                                                                                                                                                                |
| `documentVerification.cameraFeedbackFlip`                   | Feedback message for flipping the document                                | Flip to the back side                                                                                                                                                                           |
| `documentVerification.cameraFeedbackBarcodeMessage`         | Feedback message for barcode scanning                                     | Scan the barcode                                                                                                                                                                                |
| `documentVerification.cameraFeedbackMoveFarther`            | Feedback message to move the camera farther                               | Move farther                                                                                                                                                                                    |
| `documentVerification.cameraFeedbackMoveCloser`             | Feedback message to move the camera closer                                | Move closer                                                                                                                                                                                     |
| `documentVerification.cameraFeedbackAdjustAngle`            | Feedback message to adjust the camera angle                               | Adjust the angle                                                                                                                                                                                |
| `documentVerification.cameraFeedbackBlur`                   | Feedback message for blurry images                                        | Keep still                                                                                                                                                                                      |
| `documentVerification.cameraFeedbackGlare`                  | Feedback message for glare issues                                         | Tilt or move document to remove reflections                                                                                                                                                     |
| `documentVerification.cameraFeedbackWrongSide`              | Feedback message for scanning the wrong side of the document              | Flip the document                                                                                                                                                                               |
| `documentVerification.cameraFeedbackFacePhotoCovered`       | Feedback message when the face photo is covered                           | Keep face photo fully visible                                                                                                                                                                   |
| `documentVerification.cameraFeedbackBarcode`                | Feedback message for barcode issues                                       | Scan the barcode                                                                                                                                                                                |
| `documentVerification.checkInternetConnection`              | Message to check the internet connection                                  | Check internet connection.                                                                                                                                                                      |
| `documentVerification.networkError`                         | Message displayed when there is a network error                           | Network error.                                                                                                                                                                                  |
| `documentVerification.scanningNotAvailable`                 | Message displayed when scanning is not available                          | Scanning not available.                                                                                                                                                                         |
| `documentVerification.modalWindowClose`                     | Text for the close button in modal windows                                | Close                                                                                                                                                                                           |

If you wish to add custom translations into your application, you need to pass create an object which will contain all of the above mentioned properties, and pass it to the SDK as `translationsOverride` property.

**_ Keep in mind _**, properties defined above which have a dot in their name correspond to nested properties in the object. For example, `actions.done` property in the object should be defined as:

```typescript
const customTranslations = {
  actions: {
    done: 'Fertig',
  },
};
```

If you're using TypeScript, you can use the following interface to define your custom translations:

```typescript

// If you're using React version
import { TranslationMessages } from '@microblink/platform-sdk/react';

// Or vanilla one
import { TranslationMessages } from '@microblink/platform-sdk/vanilla';


const germanTranslations: TranslationMessages = {
   actions: {
    done: 'Fertig',
    tryAgain: 'Erneut versuchen',
    start: "Los geht's",
    continue: 'Weiter',
    exit: 'Beenden',
  },
  // Rest of properties...
};

```

After you've defined all of the properties, you can pass the object to the SDK as `translationsOverride` property as shown in the example above.

#### React

```typescript
<IdvFlow
  /* Other properties... */
  translationsOverride={germanTranslations}
/>

```

#### Vanilla

```typescript
createIdvFlow({
  proxyConfig: {
    url: '{url-to-your-proxy-service}',
  },
  workflowId: '{id-of-workflow-to-use}',
  translationsOverride: germanTranslations,
});
```
