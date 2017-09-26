<style src='./reset-password.scss' lang='scss'></style>
<script src='./reset-password.js'></script>
<template>
  <article class="password-reset has-text-centered">
    <section class="section">
      <div class="container">
        <header class="section">
          <h1 class="title is-1">
            Password reset
          </h1>
          <p>
            Enter the email address from your LiveHUB account and we'll send your a reset link.
          </p>
        </header>

        <section class="section password-reset-form">
          <form @submit="identify($event)" class="container-small">
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
              <button type="submit" class="button is-primary">Reset my password</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  </article>
</template>
