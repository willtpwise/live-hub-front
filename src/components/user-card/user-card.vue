<style src='./user-card.scss' lang='scss'></style>
<script src='./user-card.js'></script>
<template>
  <article class="media user-card" :aria-labelledby="labelId">
    <router-link :to='profileUrl' :title="fullName" class="user-card-link">
      <div class="user-card-display user-card-desktop-display media-left">
        <user-picture class="image is-128x128" :picture="user.display['256x256']" :alt="fullName"></user-picture>
      </div>

      <div class="media-content">

        <div class="content">
          <div class="user-card-header">
            <user-picture class="image is-24x24 user-card-display user-card-mobile-display" :picture="user.display['48x48']" :alt="fullName"></user-picture>
            <h2 class="title is-3 user-card-title" :id="labelId">
              {{fullName}}
            </h2>
            <p class="subtitle user-card-status" v-if='user.status'>
              {{user.status}}
            </p>
          </div>
          <p class="user-card-bio">
            {{shortenedBio}}
          </p>
        </div>

        <div
          :aria-label="instrumentsLabel"
          class="user-card-instruments tags"
          v-if='user.meta && user.meta.instruments.length'>
          <span class="icon">
            <i class="fa fa-music" aria-hidden='true'></i>
          </span>
          <span class='tag' v-for='instrument in user.meta.instruments'>
            {{instrument.type}}
          </span>
        </div>

      </div>
    </router-link>
  </article>
</template>
