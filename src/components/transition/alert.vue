<template>
	<div v-show="alertShow">
		<div class="alert-box">
			<div class="alert-title">{{title}}</div>
			<div class="alert-con" v-html="content"></div>
			<div class="alert-bot">
				<span class="bor-right color-2"  v-if="type == 'confirm'"  @click="closeBtn">{{but_1}}</span>
				<span class="color-1"  v-if="type == 'confirm'"  @click="confirmBtn" >{{but_2}}</span>
			</div>
 
		</div>
		<div class="png-bg"></div>

	</div>
</template>
<script>
	export default {
		name:'v-alert',
		data () {
			return {
		      alertShow: false,
			}

		},
		props: {
			value: {},
			type: {
				type: String,
				default: 'default'				
			},
			content:{
				type: String,
				default: ''							
			},
			title:{
				type: String,
				default: ''							
			},
			but_1:{
				type: String,
				default: '取消'							
			},
			but_2:{
				type: String,
				default: '确定'							
			}




		},
		computed: {
		},
		methods: {
		
			closeAlert () {
				this.alertShow = false;
			},
	        closeBtn(){
	            this.$emit('confirm');
	            this.closeAlert();
	        },
	        confirmBtn(){
	            this.$emit('confirm');
	            this.closeAlert();
	        }		
		},
	    mounted(){
	        this.alertShow = this.value;
	    },
	    watch:{
	        value(newVal, oldVal){
	            this.alertShow = newVal;
	        },
	        alertShow(val) {
	            this.$emit('input', val);
	        }
	    },

	}
</script>
<style scoped>
.alert-box{width:18rem;margin-left:-9rem;top:30%;left:50%;position:fixed; z-index:2001;background:#fff;}
.alert-box .alert-title{border-bottom:.05rem solid #f1f1f1;padding:.5rem 0;font-size:.8rem; text-align:center;color:#666;}
.alert-box .alert-con{padding:.6rem;color:#888;text-align: center;}
.alert-box .alert-bot{border-top:.05rem solid #f1f1f1;}
.alert-box .alert-bot span{display:block;float:left;width:49.5%;padding:.5rem 0; text-align:center;}
.png-bg{position:fixed;width:100%;height:100%;background:#000;top:0;left:0;opacity:.3; z-index:2000;}
.bor-right{border-right:.05rem solid #f1f1f1;}
.color-1{color:#000;}
.color-2{color:#ccc;}
</style>