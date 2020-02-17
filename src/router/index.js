import Vue from 'vue'
import VueRouter from 'vue-router'
import CinemaRouter from './cinema/'
import MovieRouter from './movie/'
import MineRouter from './mine/'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

export default new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes:[
    CinemaRouter,MovieRouter,MineRouter,
    // 路由重定向 
    {
      path : '/',
      redirect : '/movie'
    } 
  ]
})
