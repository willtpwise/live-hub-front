import axios from 'axios'
import defaultImage from './profile-pic-default.png'
import BackEndURI from 'utilities/back-end-uri.js'

export default {
  name: 'display-pic-field',
  props: ['file'],
  data () {
    return {
      error: '',
      src: this.file || defaultImage
    }
  },
  methods: {
    upload () {
      let field = this.$el.querySelector('input[type="file"]')
      let file = field.files[0]
      let formData = new FormData()

      if (file && file.type.match('image.*')) {
        // Get the file extension
        let ext = file.name.split('.')
        ext = ext[ext.length - 1]

        // Prepare the payload
        formData.append('upload', file, file.name)

        // Send the payload
        axios.post('file/create/', formData, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('LiveHUB')
          }
        })
        .then((response) => {
          this.error = ''
          this.src = BackEndURI(response.data.body)
          this.$emit('fileChange', response.data.body)
          // TO DO: Store the new token
        })
        .catch((e) => {
          this.error = "A problem occured when uploading your file. Try again in a few moments"
        })
      } else {
        this.error = "Looks like that file isn't an image. Your profile picture needs to be an image"
      }
    }
  }
}
