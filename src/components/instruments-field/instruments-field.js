import MockUsers from 'store/mocks/mock-users.js'
import StarRating from 'vue-star-rating'
import Draggable from 'vuedraggable'

export default {
  name: 'instruments-field',
  props: {
    instruments: {
      required: true
    }
  },
  data () {
    return {
      starSize: 28
    }
  },
  methods: {
    fieldId (prefix, index) {
      return 'instruments-' + this._uid + '-' + prefix + '-' + index
    },
    add () {
      this.instruments.push({
        type: '',
        val: ''
      })
    },
    remove (index) {
      this.instruments.splice(index, 1)
    },
    duplicate (index) {
      let copy = Object.assign({}, this.instruments[index])
      this.instruments.splice(index, 0, copy)
    }
  },

  components: {
    StarRating,
    Draggable
  }
}
