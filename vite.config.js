import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/desafio-guru/', // Asegúrate de que coincida con el nombre de tu repositorio
})
