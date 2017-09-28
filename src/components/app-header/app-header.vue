<style src='./app-header.scss' lang='scss'></style>
<script src='./app-header.js'></script>
<template>
  <header class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="http://bulma.io">
            <img src="http://placehold.it/112x28" alt="." width="112" height="28">
          </a>
        </div>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="navbar-menu">
          <div class="navbar-start">
            <!-- navbar items -->
          </div>

          <div class="navbar-end">
            <router-link to='/app/signup' class="navbar-item">
              Signup
            </router-link>
            <router-link to='/app/myaccount' class="navbar-item">
              Myaccount
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
