const state = {
	menu_list:[
		{
			name:'综合管理',
			content:[
				{
					o_name:'个人积分管理',
					o_content:[
						{
							i_name:'积分审核',
							id:'A01'
						}

					]

				}
			]
		},
		{
			name:'综合管理',
			content:[
				{
					o_name:'个人积分管理',
					o_content:[
						{
							i_name:'积分审核',
							id:'A01'
						}

					]

				}
			]
		},


		
	]
}
//getters 抛出数据
const getters = {
	//导航菜单
	menulist:state => state.menu_list
}
export default{
	state,
	getters,
}