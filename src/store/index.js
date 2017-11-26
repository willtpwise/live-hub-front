import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import current from './modules/current.js'
import search from './modules/search.js'
import profile from './modules/profile.js'
import users from './modules/users.js'
import recent from './modules/recent.js'
// import chat from './modules/chat.js'
import notifications from './modules/notifications.js'

const store = new Vuex.Store({
  modules: {
    current,
    search,
    profile,
    users,
    recent,
    // chat,
    notifications
  }
})

export default store
