<style src='./app-footer.scss' lang='scss'></style>
<script src='./app-footer.js'></script>
<template>
  <footer class="footer" role="contentinfo">
    <div class="container">
      <chat></chat>
      <div class="footer-alert">
        <span class="icon is-small">
          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        </span>
        Offline
      </div>
      <div class="footer-legal">
        {{legal}}
      </div>
      <div class="footer-actions">
        <div class="field has-addons">
          <p class="control">
            <button role="button" class="button" @click="openChat" title="Messages">
              <span class="icon is-small">
                <i class="fa fa-comments" aria-label="Messages"></i>
              </span>
            </button>
          </p>
          <p class="control">
            <router-link class="button" to="/app/users" title="Search users">
              <span class="icon is-small">
                <i class="fa fa-search" aria-label="Search users"></i>
              </span>
            </router-link>
          </p>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
