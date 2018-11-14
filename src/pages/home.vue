<template>
<div>
<!-- 	<v-leftbar :panellist="menulist" ></v-leftbar>
 -->	<div class="content-box" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueR +'px, 0, 0)'}">
		<!--轮播--
		<v-swiper :swiperLists = "imgLists" :swinperView="swinper"></v-swiper>
		--轮播 end -->
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
	import swipers from '@/components/com/swiper'
	import loadup from '@/components/com/loadup'		
	import {mapState, mapGetters, mapActions} from 'vuex'

	export default{
		name: 'home',
		props: {
			panellist: Array,
			swiperLists: Array,
			swinperView: Object,
			loadupShow: Object,
		},
		data () {
			return {
				timer: null,
				totalTime:2,
				alertVal:{      //提示框
					show: false,
					title: '重要提示',
					content:'<p>您确认要进行此操作吗?？</p>',
					butA: '确认',
					butB: '取消'
				},
				swinper:{     //轮播
					left:0,
					width:'',
					ulWidth:'',
					length:'',
					page:'',
					title:'',
					titleShow: false,
					about:'',
					aboutShow: true,
					hover:'',
					viewX: document.body.clientWidth,
					pageX:'1.5',

				},
				imgLists:[      //数据
					{img:'http://img2.imgtn.bdimg.com/it/u=2331105056,4165068436&fm=26&gp=0.jpg',title:'000',url:'page/'},
					{img:'http://img2.imgtn.bdimg.com/it/u=3826074173,3325012237&fm=26&gp=0.jpg',title:'111',url:'http://www.sina.com'},
					{img:'http://img3.imgtn.bdimg.com/it/u=3197969683,3524917104&fm=200&gp=0.jpg',title:'2222',url:'http://www.qq.com'},
					{img:'http://img3.imgtn.bdimg.com/it/u=553010038,2994934751&fm=200&gp=0.jpg',title:'3333',url:'http://www.qq.com'},
				],
				loadups:{     //加载状态
					loading: false,
					promputup: false,
					promputover: false,
				},



			}
		},
		components:{
			'v-leftbar': leftbar,
			'v-alert': alerts,
			'v-swiper':swipers,
			'v-loadup':loadup,

		},
	    mounted(){
	    	const _this = this
		    window.onresize = function temp() {
		    	_this.loadups.loading = true
		    	_this.swinper.viewX = document.body.clientWidth
		    	console.log('父组件发生变化===>' + _this.swinper.viewX)
		    };


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
			bannerLink () {
				alert(index)
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

		}



	}
</script>
<style scoped>
.home{padding:5rem 0;font-size:2rem; text-align:center;color:#666;}

</style>