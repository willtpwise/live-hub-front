import axios from 'utilities/axios.js'
import qs from 'qs'

export default {
  name: 'reset-password',
  data () {
    return {
      loading: false,
      state: false,
      email: ''
    }
  },
  methods: {
    resetPassword (e) {
      e.preventDefault()
      this.loading = true
      let payload = {
        'email': this.email
      }
      console.log(payload)
      axios.post('/password-reset/', qs.stringify(payload))
      .then((response) => {
        this.loading = false
        if (response.data.body === 'success') {
          this.state = 'success'
        } else {
          this.state = 'error'
        }
      })
    }
  }
}
