import { mapState } from 'vuex'
import qs from 'qs'
export default {
  name: 'search-form',
  props: ['compact'],
  computed: {
    searchFieldDescription () {
      if (this.compact) {
        return 'Search'
      } else {
        return 'Search by name, band or instrument'
      }
    },
    ... mapState([
    'search'
    ])
  },
  data () {
    return {
      geoOptions: {
        NSW: 'nsw',
        VIC: 'vic',
        QLD: 'qld',
        TAS: 'tas',
        NT: 'nt',
        SA: 'sa',
        Anywhere: '*'
      }
    }
  },
  watch: {
    search: {
      handler: function (search) {
        search = qs.stringify(search)
        this.$router.push(`/app/users?${search}`)
      },
      deep: true
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()
    }
  }
}
