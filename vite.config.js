import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, host: true },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      external: [
        "@capacitor/browser",
        "@capacitor/filesystem",
        "@capacitor/share",
        "@capacitor/core",
        "@capacitor/app",
        "@capacitor/preferences",
        "@capacitor/local-notifications",
        "@capacitor/push-notifications",
      ],
    },
  },
});
