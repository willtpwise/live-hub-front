import App from './App.vue'
import Vue from 'vue'
import store from './store'
import router from './router'
import VeeValidate from 'vee-validate'
import FBSignInButton from 'vue-facebook-signin-button'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

// Service Worker
// See: https://github.com/NekR/offline-plugin
OfflinePluginRuntime.install()

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
    this.$router.beforeEach((to, from, next) => {
      // Scroll top on route change
      let isSearchPage = to.name === 'users' && from.name === 'users'
      if (!isSearchPage) {
        window.scrollTo(0, 0)
      }

      // Blur on route change
      let focused = document.querySelector('*:focus')
      if (focused) {
        focused.blur()
      }

      next()
    })
  }
})
