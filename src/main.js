import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.axios = axios

// 全局过滤器
// 参数一：过滤器名字 参数二：过滤器回调函数
Vue.filter('srcFilterWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
