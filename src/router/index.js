import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    // this is my home page
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // this will be my login page - change names accordingly
    path: '/about',
    name: 'about',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
