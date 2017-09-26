export default {
  name: 'user-card',
  props: ['user'],
  computed: {
    displayAlt () {
      return this.user.first_name + ' ' + this.user.last_name
    },
    bio () {
      // TO DO: Shorten bio
      return this.user.bio
    },
    profileUrl () {
      return '/app/users/' + this.user.user_name
    }
  }
}
