import Stars from 'components/stars/stars.vue'
import UserDetails from 'components/user-details/user-details.vue'
import backEndUri from 'utilities/back-end-uri.js'
import { mapState } from 'vuex'

export default {
  name: 'profile',
  computed: mapState([
    'users'
  ]),
  components: {
    Stars,
    UserDetails
  },
  mounted: function () {
    this.$store.dispatch('getUsers', {
      id: this.$route.params.id
    })
  },
  methods: {
    backEndUri (uri) {
      return backEndUri(uri)
    }
  },
  filters: {
    nl2br (text) {
      return text ? text.replace(/\n/g, '<br>') : ''
    }
  }
}
