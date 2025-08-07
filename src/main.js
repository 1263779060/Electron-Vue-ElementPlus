import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 设置element-plus语言为中文
import zhCN from 'element-plus/es/locale/lang/zh-cn'

// main.js
import 'vuetify/styles' // Vuetify 样式
import '@mdi/font/css/materialdesignicons.css' // MDI 图标样式

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus,{locale:zhCN})
app.mount('#app')
