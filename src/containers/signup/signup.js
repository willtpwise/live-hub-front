export default {
  name: 'signup',
  data () {
    return {
      signupMethod: 'social',
      user: {}
    }
  },
  methods: {
    toggleSignupMethod () {
      this.signupMethod = this.signupMethod === 'alt' ? 'social' : 'alt'
    }
  }
}
