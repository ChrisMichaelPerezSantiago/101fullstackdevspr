<template>
  <div class="home">
    <h1>Home</h1>
    <button @click.prevent="logIn()">Log In</button>
    
    <div v-if="loading">
      loading...
    </div>
    <div v-else v-for="info in data" :key="info.id">
      <h1>info</h1>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  
  export default {
    name: 'home',
    computed: mapState(['data' , 'loading']),
    data(){
      return{
      }
    },
    methods:{
      ...mapActions(['logIn'])
      //logIn(){
      //  FB.login(function(response){
      //    console.log(response);
      //    if(response.status == "connected"){
      //      this.user = response.authResponse.userID;
      //      this.accessToken = response.authResponse.accessToken;
      //      
      //      FB.api(`/${GROUP_ID}/feed`,'GET', function(reponse){
      //        if(reponse  && !reponse.error){
      //          console.log("api connection => " , reponse);
      //        }
      //      })
      //    }
      //  },{scope:'public_profile, email, groups_access_member_info'});
      //}
    }
  }
</script>

