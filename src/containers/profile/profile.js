import Stars from 'components/stars/stars.vue'
import UserDetails from 'components/user-details/user-details.vue'
import LoadingSpinner from 'components/loading-spinner/loading-spinner.vue'
import UserPicture from 'components/user-picture/user-picture.vue'

import { mapState } from 'vuex'

export default {
  name: 'profile',
  data () {
    return {
      user: null
    }
  },
  computed: {
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
    LoadingSpinner,
    UserPicture
  },
  mounted: function () {
    this.$store.dispatch('getUsers', {
      id: this.$route.params.id
    })
  },
  filters: {
    nl2br (text) {
      return text ? text.replace(/\n/g, '<br>') : ''
    }
  }
}
