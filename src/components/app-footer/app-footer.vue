<style src='./app-footer.scss' lang='scss'></style>
<script src='./app-footer.js'></script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="footer-brand">
            <span class="footer-brand-live">Live</span>
            <span class="footer-brand-hub">HUB</span>
          </p>
        </div>
        <div class="column">
          <subscribe></subscribe>
        </div>
        <div class="column">
          <recent-signups></recent-signups>
        </div>
        <div class="column has-text-right">
          <div class="footer-subtle">
            <div class="footer-social" aria-label="LiveHUB social accounts">
              <a
                href="#"
                title="Visit LiveHUB's Facebook page"
                aria-label="Visit LiveHUB's Facebook page">
                <span class="icon">
                  <i class="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
                </span>
              </a>
              <a
                href="#"
                title="Visit LiveHUB's Twitter page"
                aria-label="Visit LiveHUB's Twitter page">
                <span class="icon">
                  <i class="fa fa-twitter-square fa-lg" aria-hidden="true"></i>
                </span>
              </a>
              <a
                href="#"
                title="Visit LiveHUB's Youtube page"
                aria-label="Visit LiveHUB's Youtube page">
                <span class="icon">
                  <i class="fa fa-youtube-square fa-lg" aria-hidden="true"></i>
                </span>
              </a>
            </div>
            <p class="footer-legal">
              <small>{{legal}}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
