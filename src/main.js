import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

import { facebookAuth } from './FacebookAuth/index'

new Vue({
  router,
  store,
  created(){
    facebookAuth();
  },
  render: h => h(App)
}).$mount('#app')
