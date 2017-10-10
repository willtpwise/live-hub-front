<style src='./location-field.scss' lang='scss'></style>
<script src='./location-field.js'></script>
<template>
  <div class="location-field">
    <div class="field">
      <label class="label" for="autocomplete">Address</label>
      <p class="control has-icons-left">
        <input class="input" id="autocomplete" name="autocomplete" placeholder="E.g. Sydney" type="text" v-model="address">
        <span class="icon is-small is-left">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
  </div>
</template>
