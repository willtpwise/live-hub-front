import DetailsField from 'components/details-field/details-field.vue'
import InstrumentsField from 'components/instruments-field/instruments-field.vue'
import LocationField from 'components/location-field/location-field.vue'
import LoadingSpinner from 'components/loading-spinner/loading-spinner.vue'
import PasswordField from 'components/password-field/password-field.vue'
import DisplayPicField from 'components/display-pic-field/display-pic-field.vue'
import UserPicture from 'components/user-picture/user-picture.vue'
import { mapState } from 'vuex'

export default {
  name: 'myaccount',

  components: {
    DetailsField,
    InstrumentsField,
    PasswordField,
    LocationField,
    LoadingSpinner,
    DisplayPicField,
    UserPicture
  },

  computed: {
    ...mapState({
      user: state => state.current.user
    }),

    newUserHeading () {
      if (this.user && this.user.first_name) {
        return `Welcome to your LiveHUB account, ${this.user.first_name}!`
      } else {
        return `Welcome to your LiveHUB account`
      }
    }
  },

  data () {
    return {
      lastSave: Date.now(),
      hasSaved: false,
      isSaving: false,
      confirmDeleteAccount: '',
      canDeleteAccount: false,
      newUserBody: 'This is your `MyAccount` page. Take a moment to setup your profile.'
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
      let handleSaveComplete = () => {
        this.isSaving = false
        this.hasSaved = true
        document.removeEventListener('setUserComplete', handleSaveComplete);
      }
      document.addEventListener('setUserComplete', handleSaveComplete);
      this.submitUser()
    },

    submitUser () {
      this.$store.dispatch('current/setUser', this.user)
    },

    acceptAddress (user) {
      this.$store.commit('current/setUser', user)
    },

    acceptPassword (password) {
      let user = Object.assign({}, this.user, {
        password: password
      })
      this.$store.commit('current/setUser', user)
    },
  },
  mounted () {
    this.$store.dispatch('current/getUser')
  }
}
