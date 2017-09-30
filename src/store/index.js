import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'utilities/axios'
import qs from 'qs'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: false,
    users: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setUsers (state, payload) {
      state.users = payload
    }
  },
  actions: {
    setUser (context, payload) {
      payload = qs.stringify(payload)
      axios.post('/users/update/', payload)
    },
    getUser (context, query) {
      let payload = qs.stringify(query)
      axios.post('/users/', payload)
      .then((response) => {
        context.commit('setUser', response.data.body[0])
      })
    },
    getUsers (context, query) {
      let payload = qs.stringify(query)
      axios.post('/users/', payload)
      .then((response) => {
        context.commit('setUsers', response.data.body)
      })
    }
  }
})

export default store
