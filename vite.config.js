// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve('./src'),
  base: '/',
  server: { origin: "http://localhost:8080" },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    manifest: true,
    outDir: resolve('./dist'),
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./src/main.js'),
	    // explore: resolve('./theme/static/src/explore/main.js'),
      }
    }
  }
})
