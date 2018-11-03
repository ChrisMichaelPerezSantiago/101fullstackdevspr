import { GROUP_ID } from '../config/env';

export const actions = {
    logIn({state , commit}){
        FB.login(function(response){
            console.log(response);
            if(response.status == "connected"){
                state.user.user = response.authResponse.userID;
                state.user.accessToken = response.authResponse.accessToken;

                console.log("user:%s\ntoken:%s" , state.user.user , state.user.accessToken);
                
                FB.api(`/${GROUP_ID}/feed`,'GET', function(res){
                    if(res  && !res.error){
                        console.log("api connection => " , res.data);
                        commit('UPDATE_DATA' , res.data);
                        commit('IS_LOADING_DATA' , false);
                    }
                })
            }
      },{scope:'public_profile, email, groups_access_member_info'});
    }
}