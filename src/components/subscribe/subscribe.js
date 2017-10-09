import { ErrorBag } from 'vee-validate';
import { Validator } from 'vee-validate';

export default {
  name: 'subscribe',

  props: [

  ],

  data () {
    return {
      first_name: '',
      email: ''
    }
  },

  methods: {
    onSubmit (e) {
      let validator = new Validator()

      validator.attach('email', 'required|email')
      validator.attach('first_name', 'required')

      validator.validateAll({
        email: this.email,
        first_name: this.first_name
      }).then((result) => {
        if (!result) {
          e.preventDefault()
        }
      })
    }
  }
}
