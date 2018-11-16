import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import Vuesax  from 'vuesax'
import { facebookAuth } from './FacebookAuth/index';
import 'vuesax/dist/vuesax.css' //Vuesax styles
import './plugins/vuesax.js'

Vue.config.productionTip = false;

Vue.use(Vuesax);

new Vue({
  router,
  store,
  created(){
    facebookAuth();
  },
  render: h => h(App)
}).$mount('#app')
