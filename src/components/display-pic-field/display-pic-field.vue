<style src='./display-pic-field.scss' lang='scss'></style>
<script src='./display-pic-field.js'></script>
<template>
  <div class="display-pic-field">
    <p class="label">
      Profile picture
    </p>
    <div class="display-pic-field-form">
      <div class="display-pic-field-preview">
        <figure>
          <img :src="src" alt="User profile picture" class="image" @error="setDefault">
        </figure>
      </div>
      <div class="display-pic-field-input">
        <div class="field">
          <div class="file is-primary">
            <label class="file-label" aria-label='Upload your profile picture'>
              <input
                class="file-input"
                type="file"
                name="profile-picture"
                @change="upload"
                v-validate="'mimes:image/jpeg,image/png,image/jpg,image/gif'"
                accept="image/jpeg,image/png,image/jpg,image/gif"
                aria-describedby="description-display-pic">
              <span class="file-cta" aria-hidden='true'>
                <span class="file-icon">
                  <i aria-hidden="true" class="fa fa-upload"></i>
                </span>
                <span class="file-label">
                  Upload new
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <p class="help" id="description-display-pic">
      Your profile picture is public
    </p>
    <div aria-live='polite' class="notification is-warning" v-if='error'>
      {{error}}
    </div>
  </div>
</template>
