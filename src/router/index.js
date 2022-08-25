import { createRouter, createWebHistory } from 'vue-router'
import Orderboard from '../components/Orderboard.vue'

const routes = [
  {
    path: '/',
    name: 'orderboard',
    component: Orderboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router