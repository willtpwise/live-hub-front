<style src='./icon.scss' lang='scss'></style>
<script src='./icon.js'></script>
<template>
  <span class="icon">
    <i v-if="classname" class="fa" :class="classname" aria-hidden="true"></i>
    <img v-if="src" :src="src">
  </span>
</template>
