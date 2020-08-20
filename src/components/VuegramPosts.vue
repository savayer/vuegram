<template>
  <div class="vuegram-posts">
    <vuegram-posts-paginate
        v-for="(post, index) in partPaginatedData"
        :key="index"
        :post="post"
    />
    <div class="pagination-buttons">
        <button class="paginate_button_prev"
            :disabled="pageNumber === 0" 
            @click="prevPage">
            Prev
        </button>
        <button class="paginate_button_next"
            :disabled="pageNumber >= pageCount" 
            @click="nextPage">
            Next
        </button>
    </div>
  </div>
</template>

<script>
import VuegramPostsPaginate from "./VuegramPostsPaginate";

export default {
  name: "VuegramPost",
  props: {
    posts: Array
  },
  data() {
    return {
      pageNumber: 0,
      countShowedPosts: 2
    };
  },
  computed: {
    pageCount() {      
      return Math.ceil(this.posts.length / this.countShowedPosts)-1;
    },
    partPaginatedData() {      
      const start = this.pageNumber * this.countShowedPosts;
      const end = start + this.countShowedPosts;

      return this.posts.slice(start, end);
    }
  },
  methods: {
    scrollToTop() {
      console.log('top')
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    },
    nextPage() {
      this.pageNumber++;
      this.scrollToTop()
    },
    prevPage() {
      this.pageNumber--;
      this.scrollToTop()
    }
  },
  components: {
    VuegramPostsPaginate
  }
};
</script>

<style lang="scss" src="../styles/vuegram-post.scss">
</style>
