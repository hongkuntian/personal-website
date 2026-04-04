/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string
  readonly PUBLIC_PLAUSIBLE_SRC?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
