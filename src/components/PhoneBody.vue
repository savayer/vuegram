<template>
    <div class="phone-body">
        <div class="feed">
            <vuegram-post v-for="(post, index) in posts" :post="post" :key="index"/>
        </div>
    </div>
</template>
<script>  
  import VuegramPost from './VuegramPost.vue'
  
  export default {
    name: 'PhoneBody',
    props: {
      posts: Array,
      filters: Array
    },
    components: {
      VuegramPost
    }
  }
</script>

<style lang="scss" src="../styles/phone-body.scss"></style>

