export default {
  name: 'stars',
  props: {
    strength: {
      required: true
    }
  },
  computed: {
    label () {
      return 'Ranked ' + this.strength + ' out of 5'
    }
  }
}
