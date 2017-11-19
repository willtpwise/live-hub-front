<style src='./chat-search.scss' lang='scss'></style>
<script src='./chat-search.js'></script>
<template>
  <div class="chat-search">
    <div class="field chat-filter">
      <label class="label sr-only">Search users</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="search" placeholder="Search..." v-model='search'>
        <span class="icon is-small is-left">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </div>
    </div>

    <div class="chat-users">
      <ul>
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
</template>
