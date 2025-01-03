/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USERS_URL: string;
  readonly VITE_USER_DETAILS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}