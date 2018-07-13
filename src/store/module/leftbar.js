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

				},								
			],
			isShow: false
		}


		
	]
}
//getters 抛出数据
const getters = {
	//导航菜单
	menulist:state => state.menu_list,


}
const actions  = {
//菜单点击事
clickMenu({commit},index){
	commit('menuShow', index)
}

}
const mutations = {
	//点击事件高亮
	menuShow(state, index){
		state.menu_list.forEach((n, i) => {
			
			if(n.index == index.index){
				console.log(n.index +'---'+ i)

			}

		})


	}
}
export default{
	state,
	getters,
	actions,
	mutations,
}