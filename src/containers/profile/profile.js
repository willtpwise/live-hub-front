import Stars from 'components/stars/stars.vue'
import UserDetails from 'components/user-details/user-details.vue'
import backEndUri from 'utilities/back-end-uri.js'
import { mapState } from 'vuex'

export default { 
  name: 'profile',
  computed: mapState([
    'user'
  ]),
  components: {
    Stars,
    UserDetails
  },
  mounted: function () {
    this.$store.dispatch('getUser', {
      id: this.$route.params.id
    })
  },
  methods: {
    backEndUri (uri) {
      return backEndUri(uri)
    }
  }
}
