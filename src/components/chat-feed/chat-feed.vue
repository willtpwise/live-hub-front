<style src='./chat-feed.scss' lang='scss'></style>
<script src='./chat-feed.js'></script>
<template>
  <div class="chat-feed">
    <div class="chat-history">
      <ul v-if='conversation'>
        <li
          class="chat-message"
          v-for='message in conversation.messages'
          :title='message.created | timeAtom'
          :class="{'chat-message--personal': isAuthor(message)}">
          <div class="chat-message-users">
            <user-picture
              class="chat-message-graphic image is-24x24"
              :picture='conversation.members[message.user].image'
              :alt='conversation.members[message.user].name'>
            </user-picture>
          </div>
          <div class="chat-message-content" v-html="parseMessage(message.content)"></div>
          <div class="chat-message-meta">
            <span class="chat-message-author">{{conversation.members[message.user].name}}</span>
            <time class="chat-message-time" v-if='message.created' :datetime="message.created | timeAtom">
              {{message.created | timeFriendly}}
            </time>
            <span class="chat-message-time" v-else>
              Just now
            </span>
          </div>
        </li>
      </ul>
    </div>

    <textarea
      v-model='draft'
      class="chat-compose textarea"
      @keydown="compose($event)"></textarea>
  </div>
</template>
