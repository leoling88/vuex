<template>
	<div class="content-box" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueR +'px, 0, 0)'}"> <!-- animation-left-in-->
		<div class="top-bar-1">
			<div class="top-bar-1"><i class="menu" @click="clickMenuShow()"></i><h1>VC-UI</h1></div>
		</div>
	</div>
</template>
<script>

	import {mapGetters, mapActions} from 'vuex'
	export default{
		name: 'contentview',
		data () {
			return {}
		},
		created:function(){
		},		
		computed:{
			...mapGetters(['leftbaron'])

		},
		methods:{
			...mapActions(['clickMenuShow'])
		}
	}
</script>
<style scoped>
.content-box{position: absolute;width:100%;height:100%;overflow:hidden;  transition: transform .38s ease-in-out,visibility .38s,-webkit-transform .38s ease-in-out;background:#fff;z-index:1001;}


.top-bar-1{width:100%;height:2.5rem;background:#333;text-align:center; position:relative;}
.top-bar-1 .menu{display:block;width:2.5rem;height:2.5rem;position: absolute;top:0;left:0;background:url('/static/img/menu-icon.png') center center no-repeat ; background-size:1.8rem auto;}
.top-bar-1 h1{line-height:2.5rem;color:#fff;}
</style>