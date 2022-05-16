import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList} from '@/api/index'
import {fetchJobsList} from '@/api/index.js';
import {fetchAskList} from '@/api/index.js';
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
  mutations:{
   SET_NEWS(state, news){
      state.news = news;
    },
    SET_JOBS(state,jobs){
     state.jobs= jobs;
    },
    SET_ASK(state,ask){
     state.ask=ask;
    }
  },
  // 데이터호출은 엑션즈에서
  actions:{
    FETCH_NEWS(context){
      fetchNewsList()
      .then(response=>{
        console.log(response.data)
        context.commit('SET_NEWS',response.data);

      })
      .catch(error =>{
        console.log(error);
      })
    },
    FETCH_JOBS(context){
      fetchJobsList()
      .then(response =>{
            context.commit('SET_JOBS',response.data);
            console.log(response.data)
      })
      .catch(error =>console.log(error))
    },
    FETCH_ASK({commit}){
      fetchAskList()
      .then(response =>{
        console.log(response.data)
        commit('SET_ASK',response.data);
      })
      .catch(error => console.log(error))
    }
  }
});