<style src='./app-header.scss' lang='scss'></style>
<script src='./app-header.js'></script>
<template>
  <header class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="http://bulma.io">
            <img src="http://bulma.io/images/bulma-logo.png" alt="." width="112" height="28">
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
            <a class="navbar-item">
              Home
            </a>
            <a class="navbar-item">
              <span class="icon">
                <i class="fa fa-cogs"></i>
              </span>
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
