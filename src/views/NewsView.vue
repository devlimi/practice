<template>
  <div>
    <div v-for="user in fetchedNews" v-bind:key="user.id">
      {{user.title}}
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
