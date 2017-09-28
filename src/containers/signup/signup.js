import axios from 'axios'
import PasswordField from 'components/password-field/password-field.vue'
import setToken from 'utilities/set-token.js'
import qs from 'qs'
export default {
  name: 'signup',
  components: {
    PasswordField
  },
  data () {
    return {
      signupMethod: 'social',
      user: {},
      error: ''
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
      let user = qs.stringify(this.user)
      axios.post('user/create/', user)
      .then((response) => {
        setToken(response.data.token)
        this.$router.push('/app/myaccount')
      })
      .catch((e) => {
        console.error(e)
        this.error = 'An error occured when we tried to make your account. Try again in a few moments.'
      })
    }
  }
}
