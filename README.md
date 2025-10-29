<p align="center" >
  <img src="https://raw.githubusercontent.com/wiki/blinkid/blinkid-android/images/logo-microblink.png" alt="Microblink" title="Microblink">
</p>

# Microblink Platform browser SDK

The Microblink Platform browser SDK is a TypeScript client library which allows you to integrate Platform workflows into your web application.

The SDK documentation is available [here](https://platform.docs.microblink.com/sdk/web/).

This README covers how to use the example apps (`example-react` and `example-vanilla`).

## Prerequisites

To successfully run the example apps, you need:

1. A [Microblink Platform account and API credentials](https://platform.docs.microblink.com/account-setup/). 
2. A [workflow](https://platform.docs.microblink.com/build-workflow/). After this step, you should know your workflow ID.
3. An [transaction proxy](https://platform.docs.microblink.com/proxy) with which you can test the workflow. For testing, you can use our own [transaction proxy](https://github.com/MicroblinkPlatform/microblink-platform-transaction-proxy). After this step, you should know your transaction proxy URL.

Clone the repository and you're ready to run the apps now.

## Run the example apps

1. Navigate to one of the example apps.
2. Install its dependencies:
   ```
   npm install
   ```
3. Run the app:
   ```
   npm run dev
   ```

The apps will run on `localhost`, port 8080 (`example-react`) or 3000 (`example-vanilla`).

## Use the example apps

1. Enter your workflow ID, for example: `6870ca44335606082bb4bf90`.
2. Enter your proxy URL, for example: `http://localhost:8081/transaction`.
3. Select localization or customization options.
4. Turn [D2D](https://platform.docs.microblink.com/d2d/) on or off.

