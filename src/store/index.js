import Vue from 'vue'
import Vuex from 'vuex'
import topbar from './module/leftbar'
Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		topbar,

	},
	strict: process.env.NODE_ENV !== 'production'
})