/*
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-28 10:55:24
 * @LastEditTime: 2022-01-28 18:12:17
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import router from './routes/index'
import App from './App.vue'

const app = createApp(App)

 app.use(router)
//app.use(ElementPlus) //导入element-plus

app.mount('#app')