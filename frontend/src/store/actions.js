import { GROUP_ID } from '../config/env';

export const actions = {
    logIn({state , commit}){
        FB.login((res) =>{
            console.log(res);
            if(res.status == "connected"){
                state.user.id = res.authResponse.userID;
                state.user.accessToken = res.authResponse.accessToken;

                console.log("user:%s\ntoken:%s" , state.user.id , state.user.accessToken);
                
    
                FB.api(`/${state.user.id}/picture?redirect=0&width=100&height=100` , (res) =>{
                    document.getElementById("userimg").src = res.data.url;
                });

                FB.api(`/${GROUP_ID}/feed`,'GET', (res) =>{
                    if(res && !res.error){
                        res['data'].forEach((data) =>{
                            console.log(data);
                            commit('UPDATE_DATA' , data);
                            commit('IS_LOADING_DATA' , false);
                        });
                    }
                });
            }
      },{scope:'public_profile, email, groups_access_member_info'});
    },
    logOut({state}){
        console.log(state.user.accessToken);

        try{
            if(FB.getAccessToken() != null) {
                FB.logout(function(res) {
                    console.log("User is logged out");
                    console.log("logout info: " , res);
                });
            }else{
                console.log("User is not logged in");
            }
        }catch(err){
            console.log(err);
        }
    }
}