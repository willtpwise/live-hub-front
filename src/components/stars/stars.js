export default {
  name: 'stars',
  props: ['strength'],
  computed: {
    label () {
      return 'Ranked ' + this.strength + ' out of 5'
    }
  }
}
