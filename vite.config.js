import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,  // don't re-encode base64 assets
    chunkSizeWarningLimit: 30000, // 30MB — images are large base64
  },
  server: {
    port: 3000,
  },
});
