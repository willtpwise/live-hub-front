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

            <div
              v-if="state === 'error'"
              class="notification is-warning"
              aria-live='polite'
              aria-labelledby="error-title">
              <p id="error-title">
                <strong>Oops!</strong> An error occured when resetting your password. Shoot us an email if the problem continues.
              </p>
              <p>
                <a href="mailto:info@livehub.com.au">info@livehub.com.au</a>
              </p>
            </div>

            <div class="field">
              <password-field
                @passwordChange="acceptPassword($event)"></password-field>
            </div>

            <div class="field">
              <button
                role="button"
                type="submit"
                :disabled="loading || state === 'success'"
                class="button is-primary">
                <span v-if="loading">Working...</span>
                <span v-else>Reset my password</span>
              </button>
            </div>

          </form>
        </section>
      </div>
    </section>
  </article>
</template>
