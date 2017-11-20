import { mapState } from 'vuex'
import UserPicture from 'components/user-picture/user-picture.vue'

export default {
  name: 'chat-feed',

  components: {
    UserPicture
  },

  data () {
    return {
      draft: ''
    }
  },

  computed: {

    ...mapState({
      user: state => state.current.user,
      conversation: state => state.chat.current
    })

  },

  methods: {
    compose (e) {
      if (e.key === 'Enter') {
        if (e.altKey) {
          this.draft += '\n'
        } else {
          this.send()
          e.preventDefault()
        }
      }
    },

    send () {
      this.$store.dispatch('chat/send', {
        temp: Date.now(),
        body: {
          conversation: this.conversation.id,
          content: this.draft
        }
      })
      this.draft = ''
    },

    isAuthor (message) {
      return Number(this.user.id) === Number(message.user)
    },

    parseMessage (content) {
      // Format new lines
      content = content.replace(/\\n/g, '<br>')

      return content
    },

    scrollBottom () {
      var feed = this.$el.querySelector('.chat-history')
      if (feed) {
        setTimeout(() => {
          feed.scrollTop = feed.scrollHeight
        }, 100)
      }
    }
  },

  filters: {
    timeAtom (time) {
      time = new Date(Number(time))
      return time.toLocaleString()
    },

    timeFriendly (time) {
      time = new Date(Number(time))
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

  watch: {
    conversation: {
      handler: function () {
        this.scrollBottom()
      },
      deep: true
    }
  },

  mounted () {
    this.scrollBottom()
  }
}
