import MockUsers from 'store/mocks/mock-users.js'
import Stars from 'components/stars/stars.vue'
import UserDetails from 'components/user-details/user-details.vue'

export default {
  name: 'projects',
  data: function () {
    return {
      user: MockUsers[0]
    }
  },
  components: {
    Stars,
    UserDetails
  },
  mounted: function () {
    // this.$store.dispatch('GET_USER')
  }
}
