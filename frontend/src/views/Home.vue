<template>
  <div class="home">
    <v-card height="200px" flat dark app>
      <div class="headline text-xs-center pa-5">
        Active: {{ bottomNav }}
      </div>
      <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
        <v-btn color="teal" flat value="messages">
          <span>Messages</span>
          <v-icon>chat</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="notifications">
          <span>Notifications</span>
          <v-icon>notifications</v-icon>
        </v-btn>

        <v-btn color="red" @click.prevent="logIn()" flat value="logIn">
          <span>LogIn</span>
          <v-icon>whatshot</v-icon>
        </v-btn>

        <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
         <v-btn icon large flat slot="activator">
           <v-avatar size="30px">
             <img src="../assets/logo.png" alt="user-logo"/>
           </v-avatar>
         </v-btn>
         <v-list class="pa-0">
           <v-list-tile @click.prevent= "logOut()">
              <v-icon>fullscreen_exit</v-icon>
             <v-list-tile-content>
               <v-list-tile-title>Logout</v-list-tile-title>
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
      }
    },
    methods:{
      ...mapActions(['logIn' , 'logOut']),
    },
  }
</script>
