export default {
  name: 'reset-password-stage-2',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()
      // TO DO: Backend
      this.$router.push('/app/login')
    }
  }
}
