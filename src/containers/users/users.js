import UserCard from 'components/user-card/user-card.vue'
import MockUsers from 'store/mocks/mock-users.js'
export default {
  name: 'users',
  data () {
    return {
      users: MockUsers
    }
  },
  components: {
    UserCard
  }
}
