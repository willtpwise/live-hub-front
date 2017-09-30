import BackEndURI from 'utilities/back-end-uri.js'
export default {
  name: 'user-card',
  props: [
    'user'
  ],
  computed: {
    fullName () {
      return this.user.first_name + ' ' + this.user.last_name
    },
    labelId () {
      return 'user-card-' + this.user.id
    },
    profilePic () {
      return BackEndURI(this.user.display)
    },
    instrumentsLabel () {
      return `Instruments that ${this.user.first_name} plays`
    },
    shortenedBio () {
      let max = 100
      let bio = this.user.bio || ''
      if (bio.length > max) {
        bio = bio.substr(0, max) + ' ...'
      }
      return bio
    },
    profileUrl () {
      return '/app/users/' + this.user.id
    }
  },
}
