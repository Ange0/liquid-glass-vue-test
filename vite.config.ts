import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss(),],
  resolve: {
    alias: {
      // Alias pour utiliser le package local pendant le développement
      //'liquid-glass-vue3': 'E:/APPS/pakages/liquid-glass-vue/src/index.ts'
    }
  }
})