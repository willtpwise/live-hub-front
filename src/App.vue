<template>
  <div id="app" class="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <notification-feed></notification-feed>
  </div>
</template>

<script>
import AppHeader from 'components/app-header/app-header.vue'
import AppFooter from 'components/app-footer/app-footer.vue'
import NotificationFeed from 'components/notification-feed/notification-feed.vue'
import Chat from 'components/chat/chat.vue'
import './assets/scaffolding.scss'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    Chat,
    NotificationFeed
  }
}
</script>

  <style lang="sass">
    @import "./assets/variables.scss"
    @import "~bulma/sass/utilities/initial-variables.sass"

    $gap: 32px
    // 960, 1152, and 1344 have been chosen because they are divisible by both 12 a$
    $tablet: 769px
    // 960px container + 3rem
    $desktop: 960px + (2 * $gap)
    // 1152px container + 3rem
    $widescreen: 1152px + (2 * $gap)
    // 1344px container + 3rem
    $fullhd: 1344px + (2 * $gap)

    $radius-small: 0
    $radius: 0
    $radius-large: 0

    // 4. Import the rest of Bulma
    @import "~bulma/bulma.sass"
    @import "~font-awesome/css/font-awesome.min.css";
  </style>
