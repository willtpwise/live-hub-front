import { mapState } from 'vuex'
import UserPicture from 'components/user-picture/user-picture.vue'

export default {
  name: 'chat',

  components: {
    UserPicture
  },

  data () {
    return {
      show: true,
      panel: 'feed',
      history: [],
      draft: '',
      search: '',
      conversation: false,
      conversations: [
        {
          id: 1,
          members: {
            '2': {
              link: '#',
              name: 'William Wise',
              image: 'https://live-hub-uploads.s3-ap-southeast-2.amazonaws.com/1509672743-48.jpg'
            },
            '1': {
              link: '#',
              name: 'William Wise',
              image: 'https://live-hub-uploads.s3-ap-southeast-2.amazonaws.com/1509672743-48.jpg'
            },
            '3': {
              link: '#',
              name: 'William Wise',
              image: 'https://live-hub-uploads.s3-ap-southeast-2.amazonaws.com/1509672743-48.jpg'
            }
          },
          messages: [
            {
              user: 1,
              content: 'Why hello there friend!',
              timestamp: Date.now()
            },
            {
              user: 3,
              content: 'Why hello there friend!',
              timestamp: Date.now()
            },
            {
              user: 2,
              content: 'Why hello there friend!',
              timestamp: Date.now()
            }
          ]
        }
      ]
    }
  },

  computed: {

    back () {
      if (this.history[this.history.length - 2] >= 0) {
        return this.history[this.history.length - 2]
      } else {
        return false
      }
    },

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
    },

    ...mapState({
      users: state => state.users.users,
    }),

    title () {
      switch (this.panel) {
        case 'feed':
          return this.membersList(this.conversation.members)
          break
        case 'conversations':
          return 'Messages'
          break
        case 'search':
          return 'New chat'
          break
      }
    }

  },

  methods: {

    toggle () {
      this.show = this.show ? false : true
    },

    compose (e) {
      if (e.key === 'Enter' && !e.altKey) {
        this.send()
      }
    },

    send () {
      this.conversation.messages.push({
        content: this.draft
      })
      this.draft = ''
    },

    setPanel (to) {
      this.panel = to

      if (to === 'search') {
        setTimeout(() => {
          this.$el.querySelector('input[type="search"]').focus()
        }, 100)
      }
    },

    setConversation (conversation) {
      this.conversation = conversation
      this.setPanel('feed')
    },

    tabResults (e) {
      if (e.key === 'Tab') {
        let firstResult = this.$el.querySelector('.chat-user a')
        if (firstResult) {
          firstResult.focus()
        }
      }
    },

    newConversation (user) {
      // Resolve existing conversations
      for (var conversation in this.conversations) {
        for (var member in conversation.members) {
          if (member.id === user) {
            return this.setConversation(conversation)
          }
        }
      }

      // Create the conversation
      var conversation = {
        id: false,
        members: {},
        messages: []
      }
      this.conversations.push(conversation)
      this.setConversation(conversation)
    },

    membersList (members) {
      let names = []

      for (let id in members) {
        names.push(members[id].name)
      }

      names = names.join(', ')

      if (names.length > 35) {
        names = names.substr(0, 32) + '...'
      }

      return names
    }
  },

  watch: {
    conversation: {
      handler: function () {
        let feed = this.$el.querySelector('.chat-history')
        if (feed) {
          feed.scrollTop = feed.scrollHeight
        }
      },
      deep: true
    }
  },

  filters: {
    timeAtom (time) {
      time = new Date(time)
      return time.toLocaleString()
    },

    timeFriendly (time) {
      time = new Date(time)
      let lapse = 'am'

      let hours = time.getHours()
      if (hours > 12) {
        hours = hours - 12
        lapse = 'pm'
      }
      if (String(hours).length === 1) {
        hours = '0' + hours
      }

      let minutes = time.getMinutes()
      if (String(minutes).length === 1) {
        minutes = '0' + minutes
      }
      return `${hours}:${minutes} ${lapse}`
    }
  },

  mounted () {
    this.$store.dispatch('users/getUsers', {
      limit: -1
    })

    this.conversation = this.conversations[0] || false
  }
}
