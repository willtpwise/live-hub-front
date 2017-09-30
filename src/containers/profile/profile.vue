<style src="./profile.scss" lang='scss'></style>
<script src="./profile.js"></script>
<template>
  <article class="user">
    <header class="hero is-primary user-header">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
              <figure>
                <img :src="backEndUri(user.display)" :alt="user.first_name + ' ' + user.last_name">
              </figure>
            </div>
            <div class="column user-intro">
              <div>
                <h2 class="title is-2">
                  {{user.first_name}} {{user.last_name}}
                </h2>
                <p class="subtitle" v-if='user.nick_name'>
                  <span title='Nickname'>{{user.nick_name}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="section user-main">
      <div class="container">
        <div class="columns">
          <aside class="column is-4" v-if='user.meta'>

            <div class="user-instruments" v-if='user.meta.instruments.length > 0'>
              <user-details
                heading="Instruments"
                :details='user.meta.instruments'
                default-icon="fa-music"></user-details>
            </div>

            <div class="user-contact" v-if='user.meta.contact.length > 0'>
              <user-details
                heading="Contact"
                :details='user.meta.contact'></user-details>
            </div>

            <div class="user-social" v-if='user.meta.social.length > 0'>
              <user-details
                heading="Connect"
                :details='user.meta.social'></user-details>
            </div>

          </aside>

          <main class="column">
            <p v-html='this.$options.filters.nl2br(user.bio)'></p>
          </main>

        </div>
      </div>
    </section>
  </article>
</template>
