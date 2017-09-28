import axios from 'axios'
import getToken from 'utilities/get-token.js'
import setToken from 'utilities/set-token.js'

// Config defaults
let config = {}
config.baseURL = 'http://live-hub-back.int/'
if (getToken() !== 'undefined') {
  config.headers = {'Authorization': 'Bearer ' + getToken()}
}

const $axios = axios.create(config)

// Always store auth tokens on receipt
$axios.interceptors.response.use(function (response) {
  if (response.data.token) {
    setToken(response.data.token)
  }
  return response
})

export default $axios
