<style src='./signup.scss' lang='scss'></style>
<script src='./signup.js'></script>
<template>
  <article class="signup">
    <div class="section is-medium has-text-centered" v-if='signupMethod === "social"'>
      <div class="container">
        <header class="hero">
          <h1 class="title is-1 has-text-centered">
            Signup to LiveHub
          </h1>
          <notification
            v-if="error"
            type="warning"
            :body="error"
            :dismissable="false"></notification>
          <p class="subtitle">
            Use your Facebook account to kickstart your LiveHUB profile.
          </p>
        </header>
        <section>
          <div class="signup-social-method">
            <div class="signup-button">
              <fb-signin-button
                class="button button--fb"
                :params="fbSignInParams"
                :disabled="loading"
                @success="socialSignup"
                @error="socialSignupError">
                <span v-if="loading">Working...</span>
                <span v-else>Signup with Facebook</span>
              </fb-signin-button>
            </div>
            <p class="signup-alt-method">
              <small>Don't have a Facebook account? <a @click="toggleSignupMethod">Signup the oldschool way</a>.</small>
            </p>
          </div>
        </section>
      </div>
    </div>

    <div class="section is-medium" v-else>
      <div class="container">
        <header class="hero">
          <div class="hero-body">
            <h1 class="title is-1 has-text-centered">
              Signup to LiveHub
            </h1>
            <notification
              v-if="error"
              type="error"
              :body="error"></notification>
            <p class="has-text-centered">
              Alternatively, <a @click="toggleSignupMethod">signup using your Facebook account</a>.
            </p>
          </div>
        </header>
        <section>
          <form @submit="altSubmit($event)">
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label" for='first_name'>First name</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" name="first_name" id='first_name' v-model='user.first_name'>
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label" for='last_name'>Last name</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" name="last_name" id='last_name' v-model='user.last_name'>
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label" for='email'>Email address</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" name="email" id='email' v-model='user.email'>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <p class="help">
                You'll need your email address to sign in later.
              </p>
            </div>
            <password-field @passwordChange="acceptPassword($event)"></password-field>
            <div class="field has-text-right">
              <button
                role="button"
                type="submit"
                class="button is-primary"
                aria-label="Click to submit and create your LiveHUB account"
                :disabled="loading">
                <span v-if="loading">Working...</span>
                <span v-else>Create my account</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>

  </article>
</template>
