import baseUrl from './config.js';
import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = baseUrl;//baseUrl;  



export default {
  /*异步加载第三方库  */
  loadScript(url) {
    let isLoaded = false;
    return new Promise((resolve,reject) => {
      if(isLoaded) {
        resolve();
        return true;
      }
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      script.src = url;
      script.onerror = reject;
      script.onload = function () {
        isLoaded = true;
        resolve();
      }
      document.head.appendChild(script);
    })
  },
  /*异步加载第三方库  end*/


  /*
  *中国省市列表*
  */
  getChianAddress() {       //省市、直辖市
    return axios.get('../static/js/chinaAdd3.json')
  },
/*
  getSwiper() {       //省市、直辖市
    return axios.post('http://yxrh.createt.cn:8091/combile/wxInterface/informationBanner/getBannerList')
  },
*/
  /*
  *测试数据*
  */
  requestTestData() {
    return axios.get('../static/js/testData.json')
  },
  getSwiper (){
    return axios.get('../static/js/testData.json')
  }




}
//