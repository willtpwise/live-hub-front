<style src="./profile.scss" lang='scss'></style>
<script src="./profile.js"></script>
<template>
  <div>
    <div class="section container has-text-centered" v-if="user === false">
      <header>
        <h1 class="title is-1">User not found</h1>
        <p class="subtitle">
          The user at this URL doesn't exist.
        </p>
      </header>
      <section>
        <div class="section container-small">
          <search-form></search-form>
        </div>
      </section>
    </div>
    <loading-spinner v-else-if="user === null"></loading-spinner>
    <article class="user" v-else>
      <header class="hero is-primary user-header">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-4">
                <user-picture class="user-display" :picture="user.display['600x600']" :alt="fullName"></user-picture>
              </div>
              <div class="column user-intro">
                <div>
                  <h1 class="title is-2">
                    <strong>{{fullName}}</strong>
                  </h1>
                  <p v-if='user.status'>
                    <span title='Status'>{{user.status}}</span>
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
              <p v-html='$options.filters.nl2br(user.bio)'></p>
            </main>

          </div>
        </div>
      </section>
    </article>
  </div>
</template>
