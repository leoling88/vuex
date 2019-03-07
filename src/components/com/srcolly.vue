<template>
  <div class="sroll-wrap"  @touchstart="touchStart($event)"  @touchmove="touchMove($event)"   @touchend="touchEnd($event)" id="myScroll">
    <div class="sroll-more" v-if="scrolly.loadreFresh">下拉刷新数据</div>
    <div >
      <slot name="lists"></slot>
    </div>
    <div v-if="scrolly.loadMore" class="sroll-more" ref="srollmore" >上拉加载更多数据</div>
    <div v-if="scrolly.loadIn" class="sroll-load-style" ><img :src="LoadIcon" alt=""> 努力加载中...</div>
    <div v-if="scrolly.loadOff" class="sroll-more">没有更多数据</div>
    <div style="position: fixed;top:0;left:0; background: #fff;z-index: 1000">{{text}}</div>
  </div>
</template>
<script>
let  _isLoading = false      //加载状态
// import loadIcon from '@/assets/load.gif'
export default {
  name: 'myScroll',
  props: {
    scrolly: Object
  },
  data () {
    return {
      text:'',
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
      //变量windowHeight是可视区的高度
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        var moreBottom = this.$refs.srollmore.getBoundingClientRect().bottom;  //“加载更多按钮位置“

        if((moreBottom-10) <= windowHeight){     //判断是否到底
          _isLoading = true      //允许加载
          console.log("到底了")
        }else{
          _isLoading = false   //禁止加载
        }
    },
    touchMove(e){ //触摸滑动事件
      if(!this.scrolly.loadIn){    //如果不在加载中
        if(e.targetTouches[0].pageY > this.pageY){ //从上往下滑动
          this.loadreFresh = true
          if(this.scrollTop == 0 && e.targetTouches[0].pageY - this.pageY > 80){
            this.scrolly.aspect = 2    //标记滑动方向
            this.scrolly.viewShow = false
          }
          console.log("向下滑动")   
        }
        else if( this.pageY - e.targetTouches[0].pageY > 80){ //从下往上滑动
          if((this.myScrollH + this.scrollTop + 50) > this.myViewH){   
            this.scrolly.aspect = 1    //标记滑动方向
          }
          console.log("向上滑动" + (this.pageY - e.targetTouches[0].pageY) )
        }        
      }

    },
    touchEnd(e){
      if(_isLoading){      //允许加载 
         console.log("允许加载")   
        if(!this.scrolly.loadIn){    //如果不在加载中
          if(this.scrolly.aspect == 1){      //从下往上滑动加载
            console.log('====>可以加载' )
            if(this.scrolly.loadMore == true){  //追加数据
              this.scrolly.loadMore = false     //隐藏"加载更多"提示
              this.scrolly.loadIn = true        //显示"加载中..."提示
              this.scrolly.aspect = 0           //不允许继续操作
              this.$parent.listDatas();
            }else{
              this.scrolly.loadMore = false
              this.scrolly.loadOff = true       // 显示没有更多 
              this.scrolly.aspect = 0
            }      

          }else if(this.scrolly.aspect == 2){      //到达顶部，从上往下滑动加载
            this.$parent.listDatas();
            this.scrolly.loadMore = false
            this.scrolly.loadOff = false
            this.scrolly.aspect = 0        
          }
        }
        this.scrolly.loadreFresh = false     ///隐藏 “下拉刷新数据”

      }else{

      }
    },
  },
  mounted(){
    // window.addEventListener('touchmove',  function(e) {e.preventDefault();}, { passive: false })
    console.log(this.$refs.srollmore.getBoundingClientRect().bottom)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{ touch-action: pan-y!important;} 
.sroll-wrap{width:100%;}

.sroll-more{padding:.5rem;font-size:.7rem;color:#666; text-align:center;background:#eee;}
.sroll-load-style{width:8rem;position:fixed;left:50%;bottom:0;border-radius:.25rem;margin-left:-4rem;padding:.5rem;font-size:.7rem;color:#666; text-align:center;vertical-align: middle; background:#eee;}


</style>
