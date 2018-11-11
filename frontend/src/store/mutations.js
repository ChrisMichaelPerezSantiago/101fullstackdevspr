const UPDATE_DATA = 'UPDATE_DATA';
const IS_LOADING_DATA = 'IS_LOADING_DATA';

export const mutations = {
    [UPDATE_DATA](state , payload){
        state.data = payload;
    },
    [IS_LOADING_DATA](state, payload){
        state.loading = payload;
    },
}