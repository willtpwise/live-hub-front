import PasswordField from 'components/password-field/password-field.vue'
import qs from 'qs'
import axios from 'utilities/axios.js'
import setToken from 'utilities/set-token.js'

export default {
  name: 'signup',
  components: {
    PasswordField
  },
  data () {
    return {
      user: {
        first_name: 'te1293st',
        last_name: 'test',
        email: 'test@rtss.com',
        password: 'asd'
      },
      signupMethod: 'social'
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
      // Remove any old tokens
      localStorage.removeItem('LiveHUB')

      // Create the user
      let payload = qs.stringify(this.user)
      axios.post('/users/create/', payload)
      .then((response) => {
        // Load the my account page
        setToken(response.data.token)
        location.href = '/app/myaccount?new=1'
      })
    }
  }
}
