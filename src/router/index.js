import Vue from 'vue'
import Router from 'vue-router'
import contentview from '@/components/contentview'
import listview from '@/components/listview'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contentview',
      component: contentview
    },
    {
      path: '/list',
      component: listview
    }
  ]
})
