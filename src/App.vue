<template>
  <div id="app" >
    <div class="vc-wrap">
        <v-header :title="title" :menu-display="menuDisplay"></v-header>
        <v-loading :show="loadingShow"></v-loading> 
        <router-view></router-view>
        <!--数据加载show-->
        <v-loadup :loadupShow = "loadups"></v-loadup> 
        <!--数据加载show  end-->  
    </div>
  </div>
</template>
<script>
import header from '@/components/header'
import load from '@/components/com/loading'
import {  mapState, mapGetters, mapAcitons } from 'vuex'
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  components:{
    'v-header': header,
    'v-loading': load,   //加载效果

  },
  created:function(){

  },
  methods:{
   ...mapGetters(['leftbaron']),
  },
  computed: {
    ...mapState({
        loadingShow: state => state.com.loadingShow
    }),
    ...mapGetters(['transitionshow']),
    title () {
      switch (this.$route.path.split('/')[1]){
        case '':
          return "VC-UI";
        case 'home':
          return "HOME";
        case 'lists':
          return '列表页'
      }
    },
    menuDisplay () {
      if (this.$route.path.split('/')[1] == "home" ) {
        return true
      }
    }


  }
}
</script>

<style>
   body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
    body { background:#fff; color:#555; font-size:14px; font-family: Verdana, Arial, Helvetica, sans-serif;height:100%;overflow:hidden; }
    td,th,caption { font-size:14px; }
    h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
    address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
    a { color:#555; text-decoration:none; }
    a:hover { text-decoration:none; }
    img { border:none; }
    ol,ul,li { list-style:none; }
    input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
    table { border-collapse:collapse; }
    html {overflow-y: scroll;font-size:20px;}
    #app{width:100%;height:100%; position:absolute;overflow-x:hidden;overflow-y:auto;}
    .vc-wrap{width:100%;height:100%;position:relative;top:0;left:0;}

    .clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
    .clearfix { *zoom:1; }
    .left-0{left:0;}
    .top-0{top:0;}
    .right-0{right:0;}

.content-box{position: absolute;width:100%;height:100%;overflow:hidden;  transition: transform .38s ease-in-out,visibility .38s,-webkit-transform .38s ease-in-out;background:#fff;z-index:1001;}

    
</style>
