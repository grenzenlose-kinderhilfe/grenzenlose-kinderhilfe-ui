import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import zipPack from "vite-plugin-zip-pack";

export default defineConfig({
  plugins: [react(), zipPack({ outFileName: "grenzenlose-kinderhilfe.zip" })],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "static/[ext]/[name]-[hash][extname]",
        entryFileNames: "static/js/[name]-[hash].js",
      },
    },
  },
});
