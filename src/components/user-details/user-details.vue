<style src='./user-details.scss' lang='scss'></style>
<script src='./user-details.js'></script>
<template>
  <div class="user-details" :aria-labelledby="titleId">
    <div v-if='detailsFiltered.length > 0'>
      <h3 v-if="heading" :id="titleId" class="title is-3">{{heading}}</h3>
      <ul class="list-unstyled">
        <li v-for='detail in detailsFiltered'>
          <div class="columns is-mobile">
            <div class="column is-6 user-details-type">
              <icon
                :search="detail.type"
                :default="defaultIcon"></icon>
              {{detail.type}}
            </div>
            <div class="column is-6 user-details-value">
              <stars
                v-if="displayType(detail.val) === 'ranking'"
                :strength="intval(detail.val)"></stars>
              <div
                v-else
                v-html="autoLink(detail.val)"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
