import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Shaderandsocket_fe/', // 
  plugins: [react()],
})