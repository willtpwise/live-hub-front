<style src='./details-field.scss' lang='scss'></style>
<script src='./details-field.js'></script>
<template>
  <div class="details-field">
    <draggable v-model="details">
      <div v-for="(detail, index) in details" class="details-field-item">
        <div class="columns is-mobile">
          <div class="column is-10">
            <fieldset aria-label="Add a detail to your profile by selecting a detail type and entering it's value">
              <div class="field has-addons">
                <p class="control">
                  <label class="sr-only" :for="fieldId('type', index)">Type</label>
                  <span class="select">
                    <select
                      v-model="details[index].type"
                      :id="fieldId('type', index)">
                      <option v-for="option in keyOptions" :value="option">{{option}}</option>
                    </select>
                  </span>
                </p>
                <p class="control is-expanded">
                  <label class="sr-only" :for="fieldId('val', index)">Value</label>
                  <input
                    class="input"
                    type="text"
                    v-model="details[index].val"
                    :id="fieldId('val', index)">
                </p>
              </div>
            </fieldset>
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
              class="button is-white is-hidden-mobile"
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

    <div class="details-field-actions">
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
