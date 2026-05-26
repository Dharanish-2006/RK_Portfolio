import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // In dev, proxy /api calls to Vercel CLI dev server (port 3000)
      // Run: `vercel dev` instead of `npm run dev` to test functions locally
      // Or keep Express running on 4000 for quick local testing
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
