<style src='./users.scss' lang='scss'></style>
<script src='./users.js'></script>
<template>
  <div>
    <section class="section user-feed">
      <user-card v-for='user in users' :user='user'></user-card>
    </section>
  </div>
</template>
