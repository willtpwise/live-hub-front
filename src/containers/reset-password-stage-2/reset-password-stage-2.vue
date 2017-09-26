<style src='./reset-password-stage-2.scss' lang='scss'></style>
<script src='./reset-password-stage-2.js'></script>
<template>
  <article class="password-reset-stage-2 has-text-centered">
    <section class="section">
      <div class="container">
        <header class="section">
          <h1 class="title is-1">
            Enter your new password
          </h1>
        </header>

        <section class="section">
          <form @submit="submit($event)" class="container-small">
            <div class="field">
              <label class="label" for='password'>Password</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="password" name="password" id='password' :v-model='user.password'>
                <span class="icon is-small is-left">
                  <i class="fa fa-key"></i>
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
