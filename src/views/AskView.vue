<template>
  <div>ask
    <div v-for="item in ask" v-bind:key="item.id">
      {{item.title}}
    </div>
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
