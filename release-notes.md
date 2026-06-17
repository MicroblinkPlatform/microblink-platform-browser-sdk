## v1.10.1

Translation fixes — BlinkID upgrade

Fixed several translation keys introduced in the new BlinkID version that were not being mapped or exposed, causing only the English default to display regardless of the selected language.

New keys added (DE, HR, ES + EN default):

- cameraFeedbackOccluded — "Keep the document fully visible" — shown when the document is partially covered
- cameraFeedbackTooDark — "Move to brighter spot" — shown when lighting is insufficient
- cameraFeedbackTooBright — "Move to spot with less lighting" — shown when there is too much light
- helpDocInfoTitleDesktop — "Get ready to scan" — onboarding modal title on desktop
- helpDocInfoDescriptionDesktop — "Make sure you keep your camera lens clean..." — onboarding modal body on desktop
- scanUnsuccessfulTitle — "Scan unsuccessful" — timeout modal title

## v1.10.0

### Updates

- **BlinkCard upgrade (v2.12.0 → v3000.0.7)**: The BlinkCard package has been upgraded to v3000.0.7, which introduces changes to the translation file for the card scan capability. If you have custom translations for the card scan flow, please update them accordingly. An example translation file can be found in the example apps (`example-react/src/translations.ts`).
- **BlinkId upgrade (v7.6.3 → v7.8.0)**

### Bug fixes

- Fixed an issue where the `target` property (HTML element) was not being used for mounting the SDK.
- Fixed a visual bug where some buttons were not styled according to the theme override passed by the SDK user.

## 1.9.0

### New features

- Added support for 2 new capabilities: "Upload & Verify ID" and "Upload Non-ID"

## v1.8.0

### New features

- Added support for overriding `scanUnsupportedBack` and `scanPassportDataPageOnly` on Scan ID and Scan & Verify ID Step
- Customization of the start, end and progress UI screens
- `onAbort` callback exposes additional params related to the transaction and step that was aborted, as well as the reason for the abortion.

## v1.7.2

### Fix

- Fixed issue with form values sent on SDK initialization

## v1.7.0

### Breaking changes

- **`consentData.givenOn` type change**: The `givenOn` property in `consentData` now requires a JavaScript `Date` object instead of a `string`.
- **`apiConfig.url` replaced with `proxy` object**. Previously, you provided the full API transaction endpoint for your proxy, for example: `https://www.myproxy.com/api/v1/transaction`. Now, `proxy.baseUrl` accepts your proxy's base domain + API suffix, **without** the final URL path. For example: `https://www.myproxy.com/api/v1`. The SDK then constructs the rest of the URL based on the action that is performed. Here's how the `proxy` object looks like:

  ```typescript
  proxy: {
    baseUrl: string;
    startTransactionPath?: string; // Default: '/transaction'
    cancelWorkflowPath?: string; // Default: '/initialize/{workflowId}/cancel'
    workflowInfoPath?: string; // Default: '/initialize/{workflowId}/info'
  }
  ```

### Improvements

- **Fallback consent UI**: If the consent object has `isProcessingStoringAllowed` set to `false`, users will now be prompted with a fallback consent UI form where they can accept or reject. If rejected, the transaction will be terminated.

## v1.6.6

Includes improvement on the feedback messaging related to the scanning of the last passport page with barcode

## v1.6.5

### Chore

- Updated with the new BlinkID version

## v1.6.4

### Fix

- adjusted document scanning settings

## v1.6.3

### Improvements

- Improved the default camera-picking algorithm to choose the optimal camera for document scanning.
- Extended the document scanning timeout from 10 seconds to 25 seconds to accommodate slower capture scenarios.

## v1.6.2

### Fix

- Camera preview layout shifting on Selfie Face Match for iOS Safari

## v1.6.1

### Fix

- lightweight BlinkID support

## v1.6.0

### Updates

- The "Scan ID" capability now uses [BlinkID v7.6.0](https://blinkid.docs.microblink.com/release-notes/web/#v760) which, among other things, adds support for scanning the barcode page of US passports.

## v1.5.0

### What's new

- We've added kiosk mode support. This is helpful in applications where a tablet device is mounted on a wall, and your users are expected to scan their documents using the front camera only.
- You can now upload PDF files when using the manual input capability.
- The SDK is now available on [NPM](https://www.npmjs.com/package/@microblink/platform-sdk).

### Updates

We've updated our BlinkID Verify and BlinkCard dependencies:

- The "Scan & Verify ID" capability now uses BlinkID Verify 3.14.1.
- The "Scan Payment Card" capability now uses BlinkCard 2.12.0.

To read more about the new features supported by these upgrades, see the release notes for [BlinkID Verify](https://blinkidverify.docs.microblink.com/docs/docver/release-notes/release-notes) and [BlinkCard](https://blinkcard.docs.microblink.com/category/release-notes/).

### Bug fixes

- Ultrawide camera selected for face capture. We added a check which prevents the use of an ultrawide mode.
- HTTP headers were being sent in the request body.

## v1.4.1

### Improvements

- Improved extraction of first and middle names for certain ID types
- Face capture now performs additional validation checks:
  - Eyes closed
  - Image too dark
  - Face blurry
  - Mouth open
  - Sunglasses detected
  - Improved card scanning performance and reliability
- Enhanced document extraction with additional extracted fields

## v1.3.0

This release fixes a few bugfixes and includes BlinkCard capability - the ability to scan payment cards with the SDK.

### New Features

- Added support for payment card scan capability
- Added support for multiple steps of the same type

## v1.2.1

- D2D bugfixes
