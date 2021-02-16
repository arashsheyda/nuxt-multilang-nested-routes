<template>
<div class="container pt-4">
    <GoBack path="index" />
    <div class="row">
        <h1 v-if="$fetchState.pending">fetching ...</h1>
         <div v-else @click="openModal" class="col-md-4 pb-3" v-for="post in posts" :key="post.id">
            <nuxt-link :to="localePath({name: 'index-are-you-ready-yes-posts-slug', params: {slug: post.slug}})">
                <div class="card">
                    <div class="container">
                        <h4><b>{{ post.title }}</b></h4>
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>
    <nuxt-child></nuxt-child>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    nuxtI18n: {
        paths: {
            en: '/are-you-ready/yes/posts',
            tr: '/hazir-misin/evet/postlar',
        }
    },
    async fetch() {
        await this.$store.dispatch('posts/getPosts')
    },
    computed: {
        ...mapState({
            posts: state => {
                return state.posts.posts;
            },
            modal: state => {
                return state.modal.status;
            },
        }),
    },
    methods: {
        openModal() {
            this.$store.commit('modal/openModal');
        }
    }
}
</script>

<style>
.row {
    display: flex;
}
</style>
