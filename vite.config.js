import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1500, // Increase chunk size warning limit
    rollupOptions: {
      // Removed manualChunks to avoid empty chunk warnings
    }
  },
  base: "./",
});
