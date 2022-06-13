import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';


import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/iconfont.css';

import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
Vue.prototype.$http = axios;
// 导入全局样式biao
import './assets/css/global.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
