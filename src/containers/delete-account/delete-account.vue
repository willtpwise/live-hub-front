<style src='./delete-account.scss' lang='scss'></style>
<script src='./delete-account.js'></script>
<template>
  <article class="delete-account has-text-centered">
    <header class="section">
      <h1 class="title is-1 is-spaced">Account deletion</h1>
      <p class="subtitle">
        We'll be sad to see you go, but if your heart's content click below.
      </p>
    </header>
    <section class="section">
      <button
        type="button"
        aria-describedby="delete-describe"
        class="button is-black"
        @click="toggleModal()">
        Delete my account</button>
        <p id="delete-describe" class="help">
          Permanently delete your LiveHUB account.
        </p>
    </section>

    <div class="modal" aria-role='dialog' :class="{'is-active': showModal}" aria-labelledby="label-delete-account">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <h3 class="card-header-title" id="label-delete-account">Delete my account</h3>
          </header>
          <div class="card-content">
            <form @submit="submit($event)">
              <div class="field">
                <label class="label" for='confirmDeleteAccount'>Type 'delete' to permanently delete your account</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="text"
                    id='confirmDeleteAccount'
                    v-model='confirmationEntry'>
                  <span class="icon is-small is-left">
                    <i aria-hidden="true" class="fa fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <footer class="card-footer">
            <a
              href="#"
              @click="toggleModal"
              class="card-footer-item"
              aria-label='Cancel and return to my account'
              >Cancel</a>
              <a
                href="#"
                :aria-disabled="!canDelete"
                :disabled="!canDelete"
                @click="deleteAccount"
                class="card-footer-item"
                aria-label='Permanently delete my account'
                >Confirm</a>
          </footer>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="Close and return to my account" @click="toggleModal"></button>
    </div>
  </article>
</template>
