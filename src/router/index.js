import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '@/views/LandingPage';
import PageNotFound from '@/views/PageNotFound';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
