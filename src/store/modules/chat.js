import axios from 'utilities/axios'
import qs from 'qs'

export default {
  namespaced: true,

  state: {
    panel: 'search',
    current: false,
    conversations: false
  },

  mutations: {
    setConversations (state, payload) {
      state.conversations = payload
    },
    setCurrent (state, payload) {
      state.current = payload
    },
    setPanel (state, payload) {
      state.panel = payload
    }
  },

  actions: {
    setPanel (context, panel) {
      context.commit('setPanel', panel)
    },

    setCurrent (context, conversation) {
      context.commit('setCurrent', conversation)
    },

    getConversations (context) {
      axios.post('/chat/conversations/')
      .then((response) => {
        context.commit('setConversations', response.data.body)
      })
    },

    newConversation (context, user) {
      axios.post('/chat/conversations/create/', qs.stringify(user))
      .then((response) => {
        var conversations = context.state.conversations
        conversations.push(response.data.body)
        context.commit('setConversations', conversations)
        context.commit('setConversation', response.data.body)
      })
    }
  }
}
