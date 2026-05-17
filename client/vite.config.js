// Vite config for the WorkoutTracker client.
// Dev server runs on 5173 and proxies /api/* to Django on 8000 once a backend exists.
// The proxy is harmless to leave in place even before there is a backend to hit.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API calls to Django during development so the browser doesn't see CORS.
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
})
