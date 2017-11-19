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
      if (e.key === 'Enter' && !e.altKey) {
        this.send()
      }
    },

    send () {
      this.conversation.messages.push({
        user: this.user.id,
        content: this.draft
      })
      this.$store.dispatch('chat/send', {
        conversation: this.conversation.id,
        content: this.draft
      })
      this.draft = ''
    },

    isAuthor (message) {
      return Number(this.user.id) === Number(message.user)
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
  }
}
