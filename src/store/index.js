import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle:''
  },
  mutations: {
    // 设置页面标题
    setPageTitle(state,title){
      state.pageTitle = title;
    }
  },
  actions: {

  }
})
