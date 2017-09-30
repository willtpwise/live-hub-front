<style src='./user-card.scss' lang='scss'></style>
<script src='./user-card.js'></script>
<template>
  <article class="media user-card" :aria-labelledby="labelId">
    <figure class="user-card-display media-left">
      <router-link :to='profileUrl' :title="fullName">
        <p class="image is-128x128">
          <img :src='profilePic' :alt='fullName'>
        </p>
      </router-link>
    </figure>
    <div class="media-content">
      <div class="content">
        <h2 class="title is-3" :id="labelId">
          <router-link :to='profileUrl'>
            {{fullName}}
          </router-link>
        </h2>
        <p class="subtitle" v-if='user.status'>
          {{user.status}}
        </p>
        <p>
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
  </article>
</template>
