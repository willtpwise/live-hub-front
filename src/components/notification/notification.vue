<style src='./notification.scss' lang='scss'></style>
<script src='./notification.js'></script>
<template>
  <div
    class="notification"
    :aria-live="{'polite': visible}"
    :aria-labelledby="titleId"
    :aria-describedby="bodyId"
    @click="onClick($event)">
    <button class="delete" @click="dismiss" aria-label='Dismiss' title='Dismiss'></button>
    <h4 :id='titleId'>{{title}}</h4>
    <p :id='bodyId' v-html='body'></p>
  </div>
</template>
