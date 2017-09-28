export default {
  name: 'password-field',
  data () {
    return {
      passwordValidation: {
        rules: {
          regex: /.([a-z][0-9])$/
        }
      },
      passwordInitial: '',
      passwordConfirmation: '',
      passwordsMatch: false,
      litteralRequirements: 'Six characters plus, with atleast one number'
    }
  },
  watch: {
    passwordsMatch () {
      this.$emit('passwordChange', this.passwordInitial)
    },
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
