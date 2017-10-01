<style src='./users.scss' lang='scss'></style>
<script src='./users.js'></script>
<template>
  <article class="users">
    <header class="section is-medium">
      <div class="container">
        <h1 class="title is-1" id="results-label">Search results</h1>
        <p class="subtitle" id="results-description">
          {{searchDescription}}
        </p>
        <search-form></search-form>
      </div>
    </header>
    <section class="users-results" aria-labelledby="users-results-label" aria-describedby="results-description">
      <div class="container">
        <user-card
          v-for='user in results'
          :user="user"></user-card>
      </div>
    </section>
  </article>
</template>
