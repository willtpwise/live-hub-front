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
      axios.post('/password-reset/', qs.stringify(payload))
      .then((response) => {
        this.loading = false
        if (response.data.body === 'success') {
          this.$store.dispatch('notifications/push', {
            title: 'Email sent',
            body: 'Check your email for the next few steps.',
            class: 'is-info'
          })
        } else {
          this.$store.dispatch('notifications/push', {
            title: 'A problem occured',
            body: 'A problem occured whilst resetting your password. Try again.',
            class: 'is-warning'
          })
        }
      })
    }
  }
}
