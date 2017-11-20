import { mapState } from 'vuex'
import UserPicture from 'components/user-picture/user-picture.vue'

export default {
  name: 'chat-conversations',

  computed: {

    ...mapState({
      panel: state => state.chat.panel,
      current: state => state.chat.current,
      conversations: state => state.chat.conversations,
    }),

    hasConversations () {
      return this.conversations
    }

  },

  methods: {

    setConversation (to) {
      this.$store.dispatch('chat/setCurrent', to)
      this.setPanel('feed')
    },

    membersList (members) {
      var names = []

      for (let id in members) {
        names.push(members[id].name)
      }

      names = names.join(', ')

      if (names.length > 35) {
        names = names.substr(0, 32) + '...'
      }

      return names
    },

    setPanel (to) {
      this.$store.dispatch('chat/setPanel', to)
    }

  }
}
