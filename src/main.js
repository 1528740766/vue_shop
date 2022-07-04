import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/iconfont.css';
import TreeTable from 'vue-table-with-tree-grid';
// 导入NProgress包对应的js和c's's
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';



import axios from 'axios';

// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
// 在request拦截器中，设置进度条NProgress.start()
axios.interceptors.request.use(config => {
  NProgress.start();
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
});
// 在response拦截器中，隐藏进度条NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done();
  return config;
});



Vue.prototype.$http = axios;
// 导入全局样式biao
import './assets/css/global.css'
Vue.config.productionTip = false
Vue.component ('tree-table', TreeTable)
Vue.use(ElementUI);

Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal);
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + '').padStart(2, '0');
  const d = (dt.getDate() + '').padStart(2, '0');
  const hh = (dt.getHours() + '').padStart(2, '0');
  const mm = (dt.getMinutes() + '').padStart(2, '0');
  const ss = (dt.getSeconds() + '').padStart(2, '0');
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
