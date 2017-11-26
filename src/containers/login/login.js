import axios from 'utilities/axios'
import Notification from 'components/notification/notification.vue'
import qs from 'qs'

/* global FB */
export default {
  name: 'login',

  components: {
    Notification
  },

  data () {
    return {
      loading: false,
      // The user data from the manual form
      manual: {},
      // The user data from the social API
      social: {},
      fbSignInParams: {
        scope: 'email',
        return_scopes: true
      }
    }
  },

  methods: {
    login (payload) {

      // Remove any invalid tokens
      localStorage.removeItem('LiveHUB')

      // Login the user
      payload = qs.stringify(payload)
      axios.post('/users/login/', payload)
      .then((response) => {
        this.loading = false
        if (response.data.token) {
          this.$router.push(this.$route.query['to'] || '/app/myaccount')
        } else {
          this.$store.dispatch('notifications/push', {
            class: "is-warning",
            title: 'Login failure...',
            body: "Those details don't match up on our side. Try again."
          })
        }
      }).catch((error) => {
        this.loading = false
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.$store.dispatch('notifications/push', {
            class: "is-warning",
            title: 'Something went wrong',
            body: "Sorry but we weren't able to log you in right now. Try again in a moment."
          })
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser
          this.$store.dispatch('notifications/push', {
            class: "is-warning",
            title: 'Connection error',
            body: "Your internet connection appears to be down. Login is unavailable at this time."
          })
        } else {
          // Something happened in setting up the request that triggered an Error
          this.$store.dispatch('notifications/push', {
            class: "is-warning",
            title: 'Internal error',
            body: "Something went wrong while loging you in. Try again."
          })
        }
      })
    },

    manualLogin (e) {
      e.preventDefault()
      this.loading = true
      this.login(this.manual)
    },

    socialLogin (response) {
      let token = response.authResponse.accessToken
      this.loading = true
      FB.api('/me/?fields=email', (response) => {
        if (!response || response.error) {
          this.loading = false
          this.$store.dispatch('notifications/push', {
            class: "is-warning",
            title: 'Connection error',
            body: "Your internet connection appears to be down. Login is unavailable at this time."
          })
        } else {
          this.social = {
            email: response.email,
            facebook_token: token,
            facebook_id: response.id
          }
          this.login(this.social)
        }
      })
    },

    socialLoginError (error) {
      this.$store.dispatch('notifications/push', {
        class: "is-warning",
        title: 'Login error',
        body: "We're having a trouble connecting to Facebook. Try loggin in manually"
      })
    }
  },

  mounted () {
    var button = this.$el.querySelector('.button.button--fb')
    if (button) {
      button.setAttribute('tabindex', 0)
    }
  }
}
