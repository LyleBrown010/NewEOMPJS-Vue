import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/Contact-View.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/Products-View.vue')
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import( '../views/Product-View.vue'),
    props: true,
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/Admin-View.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/Cart-View.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
