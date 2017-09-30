import { mapState } from 'vuex'
import UserCard from 'components/user-card/user-card.vue'
import SearchForm from 'components/search-form/search-form.vue'

export default {
  name: 'users',
  components: {
    UserCard,
    SearchForm
  },
  computed: mapState([
    'users'
  ]),
  mounted () {
    this.$store.dispatch('getUsers', {
      limit: -1
    })
  }
}
