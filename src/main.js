// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { getAjax, postAjax, patchAjax, putAjax } from './config/ajax'

// Vue.prototype.$axios = axios
window.getAjax = getAjax
window.postAjax = postAjax
window.patchAjax = patchAjax
window.putAjax = putAjax
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
