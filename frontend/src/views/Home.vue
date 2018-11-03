<template>
  <div class="home">
    <h1>Home</h1>
    <button @click.prevent="logIn()">Log In</button>
  </div>
</template>

<script>
  import { GROUP_ID } from '../config/env';

  export default {
    name: 'home',
    data(){
      return{
        user:{
          id: '',
          accessToken: ''
        }
      }
    },
    methods:{
      logIn(){
        FB.login(function(response){
          console.log(response);
          if(response.status == "connected"){
            this.user = response.authResponse.userID;
            this.accessToken = response.authResponse.accessToken;
            
            FB.api(`/${GROUP_ID}/feed`,'GET', function(reponse){
              if(reponse  && !reponse.error){
                console.log("api connection => " , reponse);
              }
            })
          }
        },{scope:'public_profile, email, groups_access_member_info'});
      }
    }
  }
</script>

