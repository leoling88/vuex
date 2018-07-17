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
	leftmenu_show:{
		leftbarOn:false,
		xValueR:0,
		xValueL:'-200'
	},
	lists_data:[
		{
			name:'记一次凉凉的小米面试',
			titel: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			imgnum:'1'

		},
		{
			name:'托马斯底薪加盟掘金虽不甘心,但这却是他重新证明自己的最好机会',
			titel: '小李说体育',
			img:['https://timg.baidu.com/timg?kg-tiyu&sec=1531819680&di=9b70071a5b5745abd281185060a7f112&wh_rate=0&quality=50&size=f300_200&imgtype=1&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F76ca427cb38ff32c6632fa798369377f.jpeg%40wm_2%2Ct_55m%2B5a625Y%2B3L%2BWwj%2BadjuivtOS9k%2BiCsg%3D%3D%2Cfc_ffffff%2Cff_U2ltSGVp%2Csz_17%2Cx_11%2Cy_11','https://timg.baidu.com/timg?kg-tiyu&sec=1531819680&di=dbb4deb74e523ffb61702084d99d9b2a&wh_rate=0&quality=50&size=f300_200&imgtype=1&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fbb3188c70d4b00a4eea360e77598d84b.jpeg%40wm_2%2Ct_55m%2B5a625Y%2B3L%2BWwj%2BadjuivtOS9k%2BiCsg%3D%3D%2Cfc_ffffff%2Cff_U2ltSGVp%2Csz_18%2Cx_12%2Cy_12','https://timg.baidu.com/timg?kg-tiyu&sec=1531819680&di=b5b414a0719163e6e2c20f61bec301d2&wh_rate=0&quality=50&size=f300_200&imgtype=1&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F690b6b3a859186b5d3a398f6cbb4e76a.jpeg%40wm_2%2Ct_55m%2B5a625Y%2B3L%2BWwj%2BadjuivtOS9k%2BiCsg%3D%3D%2Cfc_ffffff%2Cff_U2ltSGVp%2Csz_17%2Cx_11%2Cy_11'],
			imgnum:'1'

		}		
	]
}
//getters 抛出数据
const getters = {
	//导航菜单
	menulist:state => state.menu_list,
	leftbaron:state => state.leftmenu_show,
	lists:state => state.lists_data

}
const actions = {
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
		if(!state.leftmenu_show.leftbarOn){
			state.leftmenu_show.leftbarOn = true
			state.leftmenu_show.xValueR = 200
			state.leftmenu_show.xValueL = 0
		}else{
			state.leftmenu_show.leftbarOn = false
			state.leftmenu_show.xValueR = 0
			state.leftmenu_show.xValueL = -200

		}
	}
}
export default{
	state,
	getters,
	actions,
	mutations,
}