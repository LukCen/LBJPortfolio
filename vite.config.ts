import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { beasties } from 'vite-plugin-beasties'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), beasties({
    options: {
      preload: 'swap',
      pruneSource: false,
      inlineThreshold: 4000
    },
    filter: path => path.endsWith('.html')
  })]
})
