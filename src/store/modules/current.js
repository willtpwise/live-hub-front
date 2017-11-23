import axios from 'utilities/axios'
import qs from 'qs'

export default {
  namespaced: true,

  state: {
    user: null
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },

  actions: {
    setUser (context, payload) {
      payload = qs.stringify(payload)
      axios.post('/users/update/', payload)
      .then((response) => {
        // Notify
        context.dispatch('notifications/push', {
          title: 'Changes saved',
          body: 'Changes to your profile have been saved.'
        }, {
          root: true
        })

        // Dispatch listeners
        let event = new CustomEvent('setUserComplete')
        document.dispatchEvent(event)
      })
    },

    getUser (context) {
      let payload = {
        id: 'current'
      }
      payload = qs.stringify(payload)
      axios.post('/users/', payload)
      .then((response) => {
        context.commit('setUser', response.data.body[0])
      })
    }
  }
}
