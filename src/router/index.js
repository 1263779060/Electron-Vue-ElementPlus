// src/router/index.js
import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import One from '../components/one.vue'
import Two from '../components/two.vue'

const routes = [{
		path: '/',
		component: HelloWorld
	},
	{
		path: '/one',
		component: One
	},
	{
		path: '/two',
		component: Two
	}
]

const router = createRouter({
	history: createWebHashHistory(), // 👈 使用 Hash 模式，兼容 Electron 打包
	routes
})

export default router