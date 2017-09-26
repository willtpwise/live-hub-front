<style src='./stars.scss' lang='scss'></style>
<script src='./stars.js'></script>
<template>
  <div class="stars" :aria-label='label' :title='label'>
    <span class="icon is-small" v-for='n in strength' aria-hidden='true'>
      <i class="fa fa-star"></i>
    </span>
  </div>
</template>
