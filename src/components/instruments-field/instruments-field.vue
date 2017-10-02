<style src='./instruments-field.scss' lang='scss'></style>
<script src='./instruments-field.js'></script>
<template>
  <div class="instruments-field">
    <div class="columns is-mobile instrument-field-headings">
      <div class="column is-5">
        <p class="heading">
          Instrument
        </p>
      </div>
      <div class="column is-5">
        <p class="heading">
          Strength
        </p>
      </div>
    </div>
    <draggable v-model="instruments">
      <div v-for="(detail, index) in instruments" class="instruments-field-item">
        <div class="columns is-mobile">
          <div class="column is-5">
            <div class="field">
              <label class="label sr-only" :for="fieldId('type', index)">Instrument</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  :id="fieldId('type', index)"
                  v-model="detail.type"
                  placeholder="Guitar, Drums, etc">
              </div>
            </div>
          </div>
          <div class="column is-5">
            <div class="field">
              <label class="label sr-only">Strength</label>
              <div class="control">
                <star-rating
                  aria-label='Rate your compentency with this instrument from 0 to 5'
                  v-model="detail.val"
                  :star-size="starSize"
                  active-color="#000000"></star-rating>
              </div>
            </div>
          </div>
          <div class="column is-2 has-text-right">
            <button
              @click="remove(index)"
              class="button is-white"
              type="button"
              role="button"
              aria-label='Remove this item'>
              <span class="icon is-small">
                <i class="fa fa-minus" aria-hidden='true'></i>
              </span>
            </button>
            <button
              @click="duplicate(index)"
              class="button is-white"
              type="button"
              role="button"
              aria-label='Duplicate this item'>
              <span class="icon is-small">
                <i class="fa fa-plus" aria-hidden='true'></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </draggable>

    <div class="instruments-field-actions">
      <button
        @click="add"
        type="button"
        class="button is-light"
        aria-label='Add a new item'>
        Add new
      </button>
    </div>

  </div>
</template>
