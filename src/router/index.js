import Vue from 'vue'
import Router from 'vue-router'
import contentview from '@/page/home'
import listhot from '@/components/listhot'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contentview',
      component: contentview
    },
    {
      path: '/listhot',
      name: 'listhot',
      component: listhot
    }
  ]
})
