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

export default [
  {
    match: /phone/i,
    icon: 'fa-phone'
  },
  {
    match: /email/i,
    icon: 'fa-envelope'
  },
  {
    match: /website/i,
    icon: 'fa-globe'
  },
  {
    match: /linkedin/i,
    icon: 'fa-linkedin'
  },
  {
    match: /twitter/i,
    icon: 'fa-twitter'
  },
  {
    match: /facebook/i,
    icon: 'fa-facebook'
  },
  {
    match: /youtube/i,
    icon: 'fa-youtube'
  },
  {
    match: /soundcloud/i,
    icon: 'fa-soundcloud'
  },
  {
    match: /.*bass.*/i,
    img: BassGuitar
  },
  {
    match: /.*acoustic.*/i,
    img: AcousticGuitar
  },
  {
    match: /.*guitar.*/i,
    img: ElectricGuitar
  },
  {
    match: /.*drum.*/i,
    img: Drums
  },
  {
    match: /.*keyboard.*/i,
    img: Keyboard
  },
  {
    match: /.*piano.*'/i,
    img: Piano
  },
  {
    match: /.*mixing.*/i,
    img: Mixing
  },
  {
    match: /.*producer.*/i,
    img: Producer
  },
  {
    match: /.*saxaphone.*/i,
    img: Saxaphone
  },
  {
    match: /.*(singing|vocal?|lyric).*/i,
    img: Singing
  },
  {
    match: /.*(write|writing).*/i,
    img: SongWriting
  },
  {
    match: /.*string.*/i,
    img: Strings
  },
  {
    match: /.*trumpet.*/i,
    img: Trumpet
  }
]
