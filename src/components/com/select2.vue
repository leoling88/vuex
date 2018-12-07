<template>
	<div class="select-1">
		<div class="select-1-tab " @click="selectShow">
			<slot name="label">请选择</slot>
			<span class="fr icon-1"><i class="icon-arrow-right"></i></span>
			<span v-text="selectDatas.value" class="fr value cor-black" ></span>
			
		</div>
		<div class="select-bg" v-show="selectDatas.show"></div>
		<div class="select-show2"  v-if="selectDatas.show">
			<div class="title">选择 <span class="fr colorBlack" @click="selectClose">关闭</span></div>
			<div class="selcet">
				<div class="selcet-hover" ref="vernier"><i>www</i></div>
				<ul  :style="{'top':selectDatas.scrollTop}" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="selcetHieght" >
					<li v-for="item in selectDatas.lists"  @click="optionClick(item.key, item.value)" :class="{hover:selectDatas.hover == item.key}"><span v-text="item.value"></span></li>
				</ul>
			</div>
		</div>





	</div>
</template>
<script>
	let vernierTop   //游标位置
	let _height   //列表内容 高度
	let _page     //列表条数
	export default {
		name:'v-select',
		data () {
			return {
			}

		},
		props: {
			selectDatas:Object,
			scroll:Object
		},
		computed: {
		},
		methods: {
			optionClick (key, value) {
				this.selectDatas.hover = key
				this.selectDatas.key = key
				this.selectDatas.value = value
	            this.$emit('optionclick');
			},
			selectShow () {
	            this.$emit('selectshow');
			},
			selectClose () {
				this.selectDatas.show = false

			},

		    touchStart(e) {
		    	_page = this.selectDatas.lists.length  //
		    	vernierTop = this.$refs.vernier.offsetTop 
		    	_height = this.$refs.selcetHieght.offsetHeight
		    	this.selectDatas.scrollTop = vernierTop
				const touch = e.touches[0]
				this.selectDatas.startY = touch.pageY
				console.log('开始：' + touch.pageY)
				// this.touch.startX = touch.pageX
				//this.touch.startY = touch.pageY
		    },
		    touchMove(e) {



				const touch = e.touches[0]
				this.selectDatas.endY = touch.pageY
				console.log('滑动：' + touch.pageY)
				//向上滚动

				if(this.selectDatas.endY > this.selectDatas.startY){ 

   this.selectDatas.scrollTop = -(this.selectDatas.endY  - this.selectDatas.startY)





				}



		    },
		    touchEnd() {

		
		    }



		},
	    mounted(){

	    },
	    watch:{
	    },

	}
</script>
<style scoped>

</style>