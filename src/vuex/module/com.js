import * as types from '../types'

/**
 * App通用配置
 */
const state = {
	loadingShow: false

}



const mutations = {
    COM_LOADING_STATUS(state, status) {
        state.loadingShow = status
    },

}


export default {
    state,
    mutations
}