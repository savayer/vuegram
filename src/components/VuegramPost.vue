<template>
  <div class="vuegram-post">
    <div class="header level">
        <div class="level-left">
          <figure class="image is-32x32">
            <img :src="post.userImage" />
          </figure>
          <span class="username">{{ post.username }}</span>
        </div>
    </div>
    <div class="image-container"
      :class="post.filter"
      :style="{ backgroundImage: 'url(' + post.postImage + ')' }">
    </div>
    <div class="content">
      <div class="heart">
        <i :class="likePostClass" @click="likePost"></i>
      </div>
      <p class="likes">{{ post.likes }} likes</p>
      <p class="caption"><span>{{ post.username }}</span> {{ post.caption }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VuegramPost',
    props: {
        post: Object
    },
    computed: {
        likePostClass() {
            return this.post.hasBeenLiked ? 'far fa-heart fa-lg fas' : 'far fa-heart fa-lg'
        }
    },
    methods: {
        likePost() {
            if (this.post.hasBeenLiked) {
                this.post.hasBeenLiked = false;
                this.post.likes--;
            } else {
                this.post.hasBeenLiked = true;
                this.post.likes++;
            }
            
        }
    }
  }
</script>

<style lang="scss" src="../styles/vuegram-post.scss">

</style>
