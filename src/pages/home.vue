<template>
	<div>
		<div class="content-box" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueR +'px, 0, 0)'}">
			<div class="top-bar-1">
				<div class="top-bar-1"><i class="menu" @click="clickMenuShow()"></i><h1>VC-UI</h1></div>
			</div>
		</div>
		<div>
			
		</div>



	</div>

</template>
<script>
	import leftbar  from '@/components/leftbar'
	
	import {mapGetters, mapActions} from 'vuex'
	export default{
		name: 'contentview',
		data () {
			return {}
		},
		  components:{
		    //contentview,
		    leftbar

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



.top-bar-1{width:100%;height:2.5rem;background:#333;text-align:center; position:relative;}
.top-bar-1 .menu{display:block;width:2.5rem;height:2.5rem;position: absolute;top:0;left:0;background:url('/static/img/menu-icon.png') center center no-repeat ; background-size:1.4rem auto;}
.top-bar-1 h1{line-height:2.5rem;color:#fff;}
</style>