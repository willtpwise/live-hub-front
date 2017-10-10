<style src='./password-field.scss' lang='scss'></style>
<script src='./password-field.js'></script>
<template>
  <div class="password-field">
    <div class="field">
      <label class="label" for='password'>Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="password"
          id='password'
          autocomplete="off"
          v-model='passwordInitial'
          aria-describedby="description-password">
        <span class="icon is-small is-left">
          <i class="fa fa-key" aria-hidden="true"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label" for='password'>Confirm password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="password"
          id='password'
          autocomplete="off"
          v-model='passwordConfirmation'
          aria-describedby="description-password">
        <span class="icon is-small is-left">
          <i class="fa fa-key" aria-hidden="true"></i>
        </span>
      </div>
    </div>

    <div class="password-field-validation content">
      <div class="columns">
        <div class="column password-field-validation-item">
          <p>
            <span class="icon">
              <i class="fa fa-check-circle-o has-text-success" aria-hidden="true" v-if="validLength"></i>
              <i class="fa fa-circle-o" aria-hidden="true" v-else></i>
            </span>
            Six or more characters
          </p>
          <p>
            <span class="icon">
              <i class="fa fa-check-circle-o  has-text-success" aria-hidden="true" v-if="passwordsMatch"></i>
              <i class="fa fa-circle-o" aria-hidden="true" v-else></i>
            </span>
            Passwords match
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
