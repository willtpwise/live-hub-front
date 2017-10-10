<style src='./users.scss' lang='scss'></style>
<script src='./users.js'></script>
<template>
  <article class="users section is-medium">
    <header>
      <div class="container">
        <h1 class="title is-1" id="results-label">Search results</h1>
        <p class="subtitle" id="results-description">
          {{searchDescription}}
        </p>
        <search-form id="user-search"></search-form>
      </div>
    </header>
    <section class="section users-results" aria-labelledby="users-results-label" aria-describedby="results-description">
      <div class="container">
        <transition-group name="list" tag="p">
          <user-card
            class="list-item"
            v-for='user in results'
            :user="user"
            v-bind:key="user.id">
          </user-card>
        </transition-group>
      </div>
    </section>
  </article>
</template>
