import axios from 'utilities/axios'
import qs from 'qs'

/* global FB */
export default {
  name: 'login',
  data () {
    return {
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
        if (response.data.token) {
          this.$router.push(this.$route.query['to'] || '/app/myaccount')
        } else {
          this.error = "Those details don't match up on our side. Try again."
        }
      })
    },
    manualLogin (e) {
      e.preventDefault()
      this.login(this.manual)
    },
    socialLogin (response) {
      let token = response.authResponse.accessToken
      FB.api('/me/?fields=email', (user) => {
        this.social = {
          email: user.email,
          facebook_token: token,
          facebook_id: user.id
        }
        this.login(this.social)
      })
    },
    socialLoginError (error) {
      console.log('OH NOES', error)
    }
  }
}
