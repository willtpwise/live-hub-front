<style src='./login.scss' lang='scss'></style>
<script src='./login.js'></script>
<template>
  <article class="login has-text-centered">
    <section class="section">
      <div class="container">
        <header class="section">
          <h1 class="title is-1">
            Login to LiveHUB
          </h1>
        </header>
        <section class="section login-methods container-small">
          <div class="login-methods-social">
            <div class="login-button">
              <a class="button is-primary is-medium">
                Login using Facebook
              </a>
            </div>
          </div>
          <div class="login-methods-divider">
            <span>or</span>
          </div>
          <div class="login-methods-alt">
            <form @submit="submitAlt">
              <div class="field">
                <label class="label" for='email'>Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="email" name="email" id='email' :v-model='user.email'>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label" for='password'>Password</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="password" name="password" id='password' :v-model='user.password'>
                  <span class="icon is-small is-left">
                    <i class="fa fa-key"></i>
                  </span>
                </div>
              </div>
              <div class="columns">
                <div class="column has-text-left">
                  <p>
                    <small><router-link to="/app/login/reset-password">I forgot my password</router-link></small>
                  </p>
                </div>
                <div class="column has-text-right">
                  <div class="field">
                    <button type="submit" class="button is-primary">Login</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
    <section class="hero is-subtle-gray">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-2">Don't have a LiveHUB account?</h2>
          <p>
            LiveHUB accounts are free and always will be. <router-link to="/app/signup">Create your account today</router-link>.
          </p>
        </div>
      </div>
    </section>
  </article>
</template>
