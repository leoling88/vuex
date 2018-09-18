<template>
<div>
	<v-leftbar :panellist="menulist" ></v-leftbar>
	<div class="content-box" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueR +'px, 0, 0)'}">

		<div class="home" @click="cc()" >

	哥是首页
		</div>



	</div>	
</div>



</template>
<script>
	import leftbar from '@/components/leftbar'
	import {mapState, mapGetters, mapActions} from 'vuex'
	export default{
		name: 'home',
		props: {
			panellist: Array
		},
		data () {
			return {
				totalTime:2
			
			}
		},
		components:{
			'v-leftbar': leftbar,

		},
		created:function(){
		},		
		computed:{
		    ...mapGetters(['leftbaron','menulist'])		

		},
		methods:{
			cc() {
				this.$store.commit('COM_LOADING_STATUS', true);
				 let clock = window.setInterval(() => {
				  this.totalTime--
				  if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
				    window.clearInterval(clock)
					this.$store.commit('COM_LOADING_STATUS', false);

				    }
				 },1000)
			}
		}
	}
</script>
<style scoped>
.home{padding:5rem 0;font-size:2rem; text-align:center;color:#666;}

</style>