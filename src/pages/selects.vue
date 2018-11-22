<template>
<div>
	<!--先择框1-->
	<v-select :selectDatas = "select1"  @selectshow="selectSex" >
		<span slot="label">选择性别</span>
	</v-select>
	<!--先择框1 end-->
	<!--先择框2-->
	<v-select :selectDatas = "select2"  @selectshow="selectZJ" >
		<span slot="label">选择证件类型</span>
	</v-select>
	<!--先择框2 end-->
	<!--先择框3-->
	<v-address :selectDatas = "select3"  @selectshow="selectAdd" >
		<span slot="label">选择证件类型</span>
	</v-address>
	<!--先择框3 end-->

</div>



</template>
<script>
	import select from '@/components/com/select'
	import address from '@/components/com/selectAdd'		
	import {mapState, mapGetters, mapActions} from 'vuex'

	export default{
		name: 'selects',
		props: {
			/*下拉选择1*/
			selectDatas: Object,

		},
		data () {
			return {

				select1:{     //下拉选择1
					key:1,
					value:'男',
					show: false,
					hover: 1,
					lists:[
						{
							value:'男',
							key:'1',
						},
						{
							value:'女',
							key:'2'
						},
					]
				},
				select2:{     //下拉选择2
					key:1,
					value:'居民身份证',
					show: false,
					hover: 1,
					lists:[
						{
							value:'居民身份证',
							key:'1',
						},
						{
							value:'护照本',
							key:'2'
						},
						{
							value:'部队军人证件',
							key:'3'
						},	
						{
							value:'营业执照',
							key:'4'
						},
					]
				},
				select3:{     //下拉选择2
					key:1,
					value:'居民身份证',
					show: false,
					hover: 1,
					lists1:[
						{
							value:'居民身份证',
							key:'1',
						},
						{
							value:'护照本',
							key:'2'
						},
						{
							value:'部队军人证件',
							key:'3'
						},	
						{
							value:'营业执照',
							key:'4'
						},
						{
							value:'居民身份证',
							key:'1',
						},
						{
							value:'护照本',
							key:'2'
						},
						{
							value:'部队军人证件',
							key:'3'
						},	
						{
							value:'营业执照',
							key:'4'
						},						
					],
					lists2:[
						{
							value:'居民身份证',
							key:'1',
						},
						{
							value:'护照本',
							key:'2'
						},
						{
							value:'部队军人证件',
							key:'3'
						},	
						{
							value:'营业执照',
							key:'4'
						},
					],
					lists3:[
						{
							value:'居民身份证',
							key:'1',
						},
						{
							value:'护照本',
							key:'2'
						},
						{
							value:'部队军人证件',
							key:'3'
						},	
						{
							value:'营业执照',
							key:'4'
						},
					],

				},				
			}
		},
		components:{
			'v-select':select,
			'v-address':address
		},
	    mounted(){
	    	this.requireAdd ()

	    },	
		computed:{
		},
		methods:{

	        selectSex() {
	        	this.select1.show = true
	        },
	        selectZJ() {
	        	this.select2.show = true
	        },
	        selectAdd() {
	        	this.select3.show = true
	        },
	        requireAdd () {


				axios.get('assets/js/chinaAdd.json')
				  .then(function (response) {
				    console.log(response);
				  })
				  .catch(function (error) {
				    console.log(error);
				});



	        }
		}



	}
</script>
<style >
@import "../assets/css/select.css";
</style>