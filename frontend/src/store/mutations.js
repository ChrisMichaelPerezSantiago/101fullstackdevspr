import { UPDATE_DATA , IS_LOADING_DATA } from './constans/index';

export const mutations = {
    [UPDATE_DATA](state , payload){
        state.userdata = payload;
    },
    [IS_LOADING_DATA](state, payload){
        state.loading = payload;
    },
}