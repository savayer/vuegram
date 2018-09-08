<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="./images/vue_gram_logo_cp.png" />
      </div>
      <phone-body />
      <div class="phone-footer">
        <div class="home-cta">
        <i class="fas fa-home fa-lg"></i>
       </div>
       <div class="upload-cta">
        <i class="far fa-plus-square fa-lg"></i>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PhoneBody from "./components/PhoneBody.vue";

  export default {
    name: "app",
    components: {
      PhoneBody
    }
  };
</script>

<style lang="scss" src="./styles/app.scss"></style>
