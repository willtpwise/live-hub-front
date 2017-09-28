<style src='./display-pic-field.scss' lang='scss'></style>
<script src='./display-pic-field.js'></script>
<template>
  <div class="display-pic-field">
    <div class="columns">
      <div class="column is-6">
        <figure class="display-pic-field-image">
          <img :src="src" alt="User profile picture" class="image">
        </figure>
        <div class="field">
          <div class="file is-primary">
            <label class="file-label" aria-label='Upload your profile picture'>
              <input class="file-input" type="file" name="profile-picture" @change="upload">
              <span class="file-cta" aria-hidden='true'>
                <span class="file-icon">
                  <i class="fa fa-upload"></i>
                </span>
                <span class="file-label">
                  Upload new
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="column is-6" >
        <div class="notification is-warning" v-if='error'>
          {{error}}
        </div>
      </div>
    </div>
  </div>
</template>
