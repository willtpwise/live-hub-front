<style src='./notification.scss' lang='scss'></style>
<script src='./notification.js'></script>
<template>
  <div
    class="notification"
    :class="className"
    :hidden="!visible"
    :aria-hidden="!visible">
    <button
      v-if="dismissable"
      class="delete"
      aria-label="Hide this notification"
      @click="toggle"></button>
      <p v-if="heading"><strong v-html="heading"></strong></p>
      <p v-if="body" v-html="body"></p>
  </div>
</template>
