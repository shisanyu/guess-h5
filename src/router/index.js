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
        //首页
        {path:'/layout/home',name:'home',component: Home,meta: { keepAlive: true }},
        //用户中心-充值
        {path:'/layout/pay',name:'pay',component: () => import('@/views/User/pay.vue'),meta: { keepAlive: true ,title:'充值',}},
        {path:'/layout/about',name:'about',component: () => import('@/views/Home/About.vue'),meta: { keepAlive: true }},

      ]
    },
    /*******登录********/
    {
      path:'/login',
      name: 'login',
      component: () => import('@/views/Other/Login.vue')
    },
  ]
})
