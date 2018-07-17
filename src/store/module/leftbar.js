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
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			imgnum:'1'

		},
		{
			name:'托马斯底薪加盟掘金虽不甘心,但这却是他重新证明自己的最好机会',
			title: '小李说体育',
			img:['https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1269329551,2664789443&fm=173&app=25&f=JPEG?w=218&h=146&s=A9505795C78254E2086521DC0300C0B2','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=89775878,3966491195&fm=173&app=25&f=JPEG?w=218&h=146&s=6281994542C839430E38988103007091','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1783121282,3259846909&fm=173&app=25&f=JPEG?w=218&h=146&s=6786D30C7C9D06DC109927B203007082'],
			imgnum:'3'

		},
		{
			name:'昔日恋情遭同是饰演小燕子的女星插足，今混得风生水起成大富豪！',
			title: '娱乐8公子',
			img:['https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2763641915,1369240630&fm=173&app=25&f=JPEG?w=400&h=300&s=6280D70948AA609C9A2081FD03005023','https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4242342016,2246539952&fm=173&app=25&f=JPEG?w=549&h=437&s=FFA838631CFB659E840858830300E0C0','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4007333831,1431007671&fm=173&app=25&f=JPEG?w=440&h=381&s=B2E1D8017A0B1A55469930AF0300A000'],
			imgnum:'3'

		},
		{
			name:'男子躲厕所拿镜子偷窥女租客 竟连小伙子也不放过',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			imgnum:'1'

		},	
		{
			name:'男子躲厕所拿镜子偷窥女租客 竟连小伙子也不放过',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			imgnum:'1'

		},
		{
			name:'记一次凉凉的小米面试',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			imgnum:'1'

		},	
		{
			name:'记一次凉凉的小米面试',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
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