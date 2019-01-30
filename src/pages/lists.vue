<template>
<div class="scroll-wrap">

	<v-srcolly :panellist="listsdata"></v-srcolly>
</div>


</template>
<script>

import {mapGetters, mapActions} from 'vuex'

import srcolly from  '@/components/com/srcolly'
export default {

	data() {
		return {
			listsdata:[]

		}
	},
	created:function() {
		document.body.addEventListener('touchmove' , function(e){
		    e.preventDefault();
		})		
	},
	components: {
		'v-srcolly':srcolly
	},
	computed:{
	},
	methods:{
		...mapActions(['onTouchStart','onTouchMove','onTouchEnd'])
	}
}

</script>
<style>
@import '../../static/style/style.css';
</style>