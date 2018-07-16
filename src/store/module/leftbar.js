const state = {
	menu_list:[
		{
			name:'综合管理',
			content:[
				{
					o_name:'个人积分管理',
					o_id: 'A01'

				},
				{
					o_name:'积分申请顾',
					o_id: 'A02'

				}


			],
			isShow: false
		},
		{
			name:'系统管理',
			content:[
				{
					o_name:'申请人积分管理',
					o_id:'B01'

				},
				{
					o_name:'注销帐户管理',
					o_id:'B02'

				},
				{
					o_name:'数据字典',
					o_id:'B03'

				}								
			],
			isShow: false
		}
	],
	leftbarOn:false
}
//getters 抛出数据
const getters = {
	//导航菜单
	menulist:state => state.menu_list,
	leftbaron:state => state.leftbarOn

}
const actions  = {
	//菜单点击事
	clickMenu({commit},index){
		commit('menuShow', index)
	},
	clickMenuShow({commit}){
		commit('leftbarShow')
	}

}
const mutations = {
	//点击事件高亮
	menuShow(state, index){
		console.log(state.menu_list[index].name)
		state.menu_list.forEach((n, i) => {
			if(i == index){
				state.menu_list[i].isShow = state.menu_list[i].isShow == false ? true : false 
			}else{
				state.menu_list[i].isShow = false
			}
		})

	},
	leftbarShow(){
		if(!state.leftbarOn){
			state.leftbarOn = true
		}else{
			state.leftbarOn = false

		}
	}
}
export default{
	state,
	getters,
	actions,
	mutations,
}