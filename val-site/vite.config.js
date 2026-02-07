import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use GITHUB_PAGES env var to set base path for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/website-ff/' : '/',
})
