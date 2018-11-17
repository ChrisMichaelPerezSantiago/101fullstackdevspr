export const getters = {
    filterByMessage: (state) => { 
        return state.userdata.filter((data) => data.message);
    },
    filterByStory: (state) => {
        return state.userdata.filter((data) => data.story);
    }
}