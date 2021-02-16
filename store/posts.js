export const state = () => ({
    posts: [],
    post: {},
    loading: false,
});

export const getters = {

};

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    },
    setPost(state, post) {
        state.post = post;
    },
    setLoading(state, status) {
        state.loading = status;
    },
};

export const actions = {
    async getPosts({ commit }) {
        commit('setLoading', true);
        await this.$axios.get('https://api.nuxtjs.dev/posts')
            .then(res => {
                commit('setPosts', res.data);
                commit('setLoading', false);
            })
            .catch(error => {
                console.log(error);
                commit('setLoading', false);
            });
    },
    async getPost({ commit }, slug) {
        commit('setLoading', true);
        await this.$axios.get(`https://api.nuxtjs.dev/posts/${slug}`)
            .then(res => {
                console.log(res.data);
                commit('setPost', res.data);
                commit('setLoading', false);
            })
            .catch(error => {
                console.log(error);
                commit('setLoading', false);
            });
    },
};