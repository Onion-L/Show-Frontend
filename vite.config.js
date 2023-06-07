import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    mode: 'production'
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 代理的目标地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 去掉/api前缀
      }
    }
  }
})


