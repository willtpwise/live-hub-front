import { mapState } from 'vuex'
import UserCard from 'components/user-card/user-card.vue'
import SearchForm from 'components/search-form/search-form.vue'

export default {
  name: 'users',
  components: {
    UserCard,
    SearchForm
  },
  data () {
    return {
      results: []
    }
  },
  computed: {
    searchDescription () {
      let description = ''

      if (this.results.length === 1) {
        description = `One user`
      } else if (this.results.length) {
        description = `${this.results.length} users found`
      } else {
        description = `Zero users found`
      }

      if (this.search.query !== '') {
        description += ` for ${this.search.query}`
      }

      return description
    },
    ...mapState({
      users: state => state.users.users,
      search: state => state.search.search
    }),
  },
  watch: {
    users: {
      handler: function (users) {
        this.results = users
      },
      deep: true
    },
    search: {
      handler: function (search) {
        if (search.query === '') {
          this.results = this.users
        }
        let results = []
        let query = search.query.toLowerCase()

        for (let i = 0; i < this.users.length; i ++) {
          let user = this.users[i]

          // Combine user values into a searchable string
          let comparison = [
            user.first_name,
            user.last_name,
            user.status
          ]
          if (user.meta && user.meta.instruments && user.meta.instruments.length) {
            user.meta.instruments.forEach((instrument) => {
              comparison.push(instrument.type)
            })
          }
          comparison = comparison.join(' ').toLowerCase()

          if (comparison.indexOf(query) >= 0) {
            results.push(this.users[i])
          }
        }
        this.results = results
      },
      deep: true
    }
  },
  mounted () {
    this.$store.dispatch('users/getUsers', {
      limit: -1
    })

    this.$el.querySelector('input[type="search"]').focus()
  }
}
