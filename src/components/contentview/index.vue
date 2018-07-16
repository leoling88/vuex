<template>
	<div class="content-box">
		<div class="top-bar-1">
			<div class="top-bar-1"><i class="menu"></i><h1>VC-UI</h1></div>
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


		},
		methods:{

		}
	}
</script>
<style scoped>
.content-box{position: absolute;width:100%;height:100%;overflow:hidden;transform:translateX(10rem);-webkit-transform:translateX(10rem);-moz-transform:translateX(10rem);}
.top-bar-1{width:100%;height:2.5rem;background:#333;text-align:center; position:relative;}
.top-bar-1 .menu{display:block;width:2.5rem;height:2.5rem;position: absolute;top:0;left:0;background:url('/static/img/menu-icon.png') center center no-repeat ; background-size:1.8rem auto;}
.top-bar-1 h1{line-height:2.5rem;color:#fff;}
</style>