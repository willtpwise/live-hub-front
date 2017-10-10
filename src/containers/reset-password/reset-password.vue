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
          <form @submit="resetPassword($event)" class="container-small">

            <div
              v-if="state === 'success'"
              class="notification is-success"
              aria-live='polite'
              aria-labelledby="success-title">
              <p id="success-title">
                <strong>Success!</strong><br> Check your email for the next few steps.
              </p>
            </div>

            <div
              v-if="state === 'error'"
              class="notification is-warning"
              aria-live='polite'
              aria-labelledby="error-title">
              <p id="error-title">
                <strong>Oops!</strong> An error occured when resetting your password. Try again in a moment.
              </p>
            </div>

            <div class="field">
              <label class="label" for='email'>Email</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="email"
                  name="email"
                  id='email'
                  v-model='email'
                  v-validate="'required|email'">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <button
                role="button"
                type="submit"
                :disabled="loading"
                class="button is-primary">
                <span v-if="loading">Working...</span>
                <span v-else-if="state === 'success'">Send again</span>
                <span v-else>Reset my password</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  </article>
</template>
