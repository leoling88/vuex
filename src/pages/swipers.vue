<template>
<div>
 	<v-leftbar :panellist="menulist" ></v-leftbar>
	<div class="content-box" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueR +'px, 0, 0)'}"></div>

		<!--轮播-->
		<v-swiper :swiperLists = "imgLists" :swinperView="swinper"></v-swiper>
		<!--轮播 end-->
		<div style="height:1rem;"></div>
		<!--轮播-->
		<v-swiper :swiperLists = "imgLists" :swinperView="swinper2"></v-swiper>
		<!--轮播 end-->



</div>



</template>
<script>
	import leftbar from '@/components/leftbar'
	import swipers from '@/components/com/swiper'
	import {mapState, mapGetters, mapActions} from 'vuex'
  import https from '@/https/index'

	export default{
		name: 'swipers',
		props: {

			panellist: Array,

			/*swipers*/
			swiperLists: Array,
			swinperView: Object,
			/*下拉选择1*/
			selectDatas: Object,

		},
		data () {
			return {

				swinper:{     //轮播
					left:0,
					width:'',
					ulWidth:'',
					length:'',
					page:'',
					title:'',
					titleShow: true,
					about:'',
					aboutShow: true,
					hover:'',
					viewX: document.body.clientWidth,
					pageX:'1.5',

				},
				imgLists:[],
				swinper2:{     //轮播
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
				imgLists:[],




			}
		},
		components:{
			'v-leftbar': leftbar,
			'v-swiper':swipers,

		},
	    mounted(){
	    	this.requireSwiperDatas()
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

	        requireSwiperDatas () {    
		        https.getSwiper().then(res => {
		        	let _data = res.data.swiperList
		        	console.log(_data)
		        	this.imgLists = _data

		        }).catch((res) => {
		        });
	        },

			bannerLink () {
				alert(index)
			},

		}



	}
</script>
<style scoped>
.home{padding:5rem 0;font-size:2rem; text-align:center;color:#666;}

</style>