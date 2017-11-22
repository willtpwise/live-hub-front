import Notification from 'components/notification/notification.vue'
import { mapState } from 'vuex'
export default {
  name: 'notification-feed',

  components: {
    Notification
  },

  computed: {
    ...mapState({
      notifications: state => state.notifications.notifications
    })
  }
}
