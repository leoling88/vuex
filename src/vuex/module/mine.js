//import api from './../../fetch/api'
import * as types from '../types'

const state = {


}
const actions = {
	NewsHot({ commit }, status) {
		console.log('dd')
	        commit(types.GET_NEWS_HOST, status)
	}

}

const getters = {
}

const mutations = {
    [types.GET_NEWS_HOST](state, status) {
        //state.loading = status
        console.log(status)
    }
}

export default {
	state,
	actions,
	getters,
	mutations
}