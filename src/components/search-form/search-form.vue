<style src='./search-form.scss' lang='scss'></style>
<script src='./search-form.js'></script>
<template>
  <form class="search-form" @submit='submit($event)'>
    <div class="field has-addons">
      <!-- <div class="control search-form-geo">
        <div class="field">
          <p class="control has-icons-left">
            <span class="select">
              <select
                aria-label='Select a state to search within'
                v-model='search.geo'>
                <option v-for="(value, key) in geoOptions" :value="value">{{key}}</option>
              </select>
            </span>
            <span class="icon is-small is-left">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </div> -->
      <p class="control is-expanded search-form-query has-icons-left">
        <input
          class="input"
          type="search"
          v-model="search.query"
          :aria-label="searchFieldDescription"
          :placeholder="searchFieldDescription">
          <span class="icon is-small is-right">
            <i class="fa fa-search" aria-hidden='true'></i>
          </span>
      </p>
      <p class="control search-form-submit" v-if='!compact'>
        <button class="button">
          Search
        </button>
      </p>
    </div>
  </form>
</template>
