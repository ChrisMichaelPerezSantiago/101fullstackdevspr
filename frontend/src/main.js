import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store/index';
import Vuetify from 'vuetify';

Vue.config.productionTip = false;

Vue.use(Vuetify);

import { facebookAuth } from './FacebookAuth/index';

new Vue({
  router,
  store,
  created(){
    facebookAuth();
  },
  render: h => h(App)
}).$mount('#app')
