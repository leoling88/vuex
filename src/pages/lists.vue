<template>
<div>
		<v-listhot :panellist="listshot"></v-listhot> <!--  :hot-list="listshot" class="3" -->
		<div>
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