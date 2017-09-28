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
          v-model='passwordInitial'>
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
          v-model='passwordConfirmation'>
        <span class="icon is-small is-left">
          <i class="fa fa-key" aria-hidden="true"></i>
        </span>
      </div>
    </div>

    <p class="help">
      {{litteralRequirements}}
    </p>
  </div>
</template>
