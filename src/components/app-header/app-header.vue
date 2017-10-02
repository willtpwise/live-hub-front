<style src='./app-header.scss' lang='scss'></style>
<script src='./app-header.js'></script>
<template>
  <header class="header" :class="{'is-active': menuOpen}">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <img src="http://placehold.it/112x28" alt="." width="112" height="28">
          </router-link>
          <button
            role="button"
            aria-label="Open / Close the menu"
            @click="toggleMenu"
            :class="{'is-active': menuOpen}"
            class="button is-white navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="navbar-menu" :class="{'is-active': menuOpen}">
          <div class="navbar-start">
            <!-- navbar items -->
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <search-form compact="true" @focus="searchFocus" @blur="searchBlur"></search-form>
            </div>
            <div class="header-profile navbar-item has-dropdown is-hoverable" v-if='user'>
              <router-link :to='user.id | profileLink' title="Visit my profile" class="navbar-link">
                <user-picture :picture="user.display" class="image is-24x24 header-profile-display"></user-picture>
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
