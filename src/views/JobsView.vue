<template>
  <div>
    jobs
    <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
      <a :href="job.url">{{job.title}}</a>
      <small> {{job.time_ago}},{{job.domain}} </small>
    </p>
  </div>

</template>
<script>


export default {
  data(){
    return{
    }
  },
  created(){
    this.$store.dispatch('FETCH_JOBS')
    //  fetchJobsList()
    // .then(response => this.jobs = response.data)
    // .catch(error => console.log(error));
  },


}
</script>
<style></style>