<style src='./subscribe.scss' lang='scss'></style>
<script src='./subscribe.js'></script>
<template>
  <div class='subscribe' aria-describedby="subscribe-title">
    <div id="mc_embed_signup">
      <form
        action="//livehub.us16.list-manage.com/subscribe/post?u=fe1eb401ca26e7146d20dece6&id=d68f500313"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        @submit="onSubmit($event)">
        <div id="mc_embed_signup_scroll">
          <h3 class="title is-3" id="subscribe-title">Subscribe</h3>
          <div class="field">
            <label class="label is-medium sr-only">First name</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-medium"
                type="text"
                name="FNAME"
                id="mce-FNAME"
                v-validate="'required'"
                v-model="first_name"
                required="true"
                placeholder="First name">
              <span class="icon is-small is-left">
                <i class="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label is-medium sr-only">Email address</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-medium"
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                v-validate="'required|email'"
                v-model="email"
                required="true"
                placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fe1eb401ca26e7146d20dece6_d68f500313" tabindex="-1" value=""></div>
          <div class="clear has-text-right">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button is-primary">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
