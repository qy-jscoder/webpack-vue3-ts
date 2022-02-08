/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: 邱扬
 * @LastEditTime: 2022-02-08 09:45:40
 */
import { createRouter, createWebHistory } from 'vue-router'

const routers = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/child',
    name: 'child',
    component: () => import('../views/Child.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routers,
})
