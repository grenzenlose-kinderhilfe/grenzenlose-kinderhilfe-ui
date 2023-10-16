import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build/',
    rollupOptions: {
      output: {
        assetFileNames: 'static/[ext]/[name]-[hash][extname]',
        entryFileNames: 'static/js/[name]-[hash].js'
      }
    }
  }
})
