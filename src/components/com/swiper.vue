<template>
	<div class="swipe-wrap" :style="{'width':swinperView.width + 'px'}" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="back">
		<div class="swipe-box" :style="{'width':swinperView.ulWidth + 'px','transform': 'translate3d('+swinperView.left +'px, 0, 0)','background':'#000'}">
			<div class="lists">
				<ul >
					<li v-for="(item, index) in swiperLists" :style="{'width':swinperView.width + 'px'}" ><router-link :to="item.url"><img :src="item.img" alt=""/></router-link></li> <!-- @click.stop="clickView(index)">-->
				</ul>
			</div>
		</div>
		<div class="title" v-show="swinperView.titleShow">{{swinperView.title}}</div>
		<div class="page">
			<div class="page-view">
				<span v-for="(item, index) in swiperLists" @click="clickSwinper(index)">

				</span>
				<i :style="{'transform': 'translate3d('+swinperView.hover +'rem, 0, 0)'}"></i>
			</div>
		</div>
	</div>

</template>
<script>
	let num = 0         //初始化游标
	let direction = 0        //初始滚动方向1
	let Mdirection = ''        //初始滚动方向手势
	let swinperW
	let pageX 
	let page
	export default {
		name:'v-swiper',
		data () {
			return {
			}

		},
		props: {
			swiperLists: Array,
			swinperView: Object

		},
		computed: {
		},
		created:function(){
			this.swinperShow()
		    this.touch = {}
		},			
		methods: {
	        swinperShow () {
				swinperW =  this.swinperView.viewX
				pageX = this.swinperView.pageX
				page = this.swiperLists.length
				console.log('num=' + num + "pageX=" +pageX + 'page=' +page)
				let _this = this
				let direction = 0
				this.swinperView.width = swinperW
				this.swinperView.ulWidth = page * swinperW
				this.swinperView.title = _this.swiperLists[0].title		
				this.timer=setInterval(function(){

					console.log('num=' + num + "pageX=" +pageX + 'page=' +page)
					if(direction == 0 ) {
						if(num < (page - 1)){
							console.log(num)
							num ++
						}else {
							direction = 1
						}
						_this.swinperView.left = '-'+num * swinperW
						_this.swinperView.hover = num * pageX
					}else if( direction == 1 ){
						if (num > 0){
							num --
					
						}else {
							direction = 0
					}
						_this.swinperView.left = '-'+num * swinperW
						_this.swinperView.hover = num * pageX							
					}
					_this.swinperView.title = _this.swiperLists[num].title							
				},5000);
				//swinper.left
	        },
	        clickSwinper (index) {
	        	direction = 0
	        	num = index
				this.swinperView.left = '-'+index * swinperW
				this.swinperView.hover = index * pageX							
				this.swinperView.title = this.swiperLists[index].title		

	        },
	        clickView(index) {
	        	//index = num
	        	alert(index)
	            //this.$emit('clickView');
	        },

		    touchStart(e) {
				const touch = e.touches[0]
				this.touch.startX = touch.pageX
				//this.touch.startY = touch.pageY

		    },
		    touchMove(e) {
    	
				const touch = e.touches[0]
				const deltaX = touch.pageX - this.touch.startX
		      //const deltaY = touch.pageY - this.touch.startY
		      // if (Math.abs(deltaY) > Math.abs(deltaX)) {
		      //   return
		      // }
		      if (deltaX > 100) {
		      	Mdirection = 1
		      	console.log(deltaX)
		      }else if (deltaX < -100){
		      	Mdirection = 0
		      	console.log(deltaX)

		      }
		    },
		    touchEnd() {

				if(Mdirection == 0 ) {
					if(num < (page - 1)){
						num ++
					}
					this.swinperView.left = '-'+num * swinperW
					this.swinperView.hover = num * pageX
					Mdirection = null
				}else if( Mdirection == 1 ){
					if (num > 0){
						num --
					}
					this.swinperView.left = '-'+num * swinperW
					this.swinperView.hover = num * pageX
					Mdirection = null							
				}
				this.swinperView.title = this.swiperLists[num].title							


		    }


		},
		watch: {
            'swinperView.viewX':function(oldval, val){
            	if(oldval != val) {
					swinperW =  this.swinperView.viewX
					this.swinperView.width = swinperW
					this.swinperView.ulWidth = page * swinperW
            	}
            },

		}
	}	
</script>
<style scoped>


.swipe-wrap{
	width:100%;
	height:200px;
	position: relative;
	overflow:hidden;
	background:#ccc;
}
.swipe-box{width:100%;position:absolute;top:0;left:0;transition: transform .38s ease-in-out,visibility .38s,-webkit-transform .38s ease-in-out;}
.swipe-box .lists li{float:left; height:10rem;}
.swipe-box .lists li img{width:100%;height:100%;}
.swipe-box .lists li:nth-child(1){background:red;}
.swipe-box .lists li:nth-child(2){background:blue;}
.swipe-box .lists li:nth-child(3){background:green;}
.swipe-box .lists li:nth-child(4){background:#000;}
.swipe-wrap .title{position:absolute;height:1.6rem;line-height:1.6rem;bottom:0;left:0; z-index:30;color:#fff;text-indent:1em;}
.swipe-wrap .page{position:absolute;width:100%;bottom:0;right:0; text-align: right;background:none;}
.swipe-wrap .page span{display:inline-table;width:.5rem;height:.5rem;margin:.5rem 1rem .5rem 0;border-radius:50%;background:#fff;}
.swipe-wrap .page i{ display:block; width:1.2rem;height:.5rem;margin:.5rem 0 ;border-radius:.3rem;background:red; position:absolute;top:0;left:0;transition: transform .38s ease-in-out,visibility .38s,-webkit-transform .38s ease-in-out;}
.swipe-wrap .page-view{position:relative;display:inline-table;}
</style>v