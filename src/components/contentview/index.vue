<template>
	<div class="content-box" v-bind:class="{ off:leftbaron }">
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
.content-box{position: absolute;width:100%;height:100%;overflow:hidden;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);background:#fff;}
.content-box.off{
	-webkit-animation:fadeInLeft 1s .1s ease both;
	-moz-animation:fadeInLeft 1s .1s ease both;}
	@-webkit-keyframes fadeInLeft{
	0%{opacity:1;
	-webkit-transform:translateX(0)}
	100%{opacity:1;
	-webkit-transform:translateX(10rem)}
	}
	@-moz-keyframes fadeInLeft{
	0%{opacity:1;
	-moz-transform:translateX(0)}
	100%{opacity:1;
	-moz-transform:translateX(10rem)}
}
.content-box{
	-webkit-animation:fadeOutLeft 1s .1s ease both;
	-moz-animation:fadeOutLeft 1s .1s ease both;}
	@-webkit-keyframes fadeOutLeft{
	0%{opacity:1;
	-webkit-transform:translateX(10rem)}
	100%{opacity:1;
	-webkit-transform:translateX(0)}
	}
	@-moz-keyframes fadeOutLeft{
	0%{opacity:1;
	-moz-transform:translateX(10rem)}
	100%{opacity:1;
	-moz-transform:translateX(0)}
}
.top-bar-1{width:100%;height:2.5rem;background:#333;text-align:center; position:relative;}
.top-bar-1 .menu{display:block;width:2.5rem;height:2.5rem;position: absolute;top:0;left:0;background:url('/static/img/menu-icon.png') center center no-repeat ; background-size:1.8rem auto;}
.top-bar-1 h1{line-height:2.5rem;color:#fff;}
</style>