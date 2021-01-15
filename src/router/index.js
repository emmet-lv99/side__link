import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Join from '../views/Join.vue'
import Reset from '../views/Reset.vue'
import Board from '../views/Board.vue'
import linkBoard from '../components/linkBoard.vue'
import themeSetting from '../components/themeSetting.vue'
import userInsight from '../components/userInsight.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/p',
    name: 'Board',
    component: Board,
    redirect: '/p/links',
    children: [{
      path: 'links',
      name: 'links',
      component: linkBoard
    },
    {
      path: 'theme',
      name: 'theme',
      component: themeSetting
    },
    {
      path: 'insight',
      name: 'insight',
      component: userInsight
    }]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
