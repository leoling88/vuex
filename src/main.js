// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
//import VueRouter from 'vue-router'
import store from './vuex/store'
//import axios from 'axios'
// 告诉 vue 使用这个 router(路由)
//Vue.use(VueRouter)
Vue.use(Vuex)
//Vue.prototype.$ajax = axios
//Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  //components: { App }  vue1.0的写法
  render: h => h(App)    //vue2.0的写法
}).$mount('#app')
