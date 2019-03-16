import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import up from './views/up.vue'
import newone from './views/newone.vue'
import index from './views/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
     {
      path: '/up',
      name: 'up',
      component: up
    },
     {
      path: '/newone',
      name: 'newone',
      component: newone
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
