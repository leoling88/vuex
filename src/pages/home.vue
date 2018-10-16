<template>
<div>
	<v-leftbar :panellist="menulist" ></v-leftbar>
	<div class="content-box" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueR +'px, 0, 0)'}">

		<div class="swipe-wrap" :style="{'width':swinper.width + 'px'}">
			<div class="swipe-box" :style="{'width':swinper.ulWidth + 'px','transform': 'translate3d('+swinper.left +'px,, 0, 0)'}">
				<ul class="lists">
					<li v-for="item in imgLists" :style="{'width':swinper.width + 'px'}"><img :src="item.img" alt=""></li>

				</ul>
			</div>
		</div>







		<div class="home" @click="cc" >
	哥是首页
		</div>



	</div>	

	<!--弹框-->
	<v-alert v-model="alertVal.show" type="confirm" title="我是标题" content="我是内容" @cancel="clickCancel"  @confirm="clickConfirm">
		<span slot='title' v-text="alertVal.title"></span>
		<span slot='content' v-html="alertVal.content"></span>
		<span slot='butA' v-text="alertVal.butA"></span>
		<span slot='butB' v-text="alertVal.butB"></span>
	</v-alert>
	<!--弹框end-->



</div>



</template>
<script>
	import leftbar from '@/components/leftbar'
	import alerts from '@/components/com/alert'	
	import {mapState, mapGetters, mapActions} from 'vuex'
	export default{
		name: 'home',
		props: {
			panellist: Array
		},
		data () {
			return {
				timer: null,
				totalTime:2,
				alertVal:{
					show: false,
					title: '重要提示',
					content:'<p>您确认要进行此操作吗?？</p>',
					butA: '确认',
					butB: '取消'
				},
				swinper:{
					left:0,
					width:'',
					ulWidth:'',
					length:'',
					page:'',
					title:'',
					titleShow: true,
					about:'',
					aboutShow: true
				},
				imgLists:[
					{img:'https://www.baidu.com/img/bd_logo1.png'},
					{img:'https://www.baidu.com/img/bd_logo1.png'},
					{img:'https://www.baidu.com/img/bd_logo1.png'},
				]



			}
		},
		components:{
			'v-leftbar': leftbar,
			'v-alert': alerts

		},
		created:function(){
			this.swinperShow()

		},		
		computed:{
	
		    ...mapGetters(['leftbaron','menulist'])		

		},
		methods:{
			cc() {
				this.alertVal.show = true
				 // this.$store.commit('COM_LOADING_STATUS', true);
				 // let clock = window.setInterval(() => {
				 //  this.totalTime--
				 //  if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
				 //    window.clearInterval(clock)
					// this.$store.commit('COM_LOADING_STATUS', false);

				 //    }
				 // },1000)
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
	        },
	        swinperShow () {
				const swinperW = document.body.clientWidth
				const page = this.imgLists.length
				let num = 0
				let _this = this
				this.swinper.width = swinperW
				this.swinper.ulWidth = page * swinperW
				this.timer=setInterval(function(){
					if(num < page){
						console.log(num)
						num ++
						//_this.swinper.left = '-'+num * swinperW
		            
					}else{
						num = 0
		
					}
					console.log(_this.swinper.left)
				},3000);
				//swinper.left
	        }

		}
	}
</script>
<style scoped>
.home{padding:5rem 0;font-size:2rem; text-align:center;color:#666;}


.swipe-wrap{
	width:100%;
	height:200px;
	position: relative;
	overflow:auto;
	background:#ccc;
}
.swipe-box{width:100%;position:absolute;top:0;left:0;border:1px solid #ccc;transition: transform .38s ease-in-out,visibility .38s,-webkit-transform .38s ease-in-out;}
.swipe-box .lists li{float:left; height:100%;}
.swipe-box .lists li:nth-child(1){background:#ccc}
.swipe-box .lists li:nth-child(2){background:#eee}
</style>