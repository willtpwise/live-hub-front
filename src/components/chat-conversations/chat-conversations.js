import { mapState } from 'vuex'
import UserPicture from 'components/user-picture/user-picture.vue'

export default {
  name: 'chat-conversations',

  computed: {

    ...mapState({
      user: state => state.current.user,
      panel: state => state.chat.panel,
      current: state => state.chat.current,
      conversations: state => state.chat.conversations,
    }),

    hasConversations () {
      if (!this.conversations) {
        return false
      } else {
        return Object.keys(this.conversations).length > 0
      }
    }

  },

  methods: {

    setConversation (to) {
      this.$store.dispatch('chat/setCurrent', to)
      this.setPanel('feed')
    },

    membersList (members) {
      if (this.user) {
        var names = []

        for (let id in members) {
          if (id !== this.user.id) {
            names.push(members[id].name)
          }
        }

        names = names.join(', ')

        if (names.length > 35) {
          names = names.substr(0, 32) + '...'
        }
      }

      return names || 'New conversation'
    },

    setPanel (to) {
      this.$store.dispatch('chat/setPanel', to)
    }

  }
}
