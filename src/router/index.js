import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueParticles from 'vue-particles'


Vue.use(VueParticles)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PM2.5',
    name: 'PM2.5',
    component: () => import(/* webpackChunkName: "about" */ '../views/PM2.5.vue')
  },
  {
    path: '/T',
    name: 'T',
    component: () => import(/* webpackChunkName: "about" */ '../views/T.vue')
  },
  {
    path: '/CO2',
    name: 'CO2',
    component: () => import(/* webpackChunkName: "about" */ '../views/CO2.vue')
  },
  {
    path: '/H',
    name: 'H',
    component: () => import(/* webpackChunkName: "about" */ '../views/H.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
