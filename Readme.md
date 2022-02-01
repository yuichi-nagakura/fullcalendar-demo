
## FullCalendarのサンプルをGitHub Pagesにアップロードしたかっただけのプロジェクト

GitHub Pages URL: 
https://yuichi-nagakura.github.io/fullcalendar-demo/dist/


### vite.config.jsの設定（覚え書き）

`base: '/fullcalendar-demo/dist/',`が肝。

```js
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fullcalendar-demo/dist/',
  build: {
    chunkSizeWarningLimit: 1500,
    minify: true,
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
```