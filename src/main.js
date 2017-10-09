import App from './App.vue'
import Vue from 'vue'
import store from './store'
import router from './router'
import VeeValidate from 'vee-validate'
import FBSignInButton from 'vue-facebook-signin-button'

// Facebook signin
Vue.use(FBSignInButton)

// Vee-validate
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
  components: { App },
  mounted () {
    // Scroll top on route change
    this.$router.beforeEach((to, from, next) => {
      window.scrollTo(0, 0)
      next()
    })
  }
})
