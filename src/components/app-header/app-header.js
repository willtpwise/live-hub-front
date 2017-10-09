import LogoutLink from 'components/logout-link/logout-link.vue'
import SearchForm from 'components/search-form/search-form.vue'
import UserPicture from 'components/user-picture/user-picture.vue'

import { mapState } from 'vuex'
export default {
  name: 'app-header',

  data () {
    return {
      menuOpen: false,
      isSearching: false
    }
  },

  methods: {
    toggleMenu () {
      this.menuOpen = this.menuOpen ? false : true
    },
    searchFocus () {
      this.isSearching = true
    },
    searchBlur () {
      this.isSearching = false
    }
  },

  components: {
    LogoutLink,
    SearchForm,
    UserPicture
  },

  computed: mapState({
    user: state => state.current.user
  }),

  mounted () {
    this.$store.dispatch('current/getUser')

    // Close the menu on page change, unless the user is searching
    this.$router.beforeEach((to, from, next) => {
      if (!this.isSearching) {
        this.menuOpen = false
      }
      next()
    })
  },

  filters: {
    profileLink (id) {
      return '/app/users/' + id
    }
  }
}
