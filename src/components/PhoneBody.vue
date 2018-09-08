<template>
    <div class="phone-body">
        <div class="feed">
            <vuegram-post 
              v-for="(post, index) in posts" 
              :key="index"
              :post="post"
              v-if="step === 1" />
            
              <div class="selected-image"
                   :style="{ backgroundImage: 'url(' + image + ')' }"></div>
              <div class="filter-container">
                <div class="filter-type"
                     v-for="(filter, indexFilter) in filters"
                     :key="indexFilter">
                  <p>{{ filter.name }}</p>
                  <div class="img" :class="filter.name"
                       :style="{ backgroundImage: 'url(' + image + ')' }">
                  </div>
                </div>
              </div>
            
            
        </div>
    </div>
</template>
<script>  
  import VuegramPost from './VuegramPost.vue'
  
  export default {
    name: 'PhoneBody',
    props: {
      posts: Array,
      filters: Array,
      step: Number,
      image: String,
      selectedFilter: String
    },
    components: {
      VuegramPost
    }
  }
</script>

<style lang="scss" src="../styles/phone-body.scss"></style>

