<style src='./myaccount.scss' lang='scss'></style>
<script src='./myaccount.js'></script>
<template>
  <article class="myaccount">
    <header class="section">
      <h1 class="title is-1">My account</h1>
    </header>
    <section class="section">
      <form>
        <fieldset>
          <legend class="title is-2">General</legend>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label" for='first_name'>First name *</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    name="first_name"
                    id='first_name'
                    v-model='user.first_name'
                    v-validate="'required'"
                    required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label" for='last_name'>Last name *</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    name="last_name"
                    id='last_name'
                    v-model='user.last_name'
                    v-validate="'required'"
                    required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label" for='email'>Email address *</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                name="email"
                id='email'
                v-model='user.email'
                v-validate="'required|email'"
                required>
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <p class="help">
              You'll need your email address to sign in later.
            </p>
          </div>
        </fieldset>

        <fieldset>
          <legend class="title is-2">Contact</legend>
          <details-field :key-options="['Website', 'Phone', 'Email']" :details="user.details.contact"></details-field>
        </fieldset>

        <fieldset>
          <legend class="title is-2">Social</legend>
          <details-field :key-options="['LinkedIn', 'Twitter', 'Facebook', 'SoundCloud', 'Other']" :details="user.details.social"></details-field>
        </fieldset>

        <fieldset>
          <legend class="title is-2">Instruments</legend>
          <instruments-field :instruments="user.instruments"></instruments-field>
        </fieldset>

        <fieldset>
          <legend class="title is-2">Location</legend>
          <p class="subtitle">
            We'll use your location to help find other musicians near you.
          </p>
          <location-field :place='user.geo'></location-field>
        </fieldset>

        <fieldset>
          <legend class="title is-2">Password</legend>
          <p class="subtitle">
            Leave this empty, unless you want to change your password.
          </p>
          <password-field :password='user.password'></password-field>
        </fieldset>

        <fieldset>
          <legend class="title is-2">Danger zone</legend>
          <div class="field">
            <label class="label" for='confirmDeleteAccount'>Type 'delete' to permanently delete your account</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                id='confirmDeleteAccount'
                v-model='confirmDeleteAccount'>
              <span class="icon is-small is-left">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <button
              type="button"
              class="button is-black"
              @click="deleteAccount()"
              :disabled="!canDeleteAccount">
              Delete my account</button>
            <p class="help">
              This is permanent.
            </p>
          </div>
        </fieldset>

        <div class="field has-text-right">
          Changes are saved automatically.
        </div>
      </form>
    </section>
  </article>
</template>
