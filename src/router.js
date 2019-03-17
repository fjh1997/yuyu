import Vue from 'vue'
import Router from 'vue-router'
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
    }
   
  ]
})
