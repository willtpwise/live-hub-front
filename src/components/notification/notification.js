export default {
  name: 'notification',

  props: {
    heading: {
      required: false
    },
    body: {
      required: false
    },
    visible: {
      default: true
    },
    type: {
      default: 'info'
    },
    dismissable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    className () {
      if (this.type) {
        return 'is-' + this.type
      }
      return ''
    }
  },

  methods: {
    toggle () {
      this.visible = this.visible ? false : true
    }
  }
}
