import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible/index.js'
import router from './router/index'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/style/common.css';
import VueBetterCalendar from 'vue-better-calendar'

Vue.use(Vant);
Vue.use(VueBetterCalendar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
