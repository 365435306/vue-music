import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/common.css";
import api from '@/api'
import Tabs from './components/Tabs'
import BackTop from './components/BackTop'

Vue.use(Tabs).use(BackTop)

Vue.prototype.$api = api
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
