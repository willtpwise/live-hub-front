import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'utilities/axios'
import qs from 'qs'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {}
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
    },
    getUser (context, query) {
      query = qs.stringify(query)
      axios.post('/users/', query)
      .then((response) => {
        context.commit('setUser', response.data.body[0])
      })
    }
  }
})

export default store
