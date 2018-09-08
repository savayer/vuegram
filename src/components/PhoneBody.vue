<template>
    <div class="phone-body">
        <div v-if="step === 1" class="feed" v-dragscroll.y>
            <vuegram-post 
              v-for="(post, index) in posts" 
              :key="index"
              :post="post"
            />
        </div>
        <div v-if="step === 2">
          <div class="selected-image"
               :class="selectedFilter"
               :style="{ backgroundImage: 'url(' + image + ')' }">
          </div>
          <div class="filter-container" v-dragscroll.x>
            <filter-type
              v-for="(filter, indexFilter) in filters"
              :key="indexFilter"
              :filter="filter"
              :image="image"
            />
          </div>
        </div>
        <div v-if="step === 3">
          <div class="selected-image"
               :class="selectedFilter"
               :style="{ backgroundImage: 'url(' + image + ')' }">
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
import VuegramPost from "./VuegramPost.vue"
import FilterType from './FilterType.vue'

export default {
  name: "PhoneBody",
  props: {
    posts: Array,
    filters: Array,
    step: Number,
    image: String,
    selectedFilter: String,
    value: String
  },
  components: {
    VuegramPost,
    FilterType
  }
};
</script>

<style lang="scss" src="../styles/phone-body.scss"></style>

