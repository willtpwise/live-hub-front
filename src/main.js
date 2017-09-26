import App from './App.vue'
import Vue from 'vue'
import store from './store'
import router from './router'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: 'is-success',
    invalid: 'is-danger'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
