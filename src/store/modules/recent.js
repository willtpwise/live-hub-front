import axios from 'utilities/axios'
import qs from 'qs'

export default {
  namespaced: true,

  state: {
    users: null
  },

  mutations: {
    setUsers (state, payload) {
      if (payload.length > 0) {
        state.users = payload
      } else {
        state.users = false
      }
    }
  },

  actions: {

    getUsers (context, query) {
      let payload = qs.stringify(query)
      axios.post('/users/', payload)
      .then((response) => {
        context.commit('setUsers', response.data.body)
      })
    }

  }
}
