import axios from 'axios'
import getToken from 'utilities/get-token.js'
import setToken from 'utilities/set-token.js'

// Get the endpoint
var base = (() => {
  var endpoints = {
    'livehub.com.au': 'https://back.livehub.com.au',
    'livehub-staging.net': 'https://back.livehub-staging.net',
    'localhost': 'http://live-hub-back.int'
  }

  for (let domain in endpoints) {
    if (location.hostname === domain) {
      return endpoints[domain]
    }
  }
  console.error('Unknown hostname: ' + location.hostname)
})()

// Create an axios object with the base URL
const $axios = axios.create({
  baseURL: base
})

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
