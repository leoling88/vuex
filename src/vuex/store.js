import Vue from 'vue'
import Vuex from 'vuex'
import topbar from './module/public'
import mine from './module/mine'
import lists from './module/lists'
Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		topbar,
		mine,
		lists

	}
	//strict: process.env.NODE_ENV !== 'production'
})