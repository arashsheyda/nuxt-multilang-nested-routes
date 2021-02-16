export const state = () => ({
    status: false,
});

export const getters = {

};

export const mutations = {
    openModal(state) {
        console.log(state);
        state.status = true;
    },
    closeModal(state) {
        state.status = false;
    },
};

// export const actions = {
//     async modal({ commit }, status) {
//         await commit('editMode', status);
//         if (status) {
//             commit('openModal');
//         } else {
//             commit('closeModal');
//         }
//     }
// };