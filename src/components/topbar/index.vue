<template>
	<div>
		<div  class="topbar">
			<span class="icon icon-img1 left-05" >ddd</span>
			<span class="title"><h1>HOME</h1></span>
			<span class="icon icon-img1 right-05">ddd</span>
		</div>
		<div class="topbar-menu-1" >
			<div class="ul-1 marT-6 font-16">
				<ul>
					<li v-for="(item,index) in menulist" v-text="item.name"></li>

				</ul>				
			</div>
		</div>
		<div class="topbar-menu-2" >
			<div class="ul-1 marT-6 font-14">
				<ul>
					<li v-for="item in menulist" v-text="item.name"></li>

				</ul>				
			</div>
		</div>

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
		created:function(){
		},		
		computed:{
			...mapGetters(['menulist'])
		},
		methods:{
			//...mapActions(['viewHight']),
			ClickLeftMenu() {
				alert()
			}
		}
	}
</script>
<style>
.topbar{position:fixed;top:0;left:0;width:100%;height:2.5rem;color:#fff;background:#333;z-index:1;}
.topbar .title{font-size:1rem; text-align: center;line-height:2.5rem;}
.topbar .icon{display:block;position: absolute;top:0;height:100%;}
.topbar .icon-img1{width:2.5rem;background:#222;}
.left-05{left:.5rem;}
.right-05{right:.5rem;}
.topbar-menu-1{width:10rem;height:100%;position:absolute;top:0;left:0;background:#222;color:#fff;}
.topbar-menu-2{width:9rem;height:100%;position:absolute;top:0;left:10rem;background:#333;color:#fff;}
.marT-6{margin-top:3rem;}
.ul-1 li{padding:.5rem .5rem .5rem 1rem;border-bottom:1px solid #333;}
.font-16{font-size:.8rem;}
.font-14{font-size:.7rem;}

</style>