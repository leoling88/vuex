<template>
    <div class="load-box">
    	<div class="load-in" v-show="transitionshow.loading"><img :src="loadImg" alt="">努力加载中...</div>
    	<div class="load-in" v-show="transitionshow.promputup">向上滑动加载更多</div>
    	<div class="load-in" v-show="transitionshow.promputover">没有更多数据</div>
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
			...mapGetters(['transitionshow']),
		},
		methods: {
			
		}
	}
</script>
<style scoped>
.load-box{width:100%;text-align:center;position: fixed;bottom:0;z-index:10;}
.load-in{display:inline-table;padding:.1rem .2rem; border-radius:.25rem;background:#999;color:#fff;}
.load-in img{float:left;width:.8rem;margin-right:.2rem;}
</style>