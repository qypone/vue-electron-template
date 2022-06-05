import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  //base: path.resolve(__dirname, './dist'),
  base: "./",
  plugins: [vue(),ElementPlus()]
})