import { mapState } from 'vuex'
import UserPicture from 'components/user-picture/user-picture.vue'
import ChatConversations from 'components/chat-conversations/chat-conversations.vue'
import ChatFeed from 'components/chat-feed/chat-feed.vue'
import ChatSearch from 'components/chat-search/chat-search.vue'

export default {
  name: 'chat',

  components: {
    UserPicture,
    ChatConversations,
    ChatFeed,
    ChatSearch
  },

  computed: {

    ...mapState({
      user: state => state.current.user,
      open: state => state.chat.open,
      panel: state => state.chat.panel,
      conversation: state => state.chat.current,
      conversations: state => state.chat.conversations
    }),

    title () {
      switch (this.panel) {
        case 'feed':
          return this.membersList
          break
        case 'conversations':
          return 'Messages'
          break
        case 'search':
          return 'New chat'
          break
      }
    },

    membersList () {
      if (this.conversation && this.user) {
        var members = this.conversation.members
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
    }
  },

  methods: {

    setPanel (to) {
      this.$store.dispatch('chat/setPanel', to)
    },

    close () {
      this.$store.dispatch('chat/close')
    }

  },

  mounted () {
    this.$store.dispatch('chat/getConversations')
    if (!this.users) {
      this.$store.dispatch('users/getUsers')
    }

    // This checks for new messages
    setInterval(() => {
      this.$store.dispatch('chat/checkMessages')
    }, 3000)
  }
}
