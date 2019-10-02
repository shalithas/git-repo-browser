import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import { routes } from './components/routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
