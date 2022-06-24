import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';


import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/iconfont.css';
import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios';

// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
})
Vue.prototype.$http = axios;
// 导入全局样式biao
import './assets/css/global.css'
Vue.config.productionTip = false
Vue.component ('tree-table', TreeTable)
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
