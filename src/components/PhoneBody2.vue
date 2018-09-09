<template>
    <div class="phone-body">
      <div class="selected-image"
            :class="selectedFilter"
            :style="{ backgroundImage: 'url(' + image + ')' }">
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
    image: String,
    selectedFilter: String,
    value: String
  }
};
</script>

<style lang="scss" src="../styles/phone-body.scss"></style>

