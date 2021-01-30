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
				    legend: {},
				    tooltip: {},
				    
				    dataset: {
						// dimensions: ['product', '2015', '2016', '2017', '2018'],
				        source: [

            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]				        
				            // {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7, '2018': 92.7},
				            // {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1, '2018': 73.7},
				            // {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5,'2018': 83.7},
				            // {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1,'2018': 79.7}
				        ]

				        // 提供一份数据。
				        // source: [
				        //     ['product', '2015', '2016', '2017'],
				        //     ['Matcha Latte', 43.3, 85.8, 93.7],
				        //     ['Milk Tea', 83.1, 73.4, 55.1],
				        //     ['Cheese Cocoa', 86.4, 65.2, 82.5],
				        //     ['Walnut Brownie', 72.4, 53.9, 39.1]
				        // ]
				    },
				    xAxis: [
				        {type: 'category', gridIndex: 0},
				        {type: 'category', gridIndex: 1}
				    ],
				    yAxis: [
				        {gridIndex: 0},
				        {gridIndex: 1}
				    ],
				    grid: [
				        {bottom: '55%'},
				        {top: '55%'}
				    ],
				    series: [
				        // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
				        {type: 'bar', seriesLayoutBy: 'row'},
				        {type: 'bar', seriesLayoutBy: 'row'},
				        {type: 'bar', seriesLayoutBy: 'row'},
				        // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
				        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
				        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
				        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
				        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
				    ]

		        },
   
			}

		},
		created:function(){


		},
		components:{

		},
	    mounted(){


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
			        var myChart = echarts.init(document.getElementById(id));
			        // 指定图表的配置项和数据
	
			        var option = this.ColumnTable;
			        
			        // 使用刚指定的配置项和数据显示图表。
			        myChart.setOption(option);

	            });

			},




		}



	}
</script>
<style >
@import "../assets/css/select.css";
.box-1{padding:.1rem;text-align:right;font-size:.8rem;color:#ccc;}

</style>