import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use base: '/portfolio/' for GitHub Pages when repo name is 'portfolio'
  base: './',
})
