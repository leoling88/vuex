import api from './../../fetch/api'
import * as types from './../type'

const state = {
	getMineBaseMsg: {
		errno: 1,
		msg: {},
		listshot:[]
	},
	

}
const actions = {
	getMineBaseMsg({commit}) {
		console.log('进入acions');
		api.mineBaseMsgApi()
		.then( res => {
			console.log('actions中调用封装后的axios成攻' + res);
			commit(types.GET_BASE_API, res)

		})
	}

}

const getters = {
	getMineBaseMsg: state => state.getMineBaseMsg
}

const mutations = {
	[types.GET_BASE_API](state, res){
		console.log('进入mutation');
		state.getMineBaseMsg = { ...state.getMineBaseMsg , listshot: res.data.msg }
		console.log('进入mutation修改state成功' );
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}