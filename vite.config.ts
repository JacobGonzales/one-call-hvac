import { fileURLToPath, URL } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    // The shared toolchain pins esbuild 0.28, which no longer performs
    // Vite 6's legacy browser transforms. Emit modern ESM directly.
    target: "esnext",
  },
  optimizeDeps: {
    // Keep development dependency optimization aligned with the modern build
    // target so the pinned esbuild version can process Motion's ESM output.
    esbuildOptions: {
      target: "esnext",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
