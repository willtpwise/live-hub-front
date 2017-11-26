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
    }
  }
}
