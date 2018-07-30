<template>
<div class="scroll-box">
	<div v-bind:style="{'transform': 'translate3d(0, -200px, 0)'}">
		<v-listhot :panellist="listshot"></v-listhot>
		<v-listhot :panellist="listshot2"></v-listhot>

	</div>
</div>


</template>
<script>
import {mapGetters} from 'vuex'

import listhot from  '@/components/lists/panellist1.vue'
export default {
	data() {
		return {
			listshot2: [
			{name:'1111'}

			]


		}
	},
	created() {
	},
	components: {
	  'v-listhot': listhot
	},
	computed:{
		...mapGetters(['listshot'])
	}
}

</script>
<style>
@import '../../static/style/style.css';
</style>