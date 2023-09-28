import { createRouter, createWebHistory } from "vue-router"
import Home from '@/views/Home/Index.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/dynamic',
    component: () => import('@/views/Dynamic/Index.vue'),
    name: 'dynamic',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 创建router实例对象并暴露
export default router
