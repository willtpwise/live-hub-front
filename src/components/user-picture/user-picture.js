import DefaultImage from 'assets/default-user.png'
import BackEndURI from 'utilities/back-end-uri.js'

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
      this.src = BackEndURI(this.picture)
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
    this.src = BackEndURI(this.picture)
  }
}
