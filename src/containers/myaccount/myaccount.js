import DetailsField from 'components/details-field/details-field.vue'
import InstrumentsField from 'components/instruments-field/instruments-field.vue'
import LocationField from 'components/location-field/location-field.vue'
import LoadingSpinner from 'components/loading-spinner/loading-spinner.vue'
import PasswordField from 'components/password-field/password-field.vue'
import DisplayPicField from 'components/display-pic-field/display-pic-field.vue'
import { mapState } from 'vuex'

export default {
  name: 'myaccount',
  components: {
    DetailsField,
    InstrumentsField,
    PasswordField,
    LocationField,
    LoadingSpinner,
    DisplayPicField
  },
  computed: mapState([
    'user'
  ]),
  data () {
    return {
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
    setFilePath (file) {
      this.user.display = file
    },
    submitForm (e) {
      e.preventDefault()
      this.submitUser()
    },
    submitUser () {
      this.$store.dispatch('setUser', this.user)
    }
  },
  mounted () {
    this.$store.dispatch('getUser', {
      id: 'current'
    })
  }
}
