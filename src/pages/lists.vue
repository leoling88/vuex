<template>
<div class="scroll-wrap">

	<v-srcolly :scrolly="scrollyDatas">
      <ul slot='lists' >
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
	  props: {
	    scrolly: Array
	  },
	data() {
		return {
			newsHot:[],
			scrollyDatas:{
		      aspect: 0,          //1向上，2向下
		      loadMore: true,     //显示加载更多
		      loadIn:false,       //显示加载中
		      pageNum:10,       //当前加载页码 
		      loadOff:false,      //显示无更新数据
		      loadreFresh:false,  //下拉刷新数据	      
			}

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
			console.log('====>加载中不能重复加载 ' )
			this.scrollyDatas.loadMore = false
	        api.requestTestData().then(res => {
	        	let data = res.data
	        					   alert(data.listshot2.length)

	        	data.listshot2.forEach((item) => {
				   //遍历prodAllPrice这个字段，并累加
				   this.newsHot.push(item)
				})
	        	console.log(this.newsHot )
	        	this.scrollyDatas.loadMore = true
	        	this.scrollyDatas.loadIn = false
	        }).catch((res) => {
	        });

		}
	}
}

</script>
<style>
@import '../../static/style/style.css';
</style>