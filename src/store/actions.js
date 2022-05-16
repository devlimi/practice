import {fetchAskList, fetchJobsList, fetchNewsList} from "@/api";

export default{
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
