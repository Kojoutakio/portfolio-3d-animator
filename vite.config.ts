import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Uncomment if deploying to GitHub Pages under a repo subpath:
  // base: '/portfolio-3d-animator/',
})
