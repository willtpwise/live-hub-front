<style src='./myaccount.scss' lang='scss'></style>
<script src='./myaccount.js'></script>
<template>
  <article class="myaccount">
    <header class="section">
      <h1 class="title is-1">My account</h1>
    </header>
    <p v-if="user === false">
      User unknown
    </p>
    <loading-spinner v-else-if="user === null"></loading-spinner>
    <section v-else class="section">
      <form @submit="submitForm($event)">
        <fieldset>
          <legend class="title is-2">General</legend>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label" for='first_name'>First name *</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="text"
                    name="first_name"
                    id='first_name'
                    v-model='user.first_name'
                    v-validate="'required'"
                    required>
                  <span class="icon is-small is-left">
                    <i aria-hidden="true" class="fa fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label" for='last_name'>Last name *</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="text"
                    name="last_name"
                    id='last_name'
                    v-model='user.last_name'
                    v-validate="'required'"
                    required>
                  <span class="icon is-small is-left">
                    <i aria-hidden="true" class="fa fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label" for='email'>Email address *</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="email"
                name="email"
                id='email'
                v-model='user.email'
                v-validate="'required|email'"
                required>
              <span class="icon is-small is-left">
                <i aria-hidden="true" class="fa fa-envelope"></i>
              </span>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend class="title is-2">
            Profile
          </legend>
          <div class="field">
            <label class="label" for='status'>Status: Tell us what you're up to</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                name="status"
                id='status'
                v-model='user.status'
                v-validate="'max:250'"
                maxlength="250"
                aria-describedby="description-status">
              <span class="icon is-small is-left">
                <i aria-hidden="true" class="fa fa-bullhorn"></i>
              </span>
            </div>
            <p class="help" id="description-status">
              E.g. Getting ready for a gig in Sydney!
            </p>
          </div>

          <div class="field">
            <label class="label" for='bio'>About {{user.first_name}}</label>
            <div class="control">
              <textarea
                class="textarea"
                type="text"
                id="bio"
                name="bio"
                v-model="user.bio"
                v-validate="'max:1000'"
                maxlength="1000"
                aria-describedby="description-bio">
              </textarea>
            </div>
            <p class="help" id="description-bio">
              Tell other users about you, what you're working on and what you're passionate about.
            </p>
          </div>
          <display-pic-field @fileChange="setFilePath($event)" :file="user.display['256x256']"></display-pic-field>
        </fieldset>

        <fieldset v-if="user.meta">
          <legend class="title is-2">Contact</legend>
          <details-field :key-options="['Website', 'Phone', 'Email']" :details="user.meta.contact"></details-field>
        </fieldset>

        <fieldset v-if="user.meta">
          <legend class="title is-2">Social</legend>
          <details-field :key-options="['LinkedIn', 'Twitter', 'Facebook', 'SoundCloud', 'Other']" :details="user.meta.social"></details-field>
        </fieldset>

        <fieldset v-if="user.meta">
          <legend class="title is-2">Instruments</legend>
          <instruments-field :instruments="user.meta.instruments"></instruments-field>
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

        <div class="columns">
          <div class="column">
            <router-link to="/app/myaccount/delete">Delete account</router-link>
          </div>
          <div class="column has-text-right">
            <button
              type="submit"
              role="submit"
              aria-label="Click to save your changes"
              class="button is-primary">Save Changes</button>
          </div>
        </div>
      </form>
    </section>
  </article>
</template>
