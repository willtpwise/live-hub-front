export default {
  name: 'reset-password',
  data () {
    return {
      user: {},
      emailSent: false
    }
  },
  watch: {
    emailSent () {
      if (this.emailSent) {
        this.$router.push('/app/login?passwordreset=1')
      }
    }
  },
  methods: {
    resetPassword (e) {
      e.preventDefault()
      // TO DO: Backend connection
      this.emailSent = true
    }
  }
}
