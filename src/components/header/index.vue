<template>
	<div class="header">
		<div class="menu left-0 top-0" v-show="menuDisplay" @click="barShow">菜单</div>
		<div class="menu left-0 top-0" v-show="backDisplay" @click="goBack">返回</div>
		<div class="text"><h1>{{title}}</h1></div>
		<div class="menu right-0 top-0"></div>
	</div>
</template>
<script>
	export default {
		props:{
			title: String,
			menuDisplay: Boolean,
			backDisplay: Boolean

		},
		data () {
			return {

			}
		},
		methods:{
			barShow() {
				console.log('显示菜单')
			},
			goBack() {
				console.log('返回')
			}


		}
	}
</script>
<style scoped>

.header{width:100%;height:2.5rem;background:#333;text-align:center; position:relative;}
.header .menu{display:block;width:2.5rem;height:2.5rem;position: absolute;background:#ccc;}
.header .text{text-align: center;font-size:.8rem;color:#fff;}
.header h1{line-height:2.5rem;color:#fff;}
</style>