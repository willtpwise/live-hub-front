<style src='./user-picture.scss' lang='scss'></style>
<script src='./user-picture.js'></script>
<template>
  <figure class="user-picture">
    <img :src='src' :alt='alt' @error="setDefault">
  </figure>
</template>
