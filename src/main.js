import Vue from 'vue'
import App from './App.vue'
import VueDragscroll from "vue-dragscroll";
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueDragscroll)

Vue.config.productionTip = false


const store = new Vuex.Store({
  state: {
    image: '',
    filter: 'normal',
    filters: [
      { name: "normal" },
      { name: "clarendon" },
      { name: "gingham" },
      { name: "moon" },
      { name: "lark" },
      { name: "reyes" },
      { name: "juno" },
      { name: "slumber" },
      { name: "aden" },
      { name: "perpetua" },
      { name: "mayfair" },
      { name: "rise" },
      { name: "hudson" },
      { name: "valencia" },
      { name: "xpro2" },
      { name: "willow" },
      { name: "lofi" },
      { name: "inkwell" },
      { name: "nashville" }
    ]
  },
  mutations: {
    SET_FILTER(state, payload) {
      state.filter = payload
    },
    SET_IMAGE(state, payload) {
      state.image = payload
    }
  },
  actions: {
    setFilter(context, filter) {
      context.commit('SET_FILTER', filter)
    },
    setImage(context, image) {
      context.commit('SET_IMAGE', image)
    }
  },
  getters: {
    getFilter(state) {
      return state.filter
    },
    getFiltersArray(state) {
      return state.filters
    },
    getImage(state) {
      return state.image
    }
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
