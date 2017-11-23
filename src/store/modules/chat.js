import axios from 'utilities/axios'
import qs from 'qs'

export default {
  namespaced: true,

  state: {
    open: false,
    panel: 'conversations',
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
    },
    setOpen (state, payload) {
      state.open = payload
    }
  },

  actions: {
    open (context) {
      context.commit('setOpen', true)
    },

    close (context) {
      context.commit('setOpen', false)
    },

    toggle (context) {
      if (context.state.open) {
        context.commit('setOpen', false)
      } else {
        context.commit('setOpen', true)
      }
    },

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
      // Prevent duplicates
      var conversations = context.state.conversations
      for (let con in conversations) {
        for (let id in conversations[con].members) {
          if (id === user) {
            context.commit('setCurrent', conversations[con])
            return
          }
        }
      }

      axios.post('/chat/conversations/create/', qs.stringify({
        user: user
      }))
      .then((response) => {
        var conversations = context.state.conversations
        conversations[response.data.body.id] = response.data.body
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
      for (let conversation in context.state.conversations) {
        context.state.conversations[conversation].messages.forEach((message) => {
          if (Number(message.id) > Number(oldest)) {
            oldest = message.id
          }
        })
      }

      // Request the new messages
      axios.post('/chat/conversations/', qs.stringify({after: oldest}))
      .then((response) => {
        var notifications = []
        var newConversations = response.data.body
        var oldConversations = context.state.conversations

        for (let id in newConversations) {
          if (!oldConversations[id]) {
            oldConversations[id] = newConversations[id]
          }

          newConversations[id].messages.forEach((message) => {
            // Append the message
            oldConversations[id].messages.push(message)

            // Create the notification
            var author = oldConversations[id].members[Number(message.user)]
            notifications.push({
              conversation: id,
              title: author.name,
              body: message.content,
              onClick: function () {
                // Open the conversation on click
                if (context.state.conversations[id]) {
                  context.commit('setCurrent', context.state.conversations[id])
                  context.commit('setPanel', 'feed')
                  context.commit('setOpen', true)
                }
              }
            })
          })
        }

        context.commit('setConversations', oldConversations)
        notifications.forEach((notification) => {
          context.dispatch(
            'notifications/push',
            notification,
            {
              root: true
            }
          )
        })
      })
    }
  }
}
