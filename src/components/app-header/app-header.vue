<style src='./app-header.scss' lang='scss'></style>
<script src='./app-header.js'></script>
<template>
  <header class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <img src="http://placehold.it/112x28" alt="." width="112" height="28">
          </router-link>
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
            <div class="header-profile navbar-item has-dropdown is-hoverable" v-if='user'>
              <router-link :to='user.id | profileLink' title="Visit my profile" class="navbar-link">
                <figure class="icon header-profile-display">
                  <img @error="setDefault" :src="display" :alt="user.first_name" class="image is-24x24">
                </figure>
                {{user.first_name}}
              </router-link>
              <div class="navbar-dropdown">
                <logout-link class="navbar-item"></logout-link>
                <router-link to='/app/myaccount' class="navbar-item">
                  Myaccount
                </router-link>
              </div>
            </div>
            <router-link v-if='!user' to='/app/signup' class="navbar-item">
              Signup
            </router-link>
            <router-link v-if='!user' to='/app/login' class="navbar-item">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
