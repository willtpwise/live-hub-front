<style src='./chat.scss' lang='scss'></style>
<script src='./chat.js'></script>
<template>
  <div class="chat">

    <div class="chat-modal" v-if='open'>

      <div class="chat-nav">
        <button class="chat-nav-item" @click='setPanel("conversations")'>
          <i class="fa fa-list-ul" aria-hidden="true"></i>
          <span class="sr-only">All converations</span>
        </button>
        <div class="chat-nav-item">
          <strong>{{title}}</strong>
        </div>
        <button class="chat-nav-item" @click='setPanel("search")'>
          <span class="sr-only">Search users</span>
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>

      <!-- All conversations -->

      <chat-conversations v-if='panel === "conversations"'></chat-conversations>
      <chat-feed v-else-if='panel === "feed"'></chat-feed>
      <chat-search v-else></chat-search>

    </div>

    <button class="chat-toggle" @click='toggle' aria-label='Toggle chat'>
      <i class="fa fa-comments-o" aria-hidden="true"></i>
    </button>
  </div>
</template>
