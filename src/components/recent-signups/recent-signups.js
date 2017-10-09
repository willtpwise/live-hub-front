import { mapState } from 'vuex'
import UserPicture from 'components/user-picture/user-picture.vue'

export default {
  name: 'recent-signups',

  components: {
    UserPicture
  },

  computed: {
    ...mapState({
      users: state => state.recent.users
    })
  },

  filters: {
    dateATOM (date) {
      date = new Date(parseInt(date))
      return date.toUTCString()
    },
    dateFriendly (date) {
      date = new Date(parseInt(date))
      return date.toLocaleDateString()
    },
    itemLabel (first_name) {
      return `Click to view the LiveHUB profile for ${first_name}`
    },
    profileLink (id) {
      return `/app/users/${id}`
    }
  },

  mounted () {
    this.$store.dispatch('recent/getUsers', {
      limit: 3,
      order: {
        column: 'created',
        direction: 'DESC'
      }
    })
  }
}
