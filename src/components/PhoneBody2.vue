<template>
    <div class="phone-body">
      <div class="selected-image"
            :class="getFilter"
            :style="{ backgroundImage: 'url(' + getImage + ')' }">
      </div>
      <div class="caption-container">
        <input class="input"
          :class="{ 'is-danger': this.value.length < 3 }"
          placeholder="Type your name..."
          type="text"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>        
    </div>
</template>
<script>
export default {
  name: "PhoneBody2",
  props: {
    step: Number,
    value: String
  },
  computed: {
    getFilter() {
      return this.$store.getters.getFilter;
    },  
    getImage() {
      return this.$store.getters.getImage;
    }
  }
};
</script>

<style lang="scss" src="../styles/phone-body.scss"></style>

