<template>
  <div>ask
    <p v-for="item in ask" v-bind:key="item.id">
      <a :href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>

</template>
<script>
import {mapState} from 'vuex';
export default {
  data() {
    return{
      //ask:[]
    }
  },
  computed:{
    ...mapState({
      ask:state=> state.ask
    })
  },
  created(){
    this.$store.dispatch('FETCH_ASK')
      //  var vm =this;
      //  fetchAskList()
      // .then(function (response){
      //    console.log(response);
      //  vm.ask = response.data;
      //  })
      //  .catch(function(error){
      //    console.log(error)
      //  })
  },
}
</script>
<style></style>
