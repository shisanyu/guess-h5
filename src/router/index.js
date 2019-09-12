import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/Layout'
import Home from '@/views/Home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children:[
        {path:'/layout/home',name:'home',component: Home,meta: { keepAlive: true }},
        {path:'/layout/about',name:'about',component: () => import('@/views/Home/About.vue'),meta: { keepAlive: true }},
      ]
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('@/views/Other/Login.vue')
    }
  ]
})
