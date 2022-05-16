import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    news:[],
    jobs:[],
    ask:[],
  },
  getters:{
    fetchedNews(state){
      return state.news;
    }
  },
 mutations,
  // 데이터호출은 엑션즈에서
  actions,
});