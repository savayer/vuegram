<template>
  <div class="filter-type">
    <p>{{filter.name}}</p>
    <div class="img"
      :class="filter.name"
      :style="{ backgroundImage: 'url(' + getImage + ')' }"
      @click="selectFilter(filter.name)">
    </div> 
  </div>
</template>

<script>
export default {
  name: "FilterType",
  props: {
    filter: Object
  },
  computed: {
    getImage() {
      return this.$store.getters.getImage
    }
  },
  methods: {
    selectFilter(filter) {
      this.$store.dispatch('setFilter', filter);
    }
  }
};
</script>

<style lang="scss" src="../styles/filter-type.scss">
// Styles from stylesheet
</style>