
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
