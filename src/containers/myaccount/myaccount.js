import DetailsField from 'components/details-field/details-field.vue'
import InstrumentsField from 'components/instruments-field/instruments-field.vue'
import LocationField from 'components/location-field/location-field.vue'
import PasswordField from 'components/password-field/password-field.vue'

import MockUsers from 'store/mocks/mock-users.js'
export default {
  name: 'myaccount',
  components: {
    DetailsField,
    InstrumentsField,
    PasswordField,
    LocationField
  },
  data () {
    return {
      user: MockUsers[0],
      confirmDeleteAccount: '',
      canDeleteAccount: false
    }
  },
  watch: {
    confirmDeleteAccount () {
      this.canDeleteAccount = this.confirmDeleteAccount.toLowerCase() === 'delete'
    }
  },
  methods: {
    deleteAccount () {
      // TO DO: Backend
    }
  }
}
