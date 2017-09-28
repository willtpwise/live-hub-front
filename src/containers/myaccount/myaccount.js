import DetailsField from 'components/details-field/details-field.vue'
import InstrumentsField from 'components/instruments-field/instruments-field.vue'
import LocationField from 'components/location-field/location-field.vue'
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
    setFilePath (e) {
      this.user = Object.assign({}, this.user, {
        profile_picture: e
      })
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
