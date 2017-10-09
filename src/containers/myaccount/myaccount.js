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
  computed: {
    ...mapState([
      'user'
    ])
  },
  data () {
    return {
      hasSaved: false,
      isSaving: false,
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
      this.isSaving = true
      this.hasSaved = true
      let handleSaveComplete = () => {
        this.isSaving = false
        document.removeEventListener('setUserComplete', handleSaveComplete);
      }
      document.addEventListener('setUserComplete', handleSaveComplete);
      this.submitUser()
    },
    submitUser () {
      this.$store.dispatch('setUser', this.user)
    },
    acceptAddress (user) {
      console.log(user)
      this.user = user
    }
  },
  mounted () {
    this.$store.dispatch('getUser', {
      id: 'current'
    })
  }
}
