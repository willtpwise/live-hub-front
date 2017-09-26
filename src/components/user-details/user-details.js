import Autolinker from 'autolinker'
import Icon from 'components/icon/icon.vue'
import Stars from 'components/stars/stars.vue'

const autolinker = new Autolinker({
  mention: 'twitter'
})

export default {
  name: 'user-details',
  props: {
    details: {
      required: true
    },
    defaultIcon: {
      default: 'fa-dot-circle-o'
    },
    heading: true
  },
  computed: {
    titleId () {
      return 'user-details-title-' + this._uid
    }
  },
  components: {
    Icon,
    Stars
  },
  methods: {
    autoLink (link) {
      // Enable autolinking
      // See: https://www.npmjs.com/package/autolinker
      return autolinker.link(link)
    },
    displayType (val) {
      val = parseInt(val)
      if (!isNaN(val) && val <= 5) {
        return 'ranking'
      }
    }
  }
}
