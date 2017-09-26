<style src='./location-field.scss' lang='scss'></style>
<script src='./location-field.js'></script>
<template>
  <div class="location-field">
    <div class="field">
      <label class="label" for="autocomplete">Address</label>
      <p class="control has-icons-left">
        <input class="input" id="autocomplete" name="autocomplete" placeholder="Start typing your address..." type="text">
        <span class="icon is-small is-left">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <label
        class="checkbox"
        for="expand-location-form"
        aria-lable='Select if you are unable to find your address'>
        <input type="checkbox" id="expand-location-form" v-model="expandForm">
        I couldn't find my address...
      </label>
    </div>
    <div v-if="expandForm" aria-live='polite'>
      <div class="columns">
        <div class="column is-3-tablet">
          <div class="field">
            <label class="label" for="street_number">Street number</label>
            <div class="control">
              <input
                class="input"
                id="street_number"
                name="street_number"
                type="text"
                :disabled="!expandForm"
                v-model="geo.street_number">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label" for="route">Street name</label>
            <div class="control">
              <input
                class="input"
                id="route"
                name="address"
                placeholder="E.g. George St"
                type="text"
                :disabled="!expandForm"
                v-model="geo.route">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label" for="locality">Suburb</label>
            <div class="control">
              <input
                class="input"
                id="locality"
                type="text"
                :disabled="!expandForm"
                v-model="geo.locality">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label" for="administrative_area_level_1">State</label>
            <div class="control">
              <input
                class="input"
                id="administrative_area_level_1"
                type="text"
                :disabled="!expandForm"
                v-model="geo.administrative_area_level_1">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label" for="postal_code">Post code</label>
            <div class="control">
              <input
                class="input"
                id="postal_code"
                type="number"
                :disabled="!expandForm"
                v-model="geo.postal_code">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label" for="country">Country</label>
            <div class="control">
              <input
                class="input"
                id="country"
                type="text"
                :disabled="!expandForm"
                v-model="geo.country">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
