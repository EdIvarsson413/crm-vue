import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [
      { find: '@vws', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
      { find: '@cmp', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
    ]
  }
})
