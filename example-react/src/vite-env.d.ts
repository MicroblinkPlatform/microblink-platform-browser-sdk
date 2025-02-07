/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROXY_URL: string;
  readonly VITE_WORKFLOW_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
