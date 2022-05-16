<template>
  <div>
    <div v-for="item in fetchedNews" v-bind:key="item.id">
      <a v-bind:href="item.url">
        {{item.title}}
      </a>
    <small>{{item.time_ago}}by {{item.user}}</small>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
//import {fetchNewsList} from '@/api/index.js';
export default {
  computed:{
    ...mapGetters({
      fetchedNews:'fetchedNews'
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // var vm =this;
    // fetchNewsList()
    // .then(function (response){
    //   console.log(response);
    //   vm.users = response.data;
    // })
    // .catch(function(error){
    //   console.log(error)
    // })
  },
}
</script>
<style></style>
