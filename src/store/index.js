import Vue from 'vue'
import Vuex from 'vuex'
//import topbar from './components/topbar'

Vue.use(Vuex);
export default new Vuex.Store({
	module:{
		//topbar

	},
	strict: process.env.NODE_ENV !== 'production'
})