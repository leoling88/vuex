<template>
<div>

	<v-srcolly :scrolly="scrollyDatas">
      <ul slot='lists' class="news-wrap news-list-hot" >
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

		},


	},
  mounted: function (){
    



  }
}

</script>
<style>
@import '../../static/style/style.css';
.news-wrap{width:100%;max-width:20rem;margin:1rem auto;border:1px solid blue;}
.news-list-hot .type-1{position: relative;height:3rem;border-bottom:1px solid #ccc;padding:.5rem;}
.news-list-hot .type-1 .img{display:block;width:5rem;height:3rem;position: absolute;top:.5rem;left:.5rem;}
.news-list-hot .type-1 .img img{width:100%;height:100%;}
.news-list-hot .type-1 h2{height:2.2rem;font-size:.8rem;color:#000;overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:2;}
.news-list-hot .type-2{position: relative;border-bottom:1px solid #ccc;padding:.5rem;}
.news-list-hot .type-2 .img{display:block;width:100%;margin:.5rem 0 ; position:relative; text-align: center;}
.news-list-hot .type-2 .img img{width:33%;display:inline-block;margin-right:.5%;}
.news-list-hot .type-2 .img img:last-child{margin-right:0;}
.news-list-hot .type-2 h2{font-size:.8rem;color:#000;overflow:hidden; }


.news-list-hot .type-1 h2,.news-list-hot .type-1 .about{display:block;padding-left:5.5rem;}
.news-list-hot .about{color:#999;overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:1; }
</style>