import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import lists from '@/pages/lists'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/lists',
      name: 'lists',
      component: lists
    }
  ]
})
