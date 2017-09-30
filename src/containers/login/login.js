import axios from 'utilities/axios'
import qs from 'qs'
export default {
  name: 'login',
  data () {
    return {
      error: '',
      // The user data from the manual form
      manual: {},
      // The user data from the social API
      social: {}
    }
  },
  methods: {
    manualLogin (e) {
      e.preventDefault()
      this.login()
    },
    login () {
      // Clear errors
      this.error = ''

      // Remove any invalid tokens
      localStorage.removeItem('LiveHUB')

      // Login the user
      let payload = qs.stringify(this.manual)
      axios.post('/users/login/', payload)
      .then((response) => {
        if (response.data.token) {
          let to = this.$route.query['to'] || '/app/myaccount'
          this.$router.push(to)
        } else {
          this.error = "Those details don't match up on our side. Try again."
        }
      })
    }
  }
}
