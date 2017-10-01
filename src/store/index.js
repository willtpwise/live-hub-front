import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'utilities/axios'
import qs from 'qs'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    users: null,
    search: {
      query: '',
      geo: 'nsw'
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setUsers (state, payload) {
      if (payload.length > 0) {
        state.users = payload
      } else {
        state.users = false
      }
    },
    setSearch (state, payload) {
      state.search = payload
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
    },
    getSearch (context, payload) {
      payload = qs.parse(payload)
      let search = {
        query: payload.query,
        geo: payload.query
      }
      context.commit('setSearch', search)
    }
  }
})

export default store
