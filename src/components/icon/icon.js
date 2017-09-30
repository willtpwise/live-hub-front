export default {
  name: 'icon',
  props: ['icon', 'search', 'default'],
  data () {
    return {
      map: {
        phone: 'fa-phone',
        email: 'fa-envelope',
        website: 'fa-globe',
        linkedin: 'fa-linkedin',
        twitter: 'fa-twitter',
        facebook: 'fa-facebook',
        soundcloud: 'fa-soundcloud'
      }
    }
  },
  computed: {
    className () {
      // Static usage
      if (this.icon) {
        return this.icon
      }

      // Search lookup
      if (this.search) {
        let search = this.search.toLowerCase()
        if (this.map[search]) {
          return this.map[search]
        }
      }

      // Default
      if (this.default) {
        return this.default
      }
    }
  }
}
