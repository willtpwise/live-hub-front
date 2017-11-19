<style src='./chat-conversations.scss' lang='scss'></style>
<script src='./chat-conversations.js'></script>
<template>
  <div class="conversations">
    <div v-if='hasConversations'>
      <a
        class="conversations-item"
        v-for='conversation in conversations'
        @click='setConversation(conversation)'>
        <div class="conversations-content">
          <span class="conversations-title">
            {{membersList(conversation.members)}}
          </span>
          <span class="conversations-excerpt" v-if='conversation.messages.length'>
            {{conversation.messages[conversation.messages.length - 1].content}}
          </span>
        </div>
      </a>
    </div>

    <a
      v-else
      class='conversations-item conversations-notfound'
      @click='setPanel("search")'>
      <div class="conversations-content">
        <span class="conversations-title">
          Hmmm...
        </span>
        <span class="conversations-excerpt">
          Looks like you haven't sent anyone a message yet.
        </span>
      </div>
    </a>
  </div>
</template>
