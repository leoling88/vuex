<template>
    <div class="load-box">
    	<div class="load-in" v-show="loadShow"><img :src="loadImg" alt="">努力加载中...</div>
    	<div class="load-in" v-show="loadUp">向上滑动加载更多</div>
    	<div class="load-in" v-show="loadOver">没有更多数据</div>
    </div>

</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
	    props: {
	      loadingShow: Boolean,
	      loadUp: Boolean,
	      loadOver: Boolean
	    },
		data () {
			return {
				loadImg: '../../static/img/spinning-circles.svg'
			}
		},

		computed: {
		},
		methods: {
			
		}
	}
</script>
<style scoped>
.load-box{text-align:center;}
.load-in{display:inline-table;padding:.1rem .2rem; border-radius:.25rem;background:#999;color:#fff;}
.load-in img{float:left;width:.8rem;margin-right:.2rem;}
</style>