<template>
  <div class="home">
    <v-card height="200px" flat dark>
      <div class="headline text-xs-center pa-5">
        Active: {{ bottomNav }}
      </div>
      <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
        <v-btn color="red" @click.prevent="logIn()" flat value="logIn">
          <span>LogIn</span>
          <v-icon>whatshot</v-icon>
        </v-btn>
        <v-btn color="teal" flat value="messages">
          <span>Messages</span>
          <v-icon>chat</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="notifications">
          <span>Notifications</span>
          <v-icon>notifications</v-icon>
        </v-btn>

        <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
         <v-btn icon large flat slot="activator">
           <v-avatar size="30px">
             <img src="../assets/logo.png" alt="user-logo"/>
           </v-avatar>
         </v-btn>
         <v-list class="pa-0">
           <v-list-tile v-for="(item,index) in items" :to="!item.href ? { name: item.name } : null" :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="index">
             <v-list-tile-action v-if="item.icon">
               <v-icon>{{ item.icon }}</v-icon>
             </v-list-tile-action>
             <v-list-tile-content>
               <v-list-tile-title>{{ item.title }}</v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>
         </v-list>
        </v-menu>
      </v-bottom-nav>
    </v-card>

  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  
  export default {
    name: 'home',
    computed: mapState(['data' , 'loading']),
    data(){
      return{
        bottomNav: 'LogIn',
        items: [
          {
            icon: 'account_circle',
            href: '#',
            title: 'Profile',
            click: (e) =>{
              console.log(e);
            }
          },
          {
            icon: 'settings',
            href: '#',
            title: 'Settings',
            click: (e) =>{
              console.log(e);
            } 
          },
          {
            icon: 'fullscreen_exit',
            href: '#',
            title: 'Logout',
            click: (e) =>{
              console.log(e);
            } 
          }
        ]
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
    },
  }
</script>