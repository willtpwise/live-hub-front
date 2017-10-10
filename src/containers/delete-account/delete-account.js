import { mapState } from 'vuex'
import axios from 'utilities/axios'
import qs from 'qs'

export default {
  name: 'delete-account',
  computed: mapState({
    'user': state => state.current.user
  }),
  data () {
    return {
      showModal: false,
      confirmationEntry: '',
      canDelete: false
    }
  },
  watch: {
    confirmationEntry () {
      if (this.confirmationEntry.toLowerCase() === 'delete') {
        this.canDelete = true
      } else {
        this.canDelete = false
      }
    }
  },
  methods: {
    toggleModal () {
      this.showModal = this.showModal ? false : true
      if (this.showModal) {
        let input = this.$el.querySelector('#confirmDeleteAccount')
        setTimeout(() => {
          input.focus()
        }, 100)
      }
    },
    submit (e) {
      e.preventDefault()
      this.deleteAccount()
    },
    deleteAccount () {
      if (!this.canDelete) {
        return
      }
      let payload = {
        id: this.user.id
      }
      axios.post('/users/delete/', qs.stringify(payload))
      .then((response) => {
        if (response.data.body === 'success') {
          // Log the user out
          localStorage.removeItem('LiveHUB')

          // Hard reload home
          // location.href = '/'
        }
      })
    }
  },
  mounted () {
    this.$store.dispatch('current/getUser')
  }
}
