export default {
  name: 'emoji',

  props: ['content'],

  computed: {
    contentParsed () {
      if (window.twemoji) {
        return window.twemoji.parse(this.content)
      } else {
        console.warn('Twemoji was not ready to parse', this.content)
        return this.content
      }
    }
  }
}
