// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from "axios"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.axios=axios;

// 默认规则
import fontSize from './common/js/font'
Vue.use(fontSize)
import './common/stylus/reset.css'
// 京东UI
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

//瀑布流
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({//store对象  存储请求的数据
    state:{
        channelname:"",
    },
    mutations: {


    }
})




Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})




