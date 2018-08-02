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
	transition_show:{
		pngBg: false,
		loading: false,
		promputup: false,
		promputover: false,
	},
	scroll_param:{
      pageX:0,
      pageY:0,
      pageHeight:'',
      bodyHeight:'',
      scrollTop:0,
      aspect: 0,  //2向上，1向下
      myViewH:0,
      loadMore: true,
      loadIn:false,
      pageNum:false,      		
	}
}
//getters 抛出数据
const getters = {
	//导航菜单
	menulist:state => state.menu_list,
	leftbaron:state => state.leftmenu_show,
	lists:state => state.lists_data,
	transitionshow:state => state.transition_show,
	scrollparam:state => state.scroll_param

}
const actions = {
	//菜单点击事
	clickMenu({commit},index){
		commit('menuShow', index)
	},
	clickMenuShow({commit}){
		commit('leftbarShow')
	},
	onTouchStart({commit}, e) {
		commit('touchStart',e)
	},
	onTouchMove({commit}, e) {
		commit('touchMove', e)
	},
	onTouchEnd({commit}, e) {
		commit('touchEnd', e)
	}

}

let scrooll_h = 0
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
			state.transition_show.pngBg = true
		}else{
			state.leftmenu_show.leftbarOn = false
			state.leftmenu_show.xValueR = 0
			state.leftmenu_show.xValueL = -200
			state.transition_show.pngBg = false

		}
	},
    touchStart(state, e){ //触摸事件
        //state.scroll_param.pageX = e.targetTouches[0].pageX
        state.scroll_param.pageY = e.targetTouches[0].pageY
        state.scroll_param.pageHeight = e.currentTarget.offsetHeight
        state.scroll_param.bodyHeight = document.documentElement.clientHeight;
        //console.log(state.scroll_param.pageHeight)
        //console.log("X:" + state.scroll_param.pageX +"||" +"Y:" + state.scroll_param.pageY)
    },
    touchMove(state, e){
    	//console.log(e.targetTouches[0].pageX +"<=====>"+state.scroll_param.pageX)
    	if(e.targetTouches[0].pageY > state.scroll_param.pageY ) {     //向下滑动
    		state.scroll_param.aspect = 1
    		scrooll_h = ( e.targetTouches[0].pageY - state.scroll_param.pageY ) * 1
    	}else if( e.targetTouches[0].pageY < state.scroll_param.pageY ){  //向上滑动
    		state.scroll_param.aspect = 2
    		scrooll_h =  (state.scroll_param.pageY - e.targetTouches[0].pageY) * 1
    	}
    },
    touchEnd(state, e){
    	
    	if( state.scroll_param.aspect === 2 && ( state.scroll_param.bodyHeight + Math.abs(state.scroll_param.scrollTop) ) <= state.scroll_param.pageHeight){
    		console.log("向上")
			state.scroll_param.scrollTop -= scrooll_h
			if( state.scroll_param.bodyHeight + Math.abs(state.scroll_param.scrollTop) >= state.scroll_param.pageHeight){   //回弹效果
               setTimeout(() => {
					state.scroll_param.scrollTop = state.scroll_param.bodyHeight - state.scroll_param.pageHeight 
                }, 300);
			}
    	}else if( state.scroll_param.aspect === 1  && state.scroll_param.scrollTop <= 0) {
    		state.scroll_param.scrollTop += scrooll_h
    		if( state.scroll_param.scrollTop >= 0) {
               setTimeout(() => {
					state.scroll_param.scrollTop = 0
                }, 300);    			
    		}

    		console.log("向下")

    	}
    		
		console.log(state.scroll_param.scrollTop)
		state.scroll_param.aspect = 0
    }



}
export default{
	state,
	getters,
	actions,
	mutations,
}
