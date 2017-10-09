import qs from 'qs'

export default {
  namespaced: true,

  state: {
    search: {
      query: '',
      geo: 'nsw'
    }
  },

  mutations: {
    setSearch (state, payload) {
      state.search = payload
    }
  },

  actions: {
    getSearch (context, payload) {
      payload = qs.parse(payload)
      let search = {
        query: payload.query,
        geo: payload.query
      }
      context.commit('setSearch', search)
    }
  }
}
