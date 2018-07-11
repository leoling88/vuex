<template>
	<div  class="topbar">
		<span class="icon icon-img1 left-05" @click="ClickLeftMenu">ddd</span>
		<span class="title"><h1>HOME</h1></span>
		<span class="icon icon-img1 right-05">ddd</span>
	</div>

</template>
<script>
	import {mapGetters, mapActions} from 'vuex';
	export default{
		name: 'topbar',
		data(){
			return{

			}

		},
		computed:{

		},
		methods:{
			...mapActions(['ClickLeftMenu']),
			ClickLeftMenu() {
				alert()
			}
		}
	}
</script>
<style>
.topbar{position:fixed;top:0;left:0;width:100%;height:2.5rem;color:#fff;background:#333;}
.topbar .title{font-size:1rem; text-align: center;line-height:2.5rem;}
.topbar .icon{display:block;position: absolute;top:0;height:100%;}
.topbar .icon-img1{width:2.5rem;background:#222;}
.left-05{left:.5rem;}
.right-05{right:.5rem;}


</style>