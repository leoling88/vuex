import baseUrl from './config.js';
import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = baseUrl;//baseUrl;  
export default {
  /*
  *中国省市列表*
  */
  getChianAddress() {       //省市、直辖市
    return axios.get('../static/js/chinaAdd3.json')
  },

  getSwiper() {       //省市、直辖市
    return axios.post('http://yxrh.createt.cn:8091/combile/wxInterface/informationBanner/getBannerList')
  },

  /*
  *测试数据*
  */
  requestTestData() {
    return axios.get('../static/js/testData.json')
  }




}
//