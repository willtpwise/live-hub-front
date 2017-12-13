import AcousticGuitar from './../../../static/instruments/Acoustic-Guitar.svg'
import BassGuitar from './../../../static/instruments/Bass-Guitar.svg'
import Drums from './../../../static/instruments/Drums.svg'
import ElectricGuitar from './../../../static/instruments/Electric-Guitar.svg'
import Keyboard from './../../../static/instruments/Keyboard.svg'
import Mixing from './../../../static/instruments/Mixing.svg'
import Piano from './../../../static/instruments/Piano.svg'
import Producer from './../../../static/instruments/Producer.svg'
import Saxaphone from './../../../static/instruments/Saxaphone.svg'
import Singing from './../../../static/instruments/Singing.svg'
import SongWriting from './../../../static/instruments/Song-Writing.svg'
import Strings from './../../../static/instruments/Strings.svg'
import Trumpet from './../../../static/instruments/Trumpet.svg'

export default {
  name: 'icon',
  props: ['icon', 'search', 'default'],
  data () {
    return {
      font: {
        phone: 'fa-phone',
        email: 'fa-envelope',
        website: 'fa-globe',
        linkedin: 'fa-linkedin',
        twitter: 'fa-twitter',
        facebook: 'fa-facebook',
        soundcloud: 'fa-soundcloud'
      },
      img: {
        'guitar': ElectricGuitar,
        'air guitar': ElectricGuitar,
        'bass guitar': BassGuitar,
        'acoustic guitar': AcousticGuitar,
        'electric guitar': ElectricGuitar,
        'drums': Drums,
        'keyboard': Keyboard,
        'piano': Piano,
        'mixing': Mixing,
        'producer': Producer,
        'saxaphone': Saxaphone,
        'singing': Singing,
        'vocals': Singing,
        'lyrics': Singing,
        'song writing': SongWriting,
        'violin': Strings,
        'strings': Strings,
        'trumpet': Trumpet
      },
      classname: false,
      src: false
    }
  },
  mounted () {
    // Static usage
    if (this.icon) {
      this.classname = this.icon
      return
    }

    // Search lookup
    if (this.search) {
      let search = this.search.toLowerCase()
      if (this.font[search]) {
        return this.classname = this.font[search]
      }

      if (this.img[search]) {
        return this.src = this.img[search]
      }
    }

    // Default
    if (this.default) {
      return this.classname = this.default
    }
  }
}
