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
        context.commit('setCurrent', response.data.body)
      })
    },

    send (context, message) {
      axios.post('/chat/messages/create/', qs.stringify(message.body))
      .then((response) => {
        // Get the current conversation
        var conversation = context.state.current

        // Add the message
        conversation.messages.push(response.data.body)
      })
    },

    checkMessages (context) {
      // Get the last message's ID
      var oldest = 0
      context.state.conversations.forEach((conversation) => {
        conversation.messages.forEach((message) => {
          if (message.id > oldest) {
            oldest = message.id
          }
        })
      })

      // Request the new messages
      axios.post('/chat/conversations/', qs.stringify({after: oldest}))
      .then((response) => {
        var conversations = response.data.body

        // Append or create each conversation
        conversations.forEach((newConversation) => {
          // Check to see if the passed conversation already exists
          var oldFeed = false
          context.conversations.forEach((oldConversation) => {
            if (oldConversation.id === newConversation.id) {
              
            }
          })

        })

        context.commit('setConversations', conversations)
      })
    }
  }
}
