<template>
  <div class="sroll-wrap news-wrap"  res="myScroll"  :style="{height: myScrollH + 'px'}" @touchstart="touchStart($event)"  @touchmove="touchMove($event)"   @touchend="touchEnd($event)" >
    <div class="sroll-more" v-if="scrolly.loadreFresh">下拉刷新数据</div>
    <div class="sroll-wrap-box news-list-hot srcoll-show" >
      <slot name="lists"></slot>
    </div>
    <div v-if="scrolly.loadMore" class="sroll-more">上拉加载更多数据</div>
    <div v-if="scrolly.loadIn" class="sroll-load-style" ><img :src="LoadIcon" alt=""> 努力加载中...</div>
    <div v-if="scrolly.loadOff" class="sroll-more">没有更多数据</div>
  </div>
</template>
<script>

//var w = document.documentElement.clientWidth || document.body.clientWidth;
var v_h = document.documentElement.clientHeight || document.body.clientHeight;
//var w = document.documentElement.scrollWidth || document.body.scrollWidth;
var b_h = document.documentElement.scrollHeight || document.body.scrollHeight;
// import loadIcon from '@/assets/load.gif'
export default {
  name: 'myScroll',
  props: {
    scrolly: Object
  },
  data () {
    return {
      pageX:0,
      pageY:0,
      myScroll:null,
      scrollTop:0,
      myScrollH:0,     //可视框高度
      myViewH:0,
      LoadIcon:''
    }
  },
  created:function(){
  },
  methods: {
   /*=====跨域======= */

    HelloAxios(){
      this.$parent.listDatas();

    },
    touchStart(e){ //触摸事件
        this.pageX = e.targetTouches[0].pageX
        this.pageY = e.targetTouches[0].pageY
        console.log("X:" + this.pageX +"||" +"Y:" + this.pageY)
        this.handleScroll()
         
    },
    touchMove(e){ //触摸滑动事件
      if(!this.scrolly.loadIn){    //如果不在加载中
        if(e.targetTouches[0].pageY > this.pageY){ //向下滑动
          this.loadreFresh = true
          if(this.scrollTop == 0 && e.targetTouches[0].pageY - this.pageY > 80){
            this.scrolly.aspect = 2
            this.scrolly.viewShow = false
            console.log("下拉刷新")            
          }
          console.log("向下滑动")   
         
        }else if( this.pageY - e.targetTouches[0].pageY > 80){ //向上滑动
          if((this.myScrollH + this.scrollTop + 50) > this.myViewH){   
            this.scrolly.aspect = 1
          }
          console.log("向上滑动" + (this.pageY - e.targetTouches[0].pageY) )
        }        
      }

    },
    touchEnd(e){
      if(!this.scrolly.loadIn){    //如果不在加载中
        if(this.scrolly.aspect == 1){      //从下往上滑动加载
          console.log('====>可以加载' )
          if(this.scrolly.pageNum == true){  //追加数据
            this.scrolly.loadMore = false    //隐藏"加载更多"提示
            this.scrolly.loadIn = true    //显示"加载中..."提示
            this.scrolly.aspect = 0
            this.$parent.listDatas();
          }else{
            this.scrolly.pageNum = false
            this.scrolly.loadMore = false
            this.scrolly.loadOff = true
            this.scrolly.aspect = 0
          }        
        }else if(this.scrolly.aspect == 2){      //到达顶部，从上往下滑动加载
          this.$parent.listDatas();
          this.scrolly.pageNum = false
          this.scrolly.loadMore = false
          this.scrolly.loadOff = false
          this.scrolly.aspect = 0        
        }
      }
      this.scrolly.loadreFresh = false
    },
    handleScroll () {
      let offsetTop = document.querySelector('.sroll-wrap').scrollTop
      let scrollHeight = document.querySelector('.sroll-wrap').scrollHeight
      this.myViewH = scrollHeight
      this.scrollTop = offsetTop
      console.log(this.myScrollH + "==" + this.scrollTop + "==" + this.myViewH)

    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
    mounted: function (){
      this.myScrollH = window.screen.availHeight

      //window.addEventListener('scroll', this.handleScroll)


  }




}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.news-wrap{width:100%;max-width:20rem;margin:1rem auto;}
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

.sroll-wrap{width:100%;overflow-y:auto;-webkit-overflow-scrolling: touch;position: relative;}

.sroll-more{padding:.5rem;font-size:.7rem;color:#666; text-align:center;background:#eee;}
.sroll-load-style{width:8rem;position:fixed;left:50%;bottom:0;border-radius:.25rem;margin-left:-4rem;padding:.5rem;font-size:.7rem;color:#666; text-align:center;vertical-align: middle; background:#eee;}


</style>
