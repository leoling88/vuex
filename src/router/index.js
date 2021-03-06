import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import lists from '@/pages/lists'
import swipers from '@/pages/swipers'
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
    },
    {
      path: '/swipers',
      name: 'swipers',
      component: swipers
    },
   
    /*
    *下拉先择*
    */
    {
      path: '/selects',
      name: 'selects',
      component: function (resolve) {
        require(['../pages/selects'], resolve);
      },
    }, 

    /*
    *表*
    */
    {
      path: '/ColumnTable',
      name: 'ColumnTable',
      component: function (resolve) {
        require(['../pages/ColumnTable'], resolve);
      },
    },  
    {
      path: '/01',
      name: '01',
      component: function (resolve) {
        require(['../pages/01'], resolve);
      },
    },  
  ]
})
