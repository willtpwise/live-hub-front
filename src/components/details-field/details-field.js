import MockUsers from 'store/mocks/mock-users.js'
import Draggable from 'vuedraggable'

export default {
  name: 'instruments-field',

  components: {
    Draggable
  },

  props: {
    keyOptions: {
      required: true
    },
    details: {
      required: true
    }
  },

  methods: {
    fieldId (prefix, index) {
      return 'details-' + this._uid + '-' + prefix + '-' + index
    },
    add () {
      this.details.push({
        type: '',
        val: ''
      })
    },
    remove (index) {
      this.details.splice(index, 1)
    },
    duplicate (index) {
      let copy = Object.assign({}, this.details[index])
      this.details.splice(index, 0, copy)
    }
  }
}
