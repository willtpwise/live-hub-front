<style src='./chat.scss' lang='scss'></style>
<script src='./chat.js'></script>
<template>
  <div class="chat">

    <div class="chat-modal" v-if='show'>
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

      <div class="chat-conversations" v-if='panel === "conversations"'>
        <a class="chat-conversation" v-for='conversation in conversations' @click='setConversation(conversation)'>
          <div class="chat-conversation-content">
            <span class="chat-conversation-title">
              {{membersList(conversation.members)}}
            </span>
            <span class="chat-conversation-excerpt" v-if='conversation.messages.length'>
              {{conversation.messages[conversation.messages.length - 1].content}}
            </span>
          </div>
        </a>
      </div>

      <!-- The current conversation's feed -->

      <div class="chat-feed" v-else-if='panel === "feed"'>
        <div class="chat-history">
          <ul>
            <li class="chat-message" v-for='message in conversation.messages' :title='message.timestamp | timeAtom'>
              <div class="chat-message-users">
                <user-picture
                  class="chat-message-graphic image is-24x24"
                  :picture='conversation.members[message.user].image'
                  :alt='conversation.members[message.user].name'>
                </user-picture>
              </div>
              <div class="chat-message-content">{{message.content}}</div>
              <div class="chat-message-meta">
                <span class="chat-message-author">{{conversation.members[message.user].name}}</span>
                <time class="chat-message-time" :datetime="message.timestamp | timeAtom">
                  {{message.timestamp | timeFriendly}}
                </time>
              </div>
            </li>
          </ul>
        </div>

        <textarea
          v-model='draft'
          class="chat-compose textarea"
          @keydown="compose($event)"
          placeholder="Textarea"></textarea>
      </div>

      <!-- Search users -->

      <div class="chat-search" v-else>
        <div class="field chat-filter">
          <label class="label sr-only">Search users</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="search" placeholder="Search..." v-model='search'>
            <span class="icon is-small is-left">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        <ul class="chat-users">
          <li class="chat-user" v-for='user in filteredUsers'>
            <a href="#" @click='newConversation(user.id)'>
              <user-picture
                class="image is-24x24 chat-user-graphic"
                :picture='user.display["48x48"]'
                :alt="user.first_name + ' ' + user.last_name"
                @keydown='tabResults($event)'></user-picture>
              <div class="chat-user-content">
                <span class="chat-user-name">{{user.first_name + ' ' + user.last_name}}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

    </div>

    <button class="chat-toggle" @click='toggle' aria-label='Toggle chat'>
      <i class="fa fa-comments-o" aria-hidden="true"></i>
    </button>
  </div>
</template>
