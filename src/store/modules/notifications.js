export default {
  namespaced: true,

  state: {
    notifications: []
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
    push (context, notification) {
      context.commit('addNotification', notification)
    },

    dismiss (context, id) {
      context.commit('removeNotification', id)
    }
  }
}
