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
    getUser (context, payload) {
      payload = qs.stringify(payload)
      axios.post('/users/', payload)
      .then((response) => {
        if (response.data.body && response.data.body[0]) {
          context.commit('setUser', response.data.body[0])
        } else {
          context.commit('setUser', false)
        }
      })
      .catch((error) => {
        console.error('Failed to get user', error.response)
        if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          context.dispatch('notifications/push', {
            title: 'Poor connection',
            body: "We're having trouble connecting to the LiveHUB servers. Check your Internet connection.",
            class: 'is-warning'
          }, { root: true })
        } else {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx, or
          // something happened in setting up the request that triggered an Error
          context.dispatch('notifications/push', {
            title: 'Internal error',
            body: 'A problem occured when looking up this user. Please try again.',
            class: 'is-warning'
          }, { root: true })
        }
      })
    }
  }
}
