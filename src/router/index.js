import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'
import AccountType from '@/views/AccountType.vue'
import JobListings from '@/views/JobListings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/account-type',
      name: 'AccountType',
      component: AccountType
    },
    {
      path: '/jobs',
      name: 'JobListings',
      component: JobListings
    }
  ],
})

export default router
