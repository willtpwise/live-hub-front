export default {
  name: 'password-field',
  data () {
    return {
      passwordInitial: '',
      passwordConfirmation: '',
      passwordsMatch: false,
      validLength: false,
      litteralRequirements: 'Six character or more'
    }
  },
  watch: {
    passwordsMatch () {
      if (validLength) {
        this.$emit('passwordChange', this.passwordInitial)
      }
    },
    passwordInitial () {
      this.validLength = this.checkPasswordLength()
      this.passwordsMatch = this.checkPasswordsMatch()
    },
    passwordConfirmation () {
      this.passwordsMatch = this.checkPasswordsMatch()
    }
  },
  methods: {
    checkPasswordsMatch () {
      if (this.passwordInitial === '') {
        return false
      }
      return this.passwordInitial === this.passwordConfirmation
    },
    checkPasswordLength () {
      return this.passwordInitial.length >= 6
    }
  }
}
