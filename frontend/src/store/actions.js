import { GROUP_ID } from '../config/env';

export const actions = {
    logIn({state , commit}){
        FB.login((res) =>{
            console.log(res);
            if(res.status == "connected"){
                state.user.id = res.authResponse.userID;
                state.user.accessToken = res.authResponse.accessToken;

                console.log("user:%s\ntoken:%s" , state.user.user , state.user.accessToken);
                
                FB.api(`/${GROUP_ID}/feed`,'GET', (res) =>{
                    if(res && !res.error){
                        res['data'].forEach((data) =>{
                            console.log("api connection => " , data);
                            commit('UPDATE_DATA' , data);
                            commit('IS_LOADING_DATA' , false);
                        });
                    }
                });
            }
      },{scope:'public_profile, email, groups_access_member_info'});
    }
}