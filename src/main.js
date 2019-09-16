import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible/index.js'
import router from './router/index'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/style/common.css';
import VueBetterCalendar from 'vue-better-calendar'
import axios from 'axios'
import {Toast} from 'vant'


if (process.env.NODE_ENV == 'production') {
  // 生产环境
  axios.defaults.baseURL = 'http://121.42.196.103:8282/jingcai/api/';
} else {
  // 开发环境
  axios.defaults.baseURL = '/apis/';
}

/* 请求拦截 */
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.withCredentials = true;
  return config;
}, error => {
  // 对请求错误做些什么
  Toast.fail("请求过程中发生了错误");
  console.log("请求过程发生的错误消息：" + error);
  return Promise.reject(error);
});

/* 响应处理 */
axios.interceptors.response.use(response=>{
  try {
    if(response.code=='0'){
      return response;
    }else{
      Toast.fail(response.data || '');
      return response.data;
    }
  } catch (error) {
    Toast.fail("处理返回的数据发生异常");
  }
},error=>{
  Toast.fail("网络连接异常,请稍后再试");
  return Promise.reject(error);
})

Vue.prototype.$http = axios;

Vue.use(Vant);
Vue.use(VueBetterCalendar)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
