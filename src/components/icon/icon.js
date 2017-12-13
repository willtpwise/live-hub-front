import Map from './icon-map.js'

export default {
  name: 'icon',
  props: ['icon', 'search', 'default'],
  data () {
    return {
      map: Map,
      classname: false,
      src: false
    }
  },
  mounted () {
    // Static usage
    if (this.icon) {
      this.classname = this.icon
      return
    }

    // Search lookup
    if (this.search) {
      for (let i = 0; i < this.map.length; i++) {
        let item = this.map[i]
        if (item.match.test(this.search)) {
          if (item.icon) {
            this.classname = item.icon
          } else {
            this.src = item.img
          }
          return
        }
      }
    }

    // Default
    if (this.default) {
      return this.classname = this.default
    }
  }
}
