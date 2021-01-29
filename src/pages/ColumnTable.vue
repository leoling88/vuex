<template>
<div>

	 <div id="main" style="width:100%;height:400px;"></div>


</div>



</template>
<script>
	
	import {mapState, mapGetters, mapActions} from 'vuex'
	import api from '@/https/index'	



	export default{
		name: 'ColumnTable',
		props: {


		},
		data () {
			return {
				scrUrl:'./static/js/echarts5.0.1.js',
				scrUrl2:'./static/js/wonderland.js',
				ColumnTable:{
				    color: ['#61a0a8'],    //全局					
		            title: {
		                text: '第一个 ECharts 实例'
		            },
		            tooltip: {},

		            xAxis: {
		                data:[],// ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","外套","卫衣","帽子"]
		            },
		            yAxis: {},
		            series: [{
		                name: '销量',
		                type: 'bar',

		                color: ['#8dc1a9','#e1e1e1'],    // 此系列自己的调色盘。
		                data: [], //[5, 20, 36, 10, 10, 20, 15, 28]
		            }],
					legend: {
					    data: [{
					        name: '销量',
					        // 强制设置图形为圆。
					        icon: 'circle',
					        // 设置文本为红色
					        textStyle: {
					            color: 'blue'
					        }
					    }]
					},
					// 高亮样式。
					emphasis: {
					    itemStyle: {
					        // 高亮时点的颜色
					        color: 'red'
					    },
					    label: {
					        show: true,
					        // 高亮时标签的文字
					        color:'#000',
					        formatter: '高亮时显示的标签内容'
					    }
					},


		        },
				theme:{
					// 全图默认背景
					backgroundColor: 'rgba(0,0,0,0)',
				    // 默认色板
				    color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
				            '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
				            '#1e90ff','#ff6347','#7b68ee','#00fa9a','#ffd700',
				            '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'],

				}      
			}

		},
		created:function(){


		},
		components:{

		},
	    mounted(){
	    	this.requireColumntable()

	    	this.requertTableDate('main')
	    	
	    	


	    },	
		computed:{
		},
		methods:{
			requertTableDate(id){
				api.loadScript(this.scrUrl).then(() => {
					api.loadScript(this.scrUrl2).then(() => {
		            })
		            //myChart.showLoading();  // 开启 loading 效果

			        // 基于准备好的dom，初始化echarts实例
			        var myChart = echarts.init(document.getElementById(id),this.theme);
			        // 指定图表的配置项和数据
	
			        var option = this.ColumnTable;
			        
			        // 使用刚指定的配置项和数据显示图表。
			        myChart.setOption(option);

	            });

			},

	        requireColumntable () {      //获得数据
		        api.requestTestData().then(res => {
		        	let _data = res.data.columntable
		        	let _id = []
		        	let _data0 = []
		        	let i
		        	
		        	for (i in _data){
		        		// console.log(_data[i].id)
		        		_id.push(_data[i].id)
		        		_data0.push(_data[i].data)
		        		
		        	}
		        	this.ColumnTable.xAxis.data = _id
		        	this.ColumnTable.series[0].data = _data0 
		        	console.log(this.ColumnTable.series[0].data)
		        }).catch((res) => {
		        });
	        },			



		}



	}
</script>
<style >
@import "../assets/css/select.css";
.box-1{padding:.1rem;text-align:right;font-size:.8rem;color:#ccc;}

</style>