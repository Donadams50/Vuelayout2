import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
 import VuexPersist from 'vuex-persist'

Vue.use(Vuex);
Vue.use(VueAxios, axios)
const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  reducer: state => state,
})

export default new Vuex.Store({
  
  
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
