import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/fonts/iconfont.css'
import 'swiper/dist/css/swiper.css';
// mint-ui
import 'mint-ui/lib/style.css'; 
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
