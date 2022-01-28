/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: 邱扬
 * @LastEditTime: 2022-01-28 18:12:06
 */
import { createRouter, createMemoryHistory, Router } from 'vue-router'

const routers = [{
    path:'/',
    component: () => import('../views/Home.vue')
},{
    path:'/child',
    component: () => import('../views/Child.vue')
}
];
 
const router:Router = createRouter({
    history:createMemoryHistory(),
    routes:routers
})

export default router