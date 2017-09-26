import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from 'containers/home/home.vue'
import signup from 'containers/signup/signup.vue'
import myaccount from 'containers/myaccount/myaccount.vue'
import login from 'containers/login/login.vue'
import resetPassword from 'containers/reset-password/reset-password.vue'
import resetPasswordStage2 from 'containers/reset-password-stage-2/reset-password-stage-2.vue'
import users from 'containers/users/users.vue'
import profile from 'containers/profile/profile.vue'
import notFound from 'containers/not-found/not-found.vue'

// application routes
const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/app/signup', name: 'signup', component: signup },
  { path: '/app/login', name: 'login', component: login },
  { path: '/app/myaccount', name: 'myaccount', component: myaccount },
  { path: '/app/login/reset-password', name: 'reset-password', component: resetPassword },
  { path: '/app/login/reset-password/stage-2', name: 'reset-password-stage-2', component: resetPasswordStage2 },
  { path: '/app/users', name: 'users', component: users },
  { path: '/app/users/:id', name: 'profile', component: profile },
  { path: '*', name: 'notFound', component: notFound }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
