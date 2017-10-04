import DefaultImage from 'assets/default-user.png'

export default {
  name: 'user-picture',
  props: {
    picture: {
      default: DefaultImage
    },
    alt: {
      default: 'User profile picture'
    }
  },
  watch: {
    picture () {
      this.src = this.picture
    }
  },
  data () {
    return {
      src: DefaultImage
    }
  },
  methods: {
    setDefault () {
      this.src = DefaultImage
    }
  },
  mounted () {
    this.src = this.picture
  }
}
