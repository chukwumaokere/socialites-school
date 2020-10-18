import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '@/views/LandingPage';
import PageNotFound from '@/views/PageNotFound';
import Courses from '@/views/Courses';
import Plans from "@/views/Plans";
import SignUpLoginPage from "@/views/SignUpLoginPage";
import FinishSignUp from '@/views/FinishSignUp';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {
      title: "Learn about Socialite's School",
      metaTags: [
        { name: 'description', content: "Socialite's School landing page" }, 
        { property: 'og:description', content: "Socialite's School landing page" },
      ],
    }
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
    path: '/courses',
    name: 'Courses',
    component: Courses,
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans,
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUpLoginPage
  },
  {
    path: '/finishsignup',
    name: 'Finish Sign Up',
    component: FinishSignUp,
    meta: {
      title: 'Finish Creating Your Account'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
    meta: {
      title: "404 — Page Not Found"
    },
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
