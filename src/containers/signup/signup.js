import PasswordField from 'components/password-field/password-field.vue'
import Notification from 'components/notification/notification.vue'
import qs from 'qs'
import axios from 'utilities/axios.js'
import setToken from 'utilities/set-token.js'

export default {
  name: 'signup',

  components: {
    PasswordField,
    Notification
  },

  data () {
    return {
      user: {},
      error: '',
      loading: false,
      signupMethod: 'social',
      fbSignInParams: {
        scope: 'email',
        return_scopes: true
      }
    }
  },

  methods: {

    acceptPassword (e) {
      this.user.password = e
    },

    toggleSignupMethod () {
      this.signupMethod = this.signupMethod === 'alt' ? 'social' : 'alt'
    },

    altSubmit (e) {
      e.preventDefault()
      // To Do: Validate form (or submission)
      this.submit()
    },

    submit () {
      this.loading = true

      // Remove any old tokens
      localStorage.removeItem('LiveHUB')

      // Create the user
      let payload = qs.stringify(this.user)
      axios.post('/users/create/', payload)
      .then((response) => {
        this.loading = false

        // Server error
        if (!response.data.body) {
          this.$store.dispatch('notifications/push', {
            class: "is-warning",
            title: 'Signup error',
            body: "A problem occured while we were signing you up... Try again."
          })
        }

        if (response.data.body === 'duplicate') {
          // Duplicate
          this.$router.push('/app/login')
          this.$store.dispatch('notifications/push', {
            class: "is-info",
            title: 'Existing user',
            body: "It looks like you already have a LiveHUB account."
          })
        } else if (response.data.body === 'success') {
          // Load the my account page
          setToken(response.data.token)
          this.$router.push('/app/myaccount?new=1')
        } else {
          this.$store.dispatch('notifications/push', {
            class: "is-warning",
            title: 'Signup error',
            body: "A problem occured while we were signing you up... Try again."
          })
        }
      })
    },

    socialSignup (response) {
      this.loading = true
      FB.api('/me/?fields=email,first_name,last_name', (user) => {
        if (!user || user.error) {
          this.loading = false
          this.$store.dispatch('notifications/push', {
            class: "is-warning",
            title: 'Connection error',
            body: "You're internet connection appears to be down."
          })
        } else {
          FB.api(`/${user.id}/picture?height=600&width=600&redirect=false`, (picture) => {
            if (!picture || picture.error) {
              this.loading = false
              this.$store.dispatch('notifications/push', {
                class: "is-warning",
                title: 'Connection error',
                body: "You're internet connection appears to be down."
              })
            } else {
              this.user = {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                facebook_id: user.id,
                facebook_picture: picture.data.url
              }
              this.submit()
            }
          })
        }
      })
    },

    socialSignupError (error) {
      this.$store.dispatch('notifications/push', {
        class: "is-warning",
        title: 'Facebook error',
        body: "We're having trouble contacting Facebook. Try again."
      })
    }
  }
}
