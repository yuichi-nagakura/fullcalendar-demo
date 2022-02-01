import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/docs/',
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
