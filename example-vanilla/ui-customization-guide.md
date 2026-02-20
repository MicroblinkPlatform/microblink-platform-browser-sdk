# UI Customization Guide — Vanilla JS v1.8.0

This guide covers how to customize the `startScreen`, `progressScreen`, and `endResultScreen` in vanilla JavaScript applications using the IDV SDK.

## Overview

The SDK exposes three customizable screen callbacks:

| Screen                | Callback prop     | Available actions            | Can be skipped? |
| --------------------- | ----------------- | ---------------------------- | --------------- |
| **Start Screen**      | `startScreen`     | `start()`, `cancel()`        | Yes             |
| **Progress Screen**   | `progressScreen`  | `continueFlow()`, `cancel()` | **No**          |
| **End Result Screen** | `endResultScreen` | `finish()`                   | Yes             |

Each callback receives an object with **state** (e.g. `steps`, `status`) and **action functions** (e.g. `start`, `finish`). You return one of:

- **`HTMLElement`** (recommended) — full DOM API, supports event listeners, hover effects, etc.
- **`string`** — HTML string, use `data-idv-action` attributes for actions
- **`null` / `undefined`** — falls back to the default SDK screen

---

## Styling Inside Shadow DOM

The SDK renders all UI inside a **Shadow DOM**, which means:

- External stylesheets and CSS classes from your host page **cannot** reach the custom screens.
- Styles must be delivered **within** the shadow boundary.

### Available Styling Approaches

#### 1. Inline Styles (works, but limited)

Apply styles directly on elements via `Object.assign(el.style, { ... })` or `style="..."` in HTML strings.

```js
const container = document.createElement("div");
Object.assign(container.style, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});
```

**Limitations:** No pseudo-classes (`:hover`, `:focus`, `:active`), no media queries, no `@keyframes` animations. You must use JavaScript event listeners (e.g. `onmouseenter` / `onmouseleave`) to simulate hover effects.

#### 2. Embedded `<style>` Tags (recommended)

Include a `<style>` element in your returned content. It gets injected into the shadow root and is **automatically scoped** — it won't leak to the host page and the host page's styles won't affect it.

**With HTML strings:**

```js
endResultScreen: ({ status }) => {
  return `
    <style>
      .result-screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 40px 20px;
        font-family: system-ui, -apple-system, sans-serif;
      }
      .result-screen h1 {
        font-size: 28px;
        font-weight: 600;
        color: #1a1a1a;
      }
      .result-screen .status-badge {
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 500;
        margin: 12px 0 24px;
      }
      .result-screen .status-badge.accept { background: #e6f4ea; color: #1e7e34; }
      .result-screen .status-badge.reject { background: #fce8e6; color: #c5221f; }
      .result-screen .status-badge.review { background: #fef7e0; color: #b45309; }
      .result-screen .finish-btn {
        padding: 12px 32px;
        font-size: 16px;
        background: #0062F2;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.2s;
      }
      .result-screen .finish-btn:hover {
        background: #0052D9;
      }
    </style>
    <div class="result-screen">
      <h1>Verification Complete</h1>
      <span class="status-badge ${status?.toLowerCase() || 'review'}">${status || 'Unknown'}</span>
      <button class="finish-btn" data-idv-action="finish">Finish</button>
    </div>`;
},
```

**With HTMLElement:**

```js
startScreen: ({ steps, start, cancel }) => {
  const container = document.createElement('div');
  container.className = 'start-screen';

  const style = document.createElement('style');
  style.textContent = `
    .start-screen {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 40px 20px;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .start-screen h1 {
      font-size: 28px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 12px;
    }
    .start-screen .subtitle {
      font-size: 15px;
      color: #666;
      margin-bottom: 32px;
    }
    .start-screen .step-item {
      padding: 12px 16px;
      margin-bottom: 8px;
      background: #f8f9fa;
      border-radius: 8px;
      font-size: 14px;
      color: #333;
      border-left: 3px solid #0062F2;
    }
    .start-screen .btn-primary {
      padding: 12px 32px;
      font-size: 16px;
      font-weight: 500;
      background: #0062F2;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .start-screen .btn-primary:hover {
      background: #0052D9;
    }
    .start-screen .btn-secondary {
      padding: 12px 24px;
      font-size: 16px;
      background: transparent;
      color: #666;
      border: 1px solid #ddd;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .start-screen .btn-secondary:hover {
      border-color: #999;
      color: #333;
    }
  `;
  container.appendChild(style);

  const title = document.createElement('h1');
  title.textContent = 'Identity Verification';
  container.appendChild(title);

  // ... build the rest of the DOM ...

  const startBtn = document.createElement('button');
  startBtn.className = 'btn-primary';
  startBtn.textContent = 'Start Verification';
  startBtn.onclick = start;
  container.appendChild(startBtn);

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'btn-secondary';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.onclick = cancel;
  container.appendChild(cancelBtn);

  return container;
},
```

This approach gives you full CSS — `:hover`, `:focus`, `:active`, media queries, `@keyframes`, transitions — all working without any JavaScript workarounds.

#### 3. CSS Custom Properties (inherit through Shadow DOM)

CSS custom properties (variables) are the **only** CSS mechanism that crosses the shadow boundary. Set them on your host page and reference them inside your custom screens:

**Host page CSS:**

```css
:root {
  --idv-accent: #0062f2;
  --idv-accent-hover: #0052d9;
  --idv-font-family: "Inter", sans-serif;
  --idv-border-radius: 8px;
}
```

**Inside your custom screen:**

```js
startScreen: ({ start }) => {
  return `
    <style>
      .start-screen {
        font-family: var(--idv-font-family, system-ui, sans-serif);
      }
      .start-btn {
        background: var(--idv-accent, #0062F2);
        border-radius: var(--idv-border-radius, 8px);
        /* ...other styles... */
      }
      .start-btn:hover {
        background: var(--idv-accent-hover, #0052D9);
      }
    </style>
    <div class="start-screen">
      <button class="start-btn" data-idv-action="start">Begin</button>
    </div>`;
},
```

This is useful for making your custom screens respect the host application's design tokens.

---

## Handling Actions

### HTMLElement approach — use event listeners directly

```js
button.onclick = start;
exitButton.onclick = cancel;
```

### HTML string approach — use `data-idv-action` attributes

Since `onclick="..."` inline handlers don't work with `innerHTML` (for security reasons), the SDK provides a delegated event system. Add a `data-idv-action` attribute with one of these values:

| Attribute value                  | Action                       |
| -------------------------------- | ---------------------------- |
| `data-idv-action="start"`        | Starts the verification flow |
| `data-idv-action="continueFlow"` | Proceeds to the next step    |
| `data-idv-action="cancel"`       | Cancels the flow             |
| `data-idv-action="finish"`       | Finishes and closes the flow |

```html
<button data-idv-action="start">Begin Verification</button> <button data-idv-action="cancel">Cancel</button>
```

The SDK listens for clicks inside the container and matches the closest `[data-idv-action]` element automatically.

---

## Skipping Screens

### `startScreen` — can be skipped

If you don't need a start screen, immediately call `start()` and return an empty string or a minimal loader. The flow will begin right away:

```js
startScreen: ({ start }) => {
  start();
  return '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;"><p>Loading...</p></div>';
},
```

### `endResultScreen` — can be skipped

Similarly, if you want to handle the result entirely through the `onTransactionFinished` callback, you can auto-finish:

```js
endResultScreen: ({ finish }) => {
  finish();
  return '';
},
```

### ⚠️ `progressScreen` — CANNOT be skipped

**Do NOT immediately call `continueFlow()` inside the `progressScreen` callback.**

The progress screen serves as a critical navigation point: when a user presses the **X** (close/cancel) button during a capability execution (e.g. document scanning), the SDK navigates them back to the progress screen. If `continueFlow()` is called immediately, the same capability restarts instantly — making it appear as if the X button doesn't work. The user becomes trapped in a loop with no way to exit.

You **must** provide a visible UI element (e.g. a "Continue" button) that the user clicks to trigger `continueFlow()`:

```js
progressScreen: ({ steps, continueFlow, cancel }) => {
  return `
    <style>
      .progress-screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 40px 20px;
        font-family: system-ui, -apple-system, sans-serif;
      }
      .progress-screen h1 {
        font-size: 24px;
        color: #1a1a1a;
        margin-bottom: 8px;
      }
      .progress-screen p {
        color: #666;
        margin-bottom: 24px;
      }
      .progress-screen .continue-btn {
        padding: 12px 32px;
        font-size: 16px;
        background: #0062F2;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.2s;
      }
      .progress-screen .continue-btn:hover {
        background: #0052D9;
      }
      .progress-screen .cancel-btn {
        margin-top: 12px;
        padding: 8px 16px;
        font-size: 14px;
        background: transparent;
        color: #666;
        border: 1px solid #ddd;
        border-radius: 8px;
        cursor: pointer;
      }
      .progress-screen .cancel-btn:hover {
        border-color: #999;
        color: #333;
      }
    </style>
    <div class="progress-screen">
      <h1>Verification in Progress</h1>
      <p>Please wait while we process your information.</p>
      <button class="continue-btn" data-idv-action="continueFlow">Continue to Next Step</button>
      <button class="cancel-btn" data-idv-action="cancel">Cancel Verification</button>
    </div>`;
},
```

---

## Callback Arguments Reference

### `startScreen({ steps, start, cancel })`

| Argument | Type                                                                | Description                          |
| -------- | ------------------------------------------------------------------- | ------------------------------------ |
| `steps`  | `Array<{ id, type, isCompleted, wfStepName?, wfStepDescription? }>` | Workflow steps that will be executed |
| `start`  | `() => void`                                                        | Starts the verification flow         |
| `cancel` | `() => void`                                                        | Cancels and exits the flow           |

### `progressScreen({ steps, continueFlow, cancel })`

| Argument       | Type                                                                | Description                           |
| -------------- | ------------------------------------------------------------------- | ------------------------------------- |
| `steps`        | `Array<{ id, type, isCompleted, wfStepName?, wfStepDescription? }>` | Workflow steps with completion status |
| `continueFlow` | `() => void`                                                        | Proceeds to the next step             |
| `cancel`       | `() => void`                                                        | Cancels and exits the flow            |

### `endResultScreen({ status, transactionId, finish })`

| Argument        | Type                                            | Description                  |
| --------------- | ----------------------------------------------- | ---------------------------- |
| `status`        | `'Accept' \| 'Reject' \| 'Review' \| 'Unknown'` | Final verification status    |
| `transactionId` | `string`                                        | Transaction identifier       |
| `finish`        | `() => void`                                    | Finishes and closes the flow |

---

## Full Example

Below is a complete example using embedded `<style>` tags across all three screens:

```js
import { createIdvFlow } from "@microblink/platform-sdk/vanilla";

const { unmount } = createIdvFlow({
  apiConfig: {
    proxy: { baseUrl: "https://your-proxy.example.com" },
    workflowId: "your-workflow-id",
    d2d: { runAddress: "https://d2d-run-address.example.com" },
  },
  consentData: {
    userId: "user-123",
  },

  startScreen: ({ steps, start, cancel }) => {
    const wrapper = document.createElement("div");
    wrapper.className = "custom-start";

    const style = document.createElement("style");
    style.textContent = `
      .custom-start {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        font-family: system-ui, -apple-system, sans-serif;
        background: #fff;
      }
      .custom-start h1 {
        font-size: 28px;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 8px;
      }
      .custom-start .subtitle {
        font-size: 15px;
        color: #666;
        margin: 0 0 32px;
      }
      .custom-start .steps-list {
        list-style: none;
        padding: 0;
        margin: 0 0 32px;
        width: 100%;
        max-width: 400px;
      }
      .custom-start .steps-list li {
        padding: 12px 16px;
        margin-bottom: 8px;
        background: #f8f9fa;
        border-radius: 8px;
        font-size: 14px;
        color: #333;
        border-left: 3px solid #0062F2;
      }
      .custom-start .actions {
        display: flex;
        gap: 12px;
      }
      .custom-start .btn-start {
        padding: 12px 32px;
        font-size: 16px;
        font-weight: 500;
        background: #0062F2;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.2s;
      }
      .custom-start .btn-start:hover { background: #0052D9; }
      .custom-start .btn-cancel {
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        background: transparent;
        color: #666;
        border: 1px solid #ddd;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
      }
      .custom-start .btn-cancel:hover { border-color: #999; color: #333; }
    `;
    wrapper.appendChild(style);

    wrapper.insertAdjacentHTML(
      "beforeend",
      `
      <h1>Identity Verification</h1>
      <p class="subtitle">Complete the following steps to verify your identity</p>
      ${
        steps.length
          ? `
        <ul class="steps-list">
          ${steps.map((s, i) => `<li>${i + 1}. ${s.wfStepName || s.type}</li>`).join("")}
        </ul>
      `
          : ""
      }
      <div class="actions">
        <button class="btn-start">Start Verification</button>
        <button class="btn-cancel">Cancel</button>
      </div>
    `,
    );

    wrapper.querySelector(".btn-start").onclick = start;
    wrapper.querySelector(".btn-cancel").onclick = cancel;

    return wrapper;
  },

  progressScreen: ({ steps, continueFlow, cancel }) => {
    return `
      <style>
        .custom-progress {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100%;
        }
        .custom-progress h2 { font-size: 22px; color: #1a1a1a; margin: 0 0 16px; }
        .custom-progress .step-tracker {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
        }
        .custom-progress .step-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ddd;
        }
        .custom-progress .step-dot.done { background: #34a853; }
        .custom-progress .btn-continue {
          padding: 12px 32px;
          font-size: 16px;
          background: #0062F2;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .custom-progress .btn-continue:hover { background: #0052D9; }
        .custom-progress .btn-exit {
          margin-top: 12px;
          padding: 8px 16px;
          font-size: 14px;
          background: transparent;
          color: #666;
          border: 1px solid #ddd;
          border-radius: 8px;
          cursor: pointer;
        }
        .custom-progress .btn-exit:hover { border-color: #999; color: #333; }
      </style>
      <div class="custom-progress">
        <h2>Verification in Progress</h2>
        <div class="step-tracker">
          ${steps.map((s) => `<div class="step-dot ${s.isCompleted ? "done" : ""}"></div>`).join("")}
        </div>
        <button class="btn-continue" data-idv-action="continueFlow">Continue to Next Step</button>
        <button class="btn-exit" data-idv-action="cancel">Cancel Verification</button>
      </div>`;
  },

  endResultScreen: ({ status, transactionId }) => {
    const statusClass = (status || "unknown").toLowerCase();
    return `
      <style>
        .custom-result {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 40px 20px;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .custom-result h1 { font-size: 28px; color: #1a1a1a; margin: 0 0 12px; }
        .custom-result .badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .custom-result .badge.accept  { background: #e6f4ea; color: #1e7e34; }
        .custom-result .badge.reject  { background: #fce8e6; color: #c5221f; }
        .custom-result .badge.review  { background: #fef7e0; color: #b45309; }
        .custom-result .badge.unknown { background: #f0f0f0; color: #666; }
        .custom-result .tx-id {
          font-size: 13px;
          color: #999;
          margin-bottom: 24px;
        }
        .custom-result .btn-finish {
          padding: 12px 32px;
          font-size: 16px;
          background: #0062F2;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .custom-result .btn-finish:hover { background: #0052D9; }
      </style>
      <div class="custom-result">
        <h1>Verification Complete</h1>
        <span class="badge ${statusClass}">${status || "Unknown"}</span>
        <p class="tx-id">Transaction: ${transactionId || "N/A"}</p>
        <button class="btn-finish" data-idv-action="finish">Done</button>
      </div>`;
  },

  onTransactionFinished: (result) => {
    console.log("Finished:", result.status, result.transactionId);
    unmount();
  },
  onAbort: () => {
    console.log("Aborted");
    unmount();
  },
});
```

---

## Current Limitations

Since the SDK renders inside a Shadow DOM, the following limitations apply:

- **Host page stylesheets don't apply.** CSS classes, IDs, or tag selectors defined in your app's stylesheets will not affect custom screens inside the shadow boundary.
- **No external CSS file imports.** You cannot use `<link rel="stylesheet" href="...">` inside the shadow DOM to load external CSS files (the browser won't resolve them inside the shadow root).
- **CSS custom properties are the only cross-boundary mechanism.** Only `var(--your-variable)` values inherit through the shadow DOM. All other CSS does not.
- **No shared CSS-in-JS.** If your app uses Tailwind, Bootstrap, or a CSS-in-JS library, those styles are injected into `document.head` and won't be visible inside the shadow DOM.
- **Each screen callback is invoked once.** The returned content is rendered and cached. You cannot dynamically re-render it by returning different content on subsequent calls.

> **Coming in the next major release:** Headless mode will remove the Shadow DOM constraint entirely, giving you full control over rendering and styling with no boundary restrictions.
