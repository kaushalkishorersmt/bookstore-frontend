import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './backend/vue-axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
})
