<template>
    <div class="load-box">
    	<div class="load-in">没有更多数据</div>
    </div>

</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data () {
			return {
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