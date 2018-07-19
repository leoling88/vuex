import api from './../../fetch/api'
import * as types from './../type'

const state = {


}
const actions = {
	NewsHot({ commit }, status) {
	        commit(types.GET_NEWS_HOST, status)
	}

}

const getters = {
}

const mutations = {

    [types.GET_NEWS_HOST](state, status) {
        state.loading = status
    }
}

export default {
	state,
	actions,
	getters,
	mutations
}