<template>
    <div class="phone-body">
        <div v-if="step === 1" class="feed" v-dragscroll.y>
            <!-- <vuegram-post v-for="(post, index) in posts" :key="index" :post="post" /> -->
            <vuegram-posts
              :posts="posts"
            />
        </div>
        <div v-if="step === 2">
          <div class="selected-image"
               :class="getFilter"
               :style="{ backgroundImage: 'url(' + getImage + ')' }">
          </div>
          <div class="filter-container" v-dragscroll.x>
            <filter-type
              v-for="(filter, indexFilter) in filters"
              :key="indexFilter"
              :filter="filter"
            />
          </div>
        </div>
        <div v-if="step === 3">
          <div class="selected-image"
               :class="getFilter"
               :style="{ backgroundImage: 'url(' + getImage + ')' }">
          </div>
          <div class="caption-container">
            <textarea class="caption-input"
              placeholder="Write a caption..."
              type="text"
              :value="value"
              @input="$emit('input', $event.target.value)" >
            </textarea>
          </div>
        </div>
    </div>
</template>
<script>
//import VuegramPost from "./VuegramPost.vue"
import VuegramPosts from "./VuegramPosts.vue"
import FilterType from './FilterType.vue'

export default {
  name: "PhoneBody",
  props: {
    posts: Array,
    step: Number, 
    value: String
  },
  computed: {
    getFilter() {    
      return this.$store.getters.getFilter
    },
    filters() {
      return this.$store.getters.getFiltersArray
    },
    getImage() {
      return this.$store.getters.getImage
    }
  },
  components: {
    VuegramPosts,
    FilterType
  }
};
</script>

<style lang="scss" src="../styles/phone-body.scss"></style>

