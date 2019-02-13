<template>
<div class="scroll-wrap">

	<v-srcolly>
      <ul slot='lists'>
        <li v-for="item in newsHot" :class="{'type-2': item.otype === '3' , 'type-1': item.otype === '1'}">
            <h2 v-text="item.name"></h2>
            <span class="img" ><img :src="_item" alt="" v-for="_item in item.img"></span>
            <span class="about" v-text="item.text"></span>
        </li>
      </ul>
	</v-srcolly>
</div>


</template>
<script>

import {mapGetters, mapActions} from 'vuex'
import api from '@/https/index'	
import srcolly from  '@/components/com/srcolly'
export default {

	data() {
		return {
			newsHot:[]

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
		...mapActions(['onTouchStart','onTouchMove','onTouchEnd']),
		listDatas(){
	        api.requestTestData().then(res => {
alert()
	        	let data = res.data
	        	console.log('res')
	        }).catch((res) => {
	        });

		}
	}
}

</script>
<style>
@import '../../static/style/style.css';
</style>