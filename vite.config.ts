import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Served from https://cocolg35.github.io/portfolio/ by GitHub Pages
  base: '/portfolio/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "/src/styles/mixins" as *;\n',
      },
    },
  },
})
