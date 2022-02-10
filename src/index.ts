/*
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-28 10:55:24
 * @LastEditTime: 2022-02-10 11:02:37
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import {router} from './routes/index'
import {store} from './store/index'

import App from './App.vue'
// import installElementPlus from './plugins/element'

const app = createApp(App)

 app.use(router)
 app.use(store)
//注入element-plus
// installElementPlus(app)

app.mount('#app')