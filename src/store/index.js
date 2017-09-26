import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import MockUsers from './mocks/mock-users.js'

import * as types from './types'

Vue.use(Vuex)

const USER_ENDPOINT = 'http://localhost/live-hub-back/user/'
// const USERS_ENDPOINT = 'http://localhost/live-hub-back/users/'

const options = {
  state: {
    user: {},
    users: []
  },
  mutations: {
    [types.SET_USER]: (state, { payload }) => {
      state.user = payload
    },
    [types.SET_USERS]: (state, { payload }) => {
      state.users = payload
    }
  },
  getters: {
  },
  actions: {
    [types.LOAD_USER]: function ({ commit }) {
      axios.get(USER_ENDPOINT).then((response) => {
        commit(types.SET_USER, { payload: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    [types.LOAD_USERS]: function ({ commit }) {
      commit(types.SET_USERS, { payload: MockUsers })
      console.log(options.state)
      // axios.get(USERS_ENDPOINT).then((response) => {
      //   commit(types.SET_USERS, { payload: response.data })
      // }, (err) => {
      //   console.log(err)
      // })
    }
  }
}

const store = new Vuex.Store({ ...options })

export default store
