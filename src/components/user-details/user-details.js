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
      type: Array,
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
    },

    detailsFiltered () {
      var filtered = []
      if (this.details) {
        this.details.forEach((detail) => {
          if (detail.val) {
            filtered.push(detail)
          }
        })
      }
      return filtered
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
    },
    intval (val) {
      return parseInt(val)
    }
  }
}
