import Subscribe from 'components/subscribe/subscribe.vue'
import RecentSignups from 'components/recent-signups/recent-signups.vue'

export default {
  name: 'app-footer',

  computed: {
    legal () {
      let date = new Date()
      let year = date.getFullYear()
      return `© ${year} LiveHUB. All rights reserved.`
    }
  },

  components: {
    Subscribe,
    RecentSignups
  }
}
