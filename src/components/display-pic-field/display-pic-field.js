import axios from 'utilities/axios'
import UserPicture from 'components/user-picture/user-picture.vue'

export default {
  name: 'display-pic-field',
  props: ['file'],
  components: {
    UserPicture
  },
  data () {
    return {
      isSaving: false,
      error: ''
    }
  },
  methods: {
    triggerUpload () {
      let button = this.$el.querySelector('input[type="file"]')
      if (button) {
        button.click()
      }
    },
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
        this.isSaving = true
        axios.post('file/create/', formData)
        .then((response) => {
          this.error = ''
          this.$emit('fileChange', response.data.body)
          this.isSaving = false

        })
        .catch((e) => {
          this.error = "A problem occured when uploading your file. Try again in a few moments"
        })
      } else {
        this.error = "Looks like that file isn't an image. Your profile picture needs to be an image"
      }
    }
  },
}
