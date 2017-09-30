export default {
  name: 'logout-link',
  methods: {
    logout (e) {
      e.preventDefault()
      localStorage.removeItem('LiveHUB')
      location.href = '/'
    }
  }
}
