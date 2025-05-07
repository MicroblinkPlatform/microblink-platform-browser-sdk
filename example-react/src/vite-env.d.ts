/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROXY_URL: string;
  readonly VITE_WORKFLOW_ID: string;
  readonly VITE_PASSWORD_HASH: string;
  readonly VITE_D2D_RUN_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
