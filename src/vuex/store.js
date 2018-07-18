import Vue from 'vue'
import Vuex from 'vuex'
import topbar from './module/leftbar'
import mine from './module/mine'

Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		topbar,
		mine

	},
	strict: process.env.NODE_ENV !== 'production'
})