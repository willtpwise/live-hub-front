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
      error: '',
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
      // Clear errors
      this.error = ''

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
          this.error = "Those details don't match up on our side. Try again."
        }
      }).catch((error) => {
        this.loading = false
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.error = `<strong>Internal error</strong><br> Sorry but we weren't able to log you in. Try again in a moment.`
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser
          this.error = `<strong>Connection error</strong><br> Your internet connection appears to be down. Login is unavailable at this time.`
        } else {
          // Something happened in setting up the request that triggered an Error
          this.error = `<strong>Internal error</strong><br> An error occured while creating your account. Login may be unavailable at this time.`
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
      this.error = ''
      this.loading = true
      FB.api('/me/?fields=email', (response) => {
        if (!response || response.error) {
          this.loading = false
          this.error = `<strong>Connection error</strong><br> Your internet connection appears to be down. Login is unavailable at this time.`
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
      console.log('OH NOES', error)
    }
  }
}
