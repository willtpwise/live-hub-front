import axios from 'utilities/axios.js'
import qs from 'qs'
import PasswordField from 'components/password-field/password-field.vue'

export default {
  name: 'reset-password-stage-2',

  components: {
    PasswordField
  },

  data () {
    return {
      password: '',
      loading: false,
      state: false
    }
  },

  methods: {
    submit (e) {
      e.preventDefault()
      let payload = {
        'id': this.$route.query.id,
        'challenge': this.$route.query.challenge,
        'password': this.password
      }
      axios.post('/password-reset/validate-challenge/', qs.stringify(payload))
      .then((response) => {
        if (response.data.body === true && response.data.token) {
          this.$router.push(this.$route.query['to'] || '/app/myaccount?reset=1')
        } else {
          this.state = 'error'
        }
      })
    },

    acceptPassword (password) {
      this.password = password
    }
  }
}
