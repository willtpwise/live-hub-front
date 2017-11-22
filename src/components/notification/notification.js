export default {
  name: 'notification',

  props: {
    title: {
      // type: 'String',
      default: ''
    },
    body: {
      // type: 'String',
      default: ''
    },
    onClick: {
      // type: 'Function',
      default: () => {
        return
      }
    },
    index: {
      // type: 'Number',
      required: true
    }
  },

  data () {
    return {
      visible: true,
    }
  },

  computed: {

    titleId () {
      return `notification-title-${this._uid}`
    },

    bodyId () {
      return `notification-body-${this._uid}`
    }

  },

  methods: {

    notificationBody (content) {
      content = content.replace(/\\n/g, ' ')
      if (content.length > 90) {
        content.substr(0, 87) + '...'
      }
      return content
    },

    dismiss () {
      this.$store.dispatch('notifications/dismissNotification', this.index)
    }

  },

  mounted () {
    setTimeout(() => {
      this.dismiss()
    }, 4000)
  }
}
