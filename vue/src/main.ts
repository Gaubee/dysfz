import Vue from 'vue'
import VueMaterial from 'vue-material';
import Vuex from 'vuex'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/black-green-light.css'
import './my-theme.scss';
import './assets/aliicon.css';

import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.use(VueMaterial)
Vue.use(Vuex)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
