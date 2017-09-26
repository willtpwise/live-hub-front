export default {
  name: 'password-field',
  props: ['password'],
  data () {
    return {
      passwordValidation: {
        rules: {
          regex: /.(js|ts)$/
        }
      },
      passwordInitial: '',
      passwordConfirmation: '',
      passwordsMatch: false,
      litteralRequirements: 'Six characters plus, with atleast one number'
    }
  },
  watch: {
    passwordInitial () {
      this.passwordsMatch = this.checkPasswordsMatch()
    },
    passwordConfirmation () {
      this.passwordsMatch = this.checkPasswordsMatch()
    }
  },
  methods: {
    checkPasswordsMatch () {
      return this.passwordInitial === this.passwordConfirmation
    }
  }
}
