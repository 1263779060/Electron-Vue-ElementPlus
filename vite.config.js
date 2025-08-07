import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: './',// 这个配置让资源引用相对路径，适合Electron加载本地文件
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})