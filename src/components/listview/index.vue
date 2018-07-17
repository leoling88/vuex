<template>
	<div class="lists-1">
		<ul>
			<li class="li-1" v-for="item in lists">
				<span class="title"><h2 v-text="item.name"></h2></span>
				<span class="img"><img :src="https://paimgcdn.baidu.com/AC0739D533B82A9D?src=http%3A%2F%2Fms.bdimg.com%2Fpacific%2Fupload_3074692_1526371060619.jpg&rz=urar_2_968_600&v=0" alt=""></span>
				<span class="text" v-text="item.titel"></span>
			</li>
		</ul>
	</div>

</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	export default{
		name: 'listview',
		data () {
			return {}
		},
		created:function(){
		},		
		computed:{
			...mapGetters(['lists'])

		},
		methods:{
		}
	}

</script>
<style scoped>
.lists-1 li{position: relative;width:99%;border-bottom:1px solid #ccc;padding:.5rem;}
.lists-1 li.li-1 .img{position: absolute;top:.5rem;left:.5rem;width:4rem;height:4rem;}
.lists-1 li.li-1 .img img{width:100%;height:100%;}
.lists-1 li.li-1 .title{display:block;height:2.5rem;padding-top:.5rem;padding-left:4.5rem;font-size:.7rem;color:#000;overflow:hidden;}
.lists-1 li.li-1 .title h2{width:100%;}
.lists-1 li.li-1 .text{display:block;padding-left:4.5rem;font-size:.6rem;color:#666;}
</style>