import Chat from 'components/chat/chat.vue'

export default {
  name: 'app-footer',

  components: {
    Chat
  },

  computed: {
    legal () {
      let date = new Date()
      let year = date.getFullYear()
      return `© ${year} LiveHUB.`
    }
  },

  methods: {
    openChat () {
      this.$store.dispatch('chat/toggle')
    }
  }
}
