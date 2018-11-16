export const getters = {
    filterByJobs: (state) => { 
        return state.userdata.filter((data) => data.message);
    }
}