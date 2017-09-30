import LogoutLink from 'components/logout-link/logout-link.vue'
import BackEndURI from 'utilities/back-end-uri.js'
import DefaultUser from 'assets/default-user.png'
import { mapState } from 'vuex'
export default {
  name: 'app-header',
  data () {
    return {
      defaultUser: DefaultUser,
      display: DefaultUser
    }
  },
  methods: {
    setDefault () {
      this.display = this.defaultUser
    }
  },
  components: {
    LogoutLink
  },
  computed: mapState([
    'user'
  ]),
  mounted () {
    this.$store.dispatch('getUser', {
      id: 'current'
    })
  },
  filters: {
    profileLink (id) {
      return '/app/users/' + id
    }
  }
}
