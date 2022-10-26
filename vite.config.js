import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path' 
// https://vitejs.dev/config/
export default defineConfig({
  base: path.resolve(__dirname, './dist/'),	// 新增
  plugins: [svelte()]
})
