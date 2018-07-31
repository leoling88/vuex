<template>
<div class="scroll-wrap">
	<div v-bind:style="{'transform': 'translate3d(0, -200px, 0)'}" @touchstart="onTouchStart($event)"  @touchmove="onTouchMove($event)" >
		<v-listhot :panellist="listshot"></v-listhot>
		<v-listhot :panellist="listshot2"></v-listhot>

	</div>
</div>


</template>
<script>
import {mapGetters, mapActions} from 'vuex'

import listhot from  '@/components/lists/panellist1.vue'
export default {
	data() {
		return {
			listshot2: [
			{name:'1111'}

			]


		}
	},
	created:function() {
		console.log(this.scrollparam)

	},
	components: {
	  'v-listhot': listhot
	},
	computed:{
		...mapGetters(['listshot','scrollparam'])
	},
	methods:{


		...mapActions(['onTouchStart','onTouchMove'])
	    // touchStart(e){ //触摸事件
	    //     this.pageX = e.targetTouches[0].pageX
	    //     this.pageY = e.targetTouches[0].pageY
	    //     console.log("X:" + this.pageX +"||" +"Y:" + this.pageY)

	         
	    // }
	}
}

</script>
<style>
@import '../../static/style/style.css';
</style>