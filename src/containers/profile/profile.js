import Stars from 'components/stars/stars.vue'
import UserDetails from 'components/user-details/user-details.vue'
import LoadingSpinner from 'components/loading-spinner/loading-spinner.vue'
import UserPicture from 'components/user-picture/user-picture.vue'
import SearchForm from 'components/search-form/search-form.vue'

import { mapState } from 'vuex'

export default {
  name: 'profile',
  computed: {
    fullName () {
      return this.user.first_name + ' ' + this.user.last_name
    },
    ...mapState({
      user: state => state.profile.user
    }),
  },
  components: {
    Stars,
    UserDetails,
    LoadingSpinner,
    UserPicture,
    SearchForm
  },
  watch: {
    $route: {
      handler: function () {
        this.$store.dispatch('profile/getUser', {
          id: this.$route.params.id
        })
      },
      deep: true
    }
  },
  mounted () {
    this.user = null
    this.$store.dispatch('profile/getUser', {
      id: this.$route.params.id
    })
  },
  filters: {
    nl2br (text) {
      return text ? text.replace(/\n/g, '<br>') : ''
    }
  }
}
