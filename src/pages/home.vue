<template>
<div>
	<v-leftbar :panellist="menu_list"></v-leftbar>
	<div class="content-box" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueR +'px, 0, 0)'}">

		<div class="home" >

	哥是首页
		</div>



	</div>	
</div>



</template>
<script>
	import leftbar from '@/components/leftbar'
	import {mapGetters, mapActions} from 'vuex'
	export default{
		name: 'home',
		data () {
			return {
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
				]				
			}
		},
		components:{
			'v-leftbar': leftbar,

		},
		created:function(){
		},		
		computed:{
		    ...mapGetters(['leftbaron']),			

		},
		methods:{
		}
	}
</script>
<style scoped>
.home{padding:5rem 0;font-size:2rem; text-align:center;color:#666;}

</style>