<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="logIn()">Log In</button>
  </div>
</template>

<script>
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
          }
        },{scope:'public_profile, email'});
      }
    }
  }
</script>

