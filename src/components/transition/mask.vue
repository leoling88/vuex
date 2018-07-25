<template>
    <div class="png-bg" @click="clickMenuShow"></div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data () {
			return {

			}
		},

		computed: {
			// ...mapGetters(['transitionshow'])	
		},
		methods: {
			...mapActions(['clickMenuShow']),
			
		}
	}
</script>
<style scoped>
.png-bg{position:fixed;width:100%;height:100%;background:#000;top:0;left:0;opacity:.3; display:inline-flex;}

</style>