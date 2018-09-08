<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="./images/vue_gram_logo_cp.png" />
        <div v-if="step !== 1" class="cancel-cta" @click="goToHome">Cancel</div>
        <div v-if="step === 2" class="next-cta" @click="step++">Next</div>
        <div v-if="step === 3" class="next-cta" @click="sharePost">Share</div>
      </div>
      <phone-body 
        :posts="posts"
        :filters="filters" 
        :step="step" 
        :image="image"
        :selectedFilter="selectedFilter"
        v-model="caption"  
      />
      <div class="phone-footer">
        <div class="home-cta">
        <i class="fas fa-home fa-lg" @click="goToHome"></i>
       </div>
       <div class="upload-cta">
          <input type="file" id="file" class="inputfile" name="file"
                 @change="uploadImage" :disabled="step !== 1">
          <label for="file">
            <i class="far fa-plus-square fa-lg"></i>
          </label>          
       </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PhoneBody from "./components/PhoneBody.vue";
  import EventBus from "./event-bus.js";

  import posts from './data/posts'
  import filters from './data/filters'

  export default {
    name: "app",
    data() {
      return {
        posts,
        filters,
        step: 1,
        selectedFilter: '',
        image: '',
        caption: ''
      }
    },
    created() {
      EventBus.$on("filter-selected", evt => {
        this.selectedFilter = evt.filter;
      });
    },
    methods: {
      uploadImage(e) {
        const files = e.target.files;
        if (!files.length) return;

        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = e => {
          this.image = e.target.result;
          this.step = 2;
        };

        document.querySelector("#file").value = "";
      },
      goToHome() {
        this.image = '';
        this.selectedFilter = '';
        this.caption = '';
        this.step = 1;
      },
      sharePost() {
        const post = {
          username: 'anonim',
          userImage: 'https://igconf.ru/2017/img/logo_anonim.png',
          postImage: this.image,
          likes: 0,
          hasBeenLiked: false,
          caption: this.caption,
          filter: this.selectedFilter
        };
        this.posts.unshift(post);
        this.goToHome();
      }
    },
    components: {
      PhoneBody
    },
  };
</script>

<style lang="scss" src="./styles/app.scss"></style>
