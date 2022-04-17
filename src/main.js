import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import methods from './assets/js/methods';

Vue.config.productionTip = false;
Vue.use(methods);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
