<style src='./user-card.scss' lang='scss'></style>
<script src='./user-card.js'></script>
<template>
  <article class="user-card card">
    <div class="card-content">
      <div class="columns">
        <div class="column is-3">
          <figure>
            <router-link :to='profileUrl'>
              <img class="is-square is-circle" :src='user.display[0].src' :alt='displayAlt'>
            </router-link>
          </figure>
        </div>
        <div class="column">
          <header>
            <h2 class="title is-2">
              <router-link :to='profileUrl'>
                {{user.first_name}} {{user.last_name}}
              </router-link>
            </h2>
            <p class="subtitle" v-if='user.nick_name'>
              {{user.nick_name}}
            </p>
          </header>
          <section>
            <p>
              {{bio}}
            </p>
          </section>
          <footer class="user-card-details">
            <div class="columns">
              <div class="column">
                <div class="user-card-instruments tags">
                  <span class="icon">
                    <i class="fa fa-music" aria-label='Instruments'></i>
                  </span>
                  <span class='tag' v-for='instrument in user.instruments'>
                    {{instrument.type}}
                  </span>
                </div>
              </div>
              <div class="column has-text-right">
                <span class="icon">
                  <i class="fa fa-map-marker" aria-label='Location'></i>
                </span> {{user.geo.city}}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </article>
</template>
