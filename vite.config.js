import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  root: resolve(__dirname, 'src/pages'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        page1: resolve(__dirname, './src/pages/page1/index.html'),
        page2: resolve(__dirname, './src/pages/page2/index.html'),
      },
    },
  },
});
