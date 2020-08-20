<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="./images/vue_gram_logo_cp.png" />
        <div v-if="step !== 1" class="cancel-cta" @click="goToHome">Cancel</div>
        <div v-if="step === 2 || step === 3" class="next-cta" @click="step++">Next</div>
        <div v-if="step === 4" class="next-cta" @click="sharePost">Share</div>
      </div>
      <phone-body1 
        v-if="step !== 4"
        :posts="posts"
        :filters="filters" 
        :step="step" 
        :image="image"
        :selectedFilter="selectedFilter"
        v-model="caption"  
      />
      <phone-body2
        v-if="step == 4"
        :step="step"
        :image="image"
        :selectedFilter="selectedFilter"
        v-model="username"
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
  import PhoneBody1 from "./components/PhoneBody1.vue";
  import PhoneBody2 from "./components/PhoneBody2.vue";
  import EventBus from "./event-bus.js";

 // import posts from './data/posts'
  import axios from 'axios'
  import filters from './data/filters'

  export default {
    name: "app",
    data() {
      return {
        posts: [],
        filters,
        step: 1,
        selectedFilter: '',
        image: '',
        caption: '',
        username: '',
        errors: []
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
        if (this.username.length < 3) {
          return;
        }
        const post = {
          username: this.username,
          userImage: `${process.env.VUE_APP_API_URL}/img/logo_anonim.png`,
          postImage: this.image,
          likes: 0,
          hasBeenLiked: +false,
          caption: this.caption,
          filter: this.selectedFilter ? this.selectedFilter : 'normal'
        };
                
        this.posts.unshift(post);
        this.goToHome();

        let form_data = new FormData();
        for ( let key in post ) {
            form_data.append(key, post[key]);
        }
        axios.post(`${process.env.VUE_APP_API_URL}/post/index.php`, form_data)        
          .catch(e => { this.errors.push(e) })
        
      }
    },
    mounted() {
      axios
        .get(process.env.VUE_APP_API_URL)
        .then(response => (this.posts = response.data));
    },
    components: {
      PhoneBody1,
      PhoneBody2
    },
  };
</script>

<style lang="scss" src="./styles/app.scss"></style>
