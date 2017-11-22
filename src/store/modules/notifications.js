export default {
  namespaced: true,

  state: {
    notifications: [
      {
        id: Date.now(),
        title: 'Some notification',
        body: 'Some notification body',
        onClick: () => {
          console.warn(this)
        }
      }
    ]
  },

  mutations: {
    addNotification (state, notification) {
      // Generate an ID
      notification.id = Date.now() + Math.floor((Math.random() * 100) + 1)

      // Push the notification
      state.notifications.push(notification)
    },

    removeNotification (state, del) {
      var replacement = []
      state.notifications.forEach((notification) => {
        if (notification.id !== del) {
          replacement.push(notification)
        }
      })
      state.notifications = replacement
    }
  },

  actions: {
    pushNotification (context, notification) {
      context.commit('addNotification', notification)
    },

    dismissNotification (context, id) {
      context.commit('removeNotification', id)
    }
  }
}
