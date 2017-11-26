import axios from 'axios'
import getToken from 'utilities/get-token.js'
import setToken from 'utilities/set-token.js'

// Config defaults
let config = {
  baseURL: 'http://back.livehub-staging.net/'
}
const $axios = axios.create(config)

// Always send the user's auth token
$axios.interceptors.request.use(function (config) {
  if (getToken()) {
    config.headers.Authorization = 'Bearer ' + getToken()
  }
  return config
})

// Always store auth tokens on receipt
$axios.interceptors.response.use(function (response) {
  if (response.data.token === false) {
    // The user has been logged out, or their account has been deleted
    localStorage.removeItem('LiveHUB')
    location.href = '/'
  } else if (response.data.token) {
    setToken(response.data.token)
  }
  return response
})

export default $axios
