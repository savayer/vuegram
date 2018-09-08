<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="./images/vue_gram_logo_cp.png" />
      </div>
      <phone-body 
        :posts="posts"
        :filtes="filters" />
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

  import posts from './data/posts'
  import filters from './data/filters'

  export default {
    name: "app",
    components: {
      PhoneBody
    },
    data() {
      return {
        posts,
        filters
      }
    }
  };
</script>

<style lang="scss" src="./styles/app.scss"></style>
