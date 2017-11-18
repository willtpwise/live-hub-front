<template>
  <div id="app" class="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <chat></chat>
  </div>
</template>

<script>
import AppHeader from 'components/app-header/app-header.vue'
import AppFooter from 'components/app-footer/app-footer.vue'
import Chat from 'components/chat/chat.vue'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    Chat
  }
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
@import "../node_modules/font-awesome/css/font-awesome.min.css";

@font-face {
    font-family: stag-bold;
    src: url(/static/fonts/stag-bold.otf);
}

@font-face {
    font-family: stag-sans-book;
    src: url(/static/fonts/stag-sans-book.ttf);
}

body {
  font-family: stag-sans-book;
  font-size: 16px;
}

.title {
  font-family: stag-bold;
}

.container-small {
  max-width: 400px;
  margin: 0 auto;
}
</style>
