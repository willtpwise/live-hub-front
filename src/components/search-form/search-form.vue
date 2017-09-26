<style src='./search-form.scss' lang='scss'></style>
<script src='./search-form.js'></script>
<template>
  <form class="search-form">
    <div class="field has-addons">
    <div class="control search-form-geo">
      <div class="field">
        <p class="control has-icons-left">
          <span class="select">
            <select aria-label='Select a state to search within'>
              <option v-for="(value, key) in geoOptions" :value="value">{{key}}</option>
            </select>
          </span>
          <span class="icon is-small is-left">
            <i class="fa fa-map-marker"></i>
          </span>
        </p>
      </div>
    </div>
    <p class="control is-expanded search-form-query">
      <input class="input" type="search" :aria-label="searchFieldDescription" :placeholder="searchFieldDescription">
    </p>
    <p class="control search-form-submit">
      <button class="button">
        Search
      </button>
    </p>
  </div>
  </form>
</template>
