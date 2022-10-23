import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/HyakuMasu',
    name: 'HyakuMasu',
    component: () => import('../views/HyakuMasu.vue')
  },
  {
    path: '/ModeSerrect',
    name: 'ModeSerrect',
    component: () => import('../views/ModeSerrect.vue')
  },
  {
    path: '/FourSquares',
    name: 'FourSquares',
    component: () => import('../views/FourSquares.vue')
  },
  {
    path: '/NineSquares',
    name: 'NineSquares',
    component: () => import('../views/NineSquares.vue')
  },
  {
    path: '/SixteenSquares',
    name: 'SixteenSquares',
    component: () => import('../views/SixteenSquares.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
