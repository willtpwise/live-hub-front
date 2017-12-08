<style src='./myaccount.scss' lang='scss'></style>
<script src='./myaccount.js'></script>
<template>
  <article class="myaccount">
    <header class="section myaccount-header">
      <div class="container">
        <user-picture class="image is-128x128 image-circle" :picture="user.display['256x256']"></user-picture>
        <h1 class="title is-1" v-if='$route.query.new'>Welcome, {{user.first_name || 'mate'}}</h1>
        <h1 class="title is-1" v-else>Welcome back, {{user.first_name || 'mate'}}</h1>
      </div>
    </header>
    <section class="section" aria-label="Profile details">
      <div class="container">
        <p v-if="user === false">
          User unknown
        </p>
        <loading-spinner v-else-if="user === null"></loading-spinner>
        <form v-else @submit="submitForm($event)">

          <div class="notification is-info" v-if="$route.query.new">
            <h4>{{newUserHeading}}</h4>
            <p>
              {{newUserBody}}
            </p>
          </div>

          <notification
            v-if="$route.query.reset"
            type="info"
            heading="Password reset"
            :body="`Your password has been successfully reset, ${user.first_name}.`"></notification>

          <fieldset>
            <legend class="title is-2">General</legend>
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label" for='first_name'>First name *</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      name="first_name"
                      id='first_name'
                      v-model='user.first_name'
                      v-validate="'required'"
                      required>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label" for='last_name'>Last name *</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      name="last_name"
                      id='last_name'
                      v-model='user.last_name'
                      v-validate="'required'"
                      required>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label" for='email'>Email address *</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  name="email"
                  id='email'
                  v-model='user.email'
                  v-validate="'required|email'"
                  required>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend class="title is-2">
              Profile
            </legend>
            <div class="field">
              <label class="label" for='status'>Status: What are you up to?</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  name="status"
                  id='status'
                  v-model='user.status'
                  v-validate="'max:250'"
                  maxlength="250">
              </div>
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
            <p class="subtitle">
              These contact details are displayed publicly.
            </p>
            <details-field :key-options="['Website', 'Phone', 'Email']" :details="user.meta.contact"></details-field>
          </fieldset>

          <fieldset v-if="user.meta">
            <legend class="title is-2">Links to your music. </legend>
            <p class="subtitle">
              Show me what you got!
            </p>
            <details-field
              :key-options="['LinkedIn', 'Twitter', 'Facebook', 'SoundCloud', 'YouTube', 'Other']"
              :details="user.meta.social"></details-field>
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
            <location-field
              :user="this.user"
              @addressChange="acceptAddress($event)"></location-field>
          </fieldset>

          <fieldset>
            <legend class="title is-2">Password</legend>
            <p class="subtitle">
              Leave this empty, unless you want to change your password.
            </p>
            <password-field
              :password='user.password'
              @passwordChange="acceptPassword($event)"></password-field>
          </fieldset>

          <div class="columns is-mobile">
            <div class="column">
              <router-link to="/app/myaccount/delete" class="has-text-danger">Delete account</router-link>
            </div>
            <div class="column has-text-right">
              <button
                type="submit"
                role="submit"
                class="button is-primary"
                :disabled="isSaving">
                <span v-if="isSaving">Saving...</span>
                <span v-else>Save changes</span>
              </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  </article>
</template>
