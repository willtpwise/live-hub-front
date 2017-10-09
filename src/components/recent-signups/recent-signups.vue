<style src='./recent-signups.scss' lang='scss'></style>
<script src='./recent-signups.js'></script>
<template>
  <div class="recent-signups" aria-labelledby="recent-users-title">
    <h3 class="title is-3" id="recent-users-title">New Users</h3>
    <div class="recent-signups-feed">

      <router-link
        :to="user.id | profileLink"
        class="recent-signups-item"
        title="Read more"
        :aria-label="user.first_name | itemLabel"
        v-if="users"
        v-for="user in users">
        <user-picture
          :picture="user.display['48x48']"
          class="image is-24x24 recent-signups-display"></user-picture>
        <div class="recent-signups-body">
          <h4 class="has-text-weight-semibold">{{user.first_name}} {{user.last_name}}</h4>
          <p>Joined: <time :datetime="user.created | dateATOM">{{user.created | dateFriendly}}</time></p>
        </div>
      </router-link>

    </div>
  </div>
</template>
