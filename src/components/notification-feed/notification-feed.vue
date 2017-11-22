<style src='./notification-feed.scss' lang='scss'></style>
<script src='./notification-feed.js'></script>
<template>
  <div class="notification-feed">
    <transition-group name="slide-fade">
      <notification
        v-for='notification in notifications'
        :key='notification.id'
        :index='notification.id'
        :title='notification.title'
        :body="notification.body"
        :onClick="notification.onClick"></notification>
    </transition-group>
  </div>
</template>
