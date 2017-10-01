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
          <div v-if='error' class="notification is-warning" aria-live='polite'>
            {{error}}
          </div>
          <div class="login-methods-social">
            <div class="login-button">
              <fb-signin-button
                :params="fbSignInParams"
                @success="socialLogin"
                @error="socialLoginError">
                Sign in with Facebook
              </fb-signin-button>
            </div>
          </div>
          <div class="login-methods-divider">
            <span>or</span>
          </div>
          <div class="login-methods-alt">
            <form @submit="manualLogin($event)">
              <div class="field">
                <label class="label" for='email'>Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="email"
                    name="email"
                    v-validate="'email|required'"
                    required
                    id='email'
                    v-model='manual.email'>
                  <span class="icon is-small is-left">
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label" for='password'>Password</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="password"
                    name="password"
                    id='password'
                    v-validate="'required'"
                    required
                    v-model='manual.password'>
                  <span class="icon is-small is-left">
                    <i aria-hidden="true" class="fa fa-key"></i>
                  </span>
                  <p class="help">
                    <router-link to="/app/login/reset-password">I forgot my password</router-link>
                  </p>
                </div>
              </div>
              <div class="field has-text-right">
                <button
                  type="submit"
                  role="submit"
                  class="button is-primary">Login</button>
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
