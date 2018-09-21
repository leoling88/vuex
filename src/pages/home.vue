<template>
<div>
	<v-leftbar :panellist="menulist" ></v-leftbar>
	<div class="content-box" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueR +'px, 0, 0)'}">

		<div class="home" @click="openAlert" >

	哥是首页
		</div>



	</div>	
	<v-alert v-model="alertVal.show" type="confirm" title="我是标题" content="我是内容" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()"></v-alert>
</div>



</template>
<script>
	import leftbar from '@/components/leftbar'
	import alert from '@/components/transition/alert'	
	import {mapState, mapGetters, mapActions} from 'vuex'
	export default{
		name: 'home',
		props: {
			panellist: Array
		},
		data () {
			return {
				totalTime:2,
				alertVal:{
					show:false,
					title: '重要提示'
				} 

			}
		},
		components:{
			'v-leftbar': leftbar,
			'v-alert': alert

		},
		created:function(){
		},		
		computed:{
	
		    ...mapGetters(['leftbaron','menulist'])		

		},
		methods:{
			cc() {

				//this.$store.commit('COM_ALERT_STATUS', true);

				//  let clock = window.setInterval(() => {
				//   this.totalTime--
				//   if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
				//     window.clearInterval(clock)
				// 	this.$store.commit('COM_LOADING_STATUS', false);

				//     }
				//  },1000)
			},
	        openAlert(index){
	        	
	            this.alertVal.show = true;
	            console.log(this.alertVal.show)
	        },
	        clickCancel(){
	            console.log('点击了取消');
	        },
	        clickConfirm(){
	            console.log('点击了confirm');
	        }

		}
	}
</script>
<style scoped>
.home{padding:5rem 0;font-size:2rem; text-align:center;color:#666;}

</style>