
const state = {
	lists_data:[
		{
			name:'记一次凉凉的小米面试',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		},
		{
			name:'托马斯底薪加盟掘金虽不甘心,但这却是他重新证明自己的最好机会',
			title: '小李说体育',
			img:['https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1269329551,2664789443&fm=173&app=25&f=JPEG?w=218&h=146&s=A9505795C78254E2086521DC0300C0B2','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=89775878,3966491195&fm=173&app=25&f=JPEG?w=218&h=146&s=6281994542C839430E38988103007091','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1783121282,3259846909&fm=173&app=25&f=JPEG?w=218&h=146&s=6786D30C7C9D06DC109927B203007082'],
			otype:'3'

		},
		{
			name:'昔日恋情遭同是饰演小燕子的女星插足，今混得风生水起成大富豪！',
			title: '娱乐8公子',
			img:['https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2763641915,1369240630&fm=173&app=25&f=JPEG?w=400&h=300&s=6280D70948AA609C9A2081FD03005023','https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4242342016,2246539952&fm=173&app=25&f=JPEG?w=549&h=437&s=FFA838631CFB659E840858830300E0C0','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4007333831,1431007671&fm=173&app=25&f=JPEG?w=440&h=381&s=B2E1D8017A0B1A55469930AF0300A000'],
			otype:'3'

		},
		{
			name:'男子躲厕所拿镜子偷窥女租客 竟连小伙子也不放过',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

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
			otype:'1'

		},	
		{
			name:'记一次凉凉的小米面试',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		}
	]
}
//getters 抛出数据
const getters = {
	//导航菜单
	listshot:state => state.lists_data

}
const actions = {

	goLink({commit}){
		commit('leftbarShow')
	}
}
const mutations = {


}
export default{
	state,
	getters,
	actions,
	mutations,
}