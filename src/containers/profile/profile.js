import Stars from 'components/stars/stars.vue'
import UserDetails from 'components/user-details/user-details.vue'
import LoadingSpinner from 'components/loading-spinner/loading-spinner.vue'
import defaultUser from 'assets/default-user.png'
import backEndURI from 'utilities/back-end-uri.js'
import { mapState } from 'vuex'

export default {
  name: 'profile',
  data () {
    return {
      user: null,
    }
  },
  computed: {
    display () {
      return defaultUser
    },
    fullName () {
      return this.user.first_name + ' ' + this.user.last_name
    },
    ... mapState([
      'users'
    ])
  },
  watch: {
    users: {
      handler: function (users) {
        if (Array.isArray(users)) {
          this.user = users[0]
          this.user.display ? backEndURI(this.user.display) : ''
        } else {
          this.user = users
        }
      },
      deep: true
    }
  },
  components: {
    Stars,
    UserDetails,
    LoadingSpinner
  },
  mounted: function () {
    this.$store.dispatch('getUsers', {
      id: this.$route.params.id
    })
  },
  methods: {
    defaultDisplay () {
      this.display = defaultUser
    }
  },
  filters: {
    nl2br (text) {
      return text ? text.replace(/\n/g, '<br>') : ''
    }
  }
}
