<template>
	<div class="leftbar animation-left-in">
		<div class="title">公众受理平台</div>
		<div>
			<ul class="ul-1 li-item">
				<li v-for="(item, index) in menulist" @click="clickMenu(item)">
					<strong v-text="item.name"  ></strong>
					<ol class="ul-2" v-show="item.isShow">
						<li v-for="oitem in item.content">
							<strong v-text="oitem.o_name"></strong>
						</li>
					</ol>

				</li>
			</ul>
		</div>

	</div>


</template>
<script>
	import {mapGetters, mapActions} from 'vuex';
	export default{
		name: 'leftbar',
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
			...mapActions(['clickMenu'])

		}
	}
</script>
<style scoped>
.leftbar{position:absolute;top:0;left:0;width:10rem;height:100%;color:#fff;background:#444;z-index:2;transform:translateX(-10rem);-webkit-transform:translateX(-10rem)}
.leftbar .title{padding:.5rem;font-size:.8rem;color:#fff;background:#333;}
.ul-1>li{padding:.5rem .5rem .5rem 1rem;border-bottom:1px solid #555;}

.ul-2>li{padding:.5rem .5rem .5rem 1rem;border-bottom:1px dotted #555;}
.ul-2>li:last-child,.ul-1>li:last-child{border:none;}
.animation-left-in{
	-webkit-animation:fadeInLeft 1s .2s ease both;
	-moz-animation:fadeInLeft 1s .2s ease both;}
	@-webkit-keyframes fadeInLeft{
	0%{opacity:1;
	-webkit-transform:translateX(-10rem)}
	100%{opacity:1;
	-webkit-transform:translateX(0)}
	}
	@-moz-keyframes fadeInLeft{
	0%{opacity:1;
	-moz-transform:translateX(-10rem)}
	100%{opacity:1;
	-moz-transform:translateX(0)}
}
</style>