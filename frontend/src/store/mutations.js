export const mutations = {
    UPDATE_DATA(state , payload){
        state.data = payload;
    },
    IS_LOADING_DATA(state, payload){
        state.loading = payload;
    }
}