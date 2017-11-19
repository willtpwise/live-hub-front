import { mapState } from 'vuex'
import UserPicture from 'components/user-picture/user-picture.vue'

export default {
  name: 'chat-search',

  components: {
    UserPicture
  },

  data () {
    return {
      search: ''
    }
  },

  computed: {
    ...mapState({
      users: state => state.users.users,
      user: state => state.current.user
    }),

    filteredUsers () {
      if (this.search === '') {
        return this.users
      }

      let found = []
      let search = this.search.toLowerCase()
      ;[].forEach.call(this.users, (user) => {
        let name = user.first_name + user.last_name
        if (name.toLowerCase().indexOf(search) >= 0) {
          found.push(user)
        }
      })

      return found
    }

  },

  methods: {

    newConversation (user) {
      this.$store.dispatch('chat/newConversation', {
        user: user
      })
      this.setPanel('feed')
    },

    setPanel (to) {
      this.$store.dispatch('chat/setPanel', to)
    }
    
  }
}
