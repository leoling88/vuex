<template>
<div>
	<v-leftbar></v-leftbar>
	<div class="content-box" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueR +'px, 0, 0)'}">

		<div class="home" >

	哥是首页
		</div>



	</div>	
</div>



</template>
<script>
	import leftbar from '@/components/leftbar'
	import {mapGetters, mapActions} from 'vuex'
	export default{
		name: 'home',
		data () {
			return {}
		},
		components:{
			'v-leftbar': leftbar,

		},
		created:function(){
		},		
		computed:{
		    ...mapGetters(['leftbaron']),			

		},
		methods:{
		}
	}
</script>
<style scoped>
.home{padding:5rem 0;font-size:2rem; text-align:center;color:#666;}

</style>