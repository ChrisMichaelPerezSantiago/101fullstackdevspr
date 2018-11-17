<template>
  <div>
    <div class="container">
	    <div class="navbar">
		    <i :to="{name: 'home'}" class="fas fa-home"></i>
		    <i class="fas fa-comment-alt"></i>
		    <i @click="logIn" class="fas fa-sign-in-alt"></i>
        <i @click="logOut" class="fas fa-sign-out-alt"></i>
        <i><img id="userimg" src="../assets/user.png" alt=""></i>
	    </div>
    </div>
    <br>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12" >
        1
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
        2
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
        3
      </vs-col>
    </vs-row>

  </div>
</template>

<script>
  import { mapState , mapActions , mapGetters} from 'vuex';
  
  export default {
    name: 'home',
    data(){
      return{
      }
    },
    computed: {
      ...mapState(['userdata' , 'loading']),
      ...mapGetters({
          messages: 'filterByMessage',
          stories: 'filterByStory'
      })
    },

    methods:{
      ...mapActions(['logIn' , 'logOut']),
    },
  }
</script>

<style scoped>
  #userimg{
    border-radius: 50%;
    height: 25px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar {
    width: 240px;
    height: 60px;
    background: rgba(255,255,255,.9);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 5px 20px rgba(90,90,90,.1);
    transition: .2s all;
  }
  .navbar:before {
    content: '';
    position: absolute;
    width: 240px;
    height: 60px;
    background: #F0F0F0;
    top: -60px;
    z-index: 3;
  }
  .navbar:hover {
    box-shadow: 0 5px 20px rgba(90,90,90,.2);
    transform: translateY(-1px);
  }
  .fas {
    font-size: 20px;
    position: relative;
    color: rgba(0,0,0,.2);
    transition: .2s all;
    cursor: pointer;
  }
  .fas:hover {
    color: rgba(0,0,0,.3);
  }
  .fas:active {
    color: rgba(0,0,0,.9);
    transform: translateY(5px) scale(.9);
  }
  .fa-home:active:after{
    transform: translate(0px, 0px) scale(1);
    top: -23px;
    left: -5px;
    color: black;
    transition: .2s .1s all;
  }
  .comment-alt:active:after{
    transform: translate(0px, 0px) scale(1);
    top: -23px;
    left: -25px;
    color: black;
    transition: .2s .1s all;
  }
  .fa-sign-in-alt:active:after{
    transform: translate(0px, 0px) scale(1);
    top: -23px;
    left: -18px;
    color: black;
    transition: .2s .1s all;
  }
  * {
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;/* Likely future */
  }
</style>



