<template>
<div v-if="modal">
    <div class="omodal">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <h1 v-if="loading">Laoding...</h1>
                <div v-else>
                    <div class="modal-header">
                        <h5 class="modal-title">{{ post.title }}</h5>
                        <button @click="closeModal" type="button" class="close" data-dismiss="modal" :title="$t('form.close')" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body pt-3">
                        <img :title="post.height" width="177" :src="post.image">
                    </div>
                    <div class="modal-footer">
                        <p>{{ post.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    nuxtI18n: {
        paths: {
            en: '/are-you-ready/yes/posts/:slug',
            tr: '/hazir-misin/evet/postlar/:slug',
        }
    },
    created() {
        this.$store.commit('modal/openModal');
    },
    asyncData({
        route,
        store
    }) {
        store.dispatch('posts/getPost', route.params.slug);
    },
    computed: {
        ...mapState({
            post: state => {
                return state.posts.post;
            },
            modal: state => {
                return state.modal.status;
            },
            loading: state => {
                return state.posts.loading;
            },
        })
    },
    methods: {
        closeModal() {
            this.$router.push(this.localePath({name: 'index-are-you-ready-yes-posts'}))
            this.$store.commit('modal/closeModal', false);
        },
    },
}
</script>

<style lang="scss">
.omodal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    overflow: auto;
    background-color: rgba($color: #000000, $alpha: 0.4);
}

.omodal .modal-header {
    background-color: #F8F8F8;
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.omodal .modal-header .close {
    padding: 0.2rem 0.62rem;
    box-shadow: 0 5px 20px 0 rgba(34, 41, 47, 0.1);
    border-radius: 0.357rem;
    background: #FFFFFF;
    opacity: 1;
    -webkit-transition: all 0.23s ease 0.1s;
    transition: all 0.23s ease 0.1s;
    position: relative;
    -webkit-transform: translate(8px, -2px);
    -ms-transform: translate(8px, -2px);
    transform: translate(8px, -2px);
}

.omodal .modal-header .close:hover,
.omodal .modal-header .close:focus,
.omodal .modal-header .close:active {
    opacity: 1;
    outline: none;
    -webkit-transform: translate(5px, 3px);
    -ms-transform: translate(5px, 3px);
    transform: translate(5px, 3px);
    box-shadow: none;
}

.omodal .modal-content {
    border: none;
    overflow: visible;
    box-shadow: 0px 7px 27px rgba($color: #161D31, $alpha: 0.3);
}

.omodal .modal-footer {
    padding: 0.8rem 1.4rem;
}

.modal.modal-sticky {
    bottom: 0;
    right: 0;
    top: auto;
    left: auto;
    height: auto;
    position: fixed;
}

.modal.modal-sticky .modal-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.modal.modal-sticky .modal-dialog {
    margin-right: 2rem !important;
    box-shadow: 0 0 24px 0 rgba(34, 41, 47, 0.25);
    border-radius: 0.357rem;
}

.modal.modal-sticky .modal-actions {
    background: transparent;
    box-shadow: none;
    line-height: 0;
}

.modal-xs {
    max-width: 300px;
}

.modal-xl {
    margin-left: 3%;
    margin-right: 3%;
}

.modal-slide-in,
.modal-slide-in .omodal {
    padding: 0 !important;
    overflow: hidden !important;
}

.modal-slide-in .modal-dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: auto;
    margin: 0;
    max-width: none;
    width: 20rem;
}

.modal-slide-in .modal-dialog .modal-content {
    padding-bottom: 3.7rem;
    padding-top: 3.7rem;
    overflow: auto;
    border-radius: 0;
    height: 100%;
}

.modal-slide-in .modal-dialog .modal-body {
    padding-bottom: 0;
    padding-top: 0;
    margin: auto 0;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
}

@media (min-width: 576px) {
    .modal-slide-in .modal-dialog {
        width: 28rem;
    }
}

.modal-slide-in .modal-dialog.sidebar-sm {
    width: 25rem;
}

@media (min-width: 576px) {
    .modal-slide-in .modal-dialog.sidebar-lg {
        width: 30rem;
    }
}

.modal-slide-in .close {
    top: 0.4rem;
    z-index: 10;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    position: absolute;
    top: 1.5rem;
    right: 1.4rem;
    margin: 0;
    padding: 0 !important;
    line-height: 0.5;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
}

.modal-slide-in.fade .modal-dialog,
.modal-slide-in .modal.fade .modal-dialog {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
    -webkit-transition: -webkit-transform 0.1s ease-out;
    transition: -webkit-transform 0.1s ease-out;
    transition: transform 0.1s ease-out;
    transition: transform 0.1s ease-out, -webkit-transform 0.1s ease-out;
}

.modal-slide-in.show .modal-dialog,
.modal-slide-in .modal.show .modal-dialog {
    -webkit-transform: translateX(0) !important;
    -ms-transform: translateX(0) !important;
    transform: translateX(0) !important;
    -webkit-transition: -webkit-transform 0.1s ease-out;
    transition: -webkit-transform 0.1s ease-out;
    transition: transform 0.1s ease-out;
    transition: transform 0.1s ease-out, -webkit-transform 0.1s ease-out;
}

@media (max-width: 576px) {
    .omodal {
        padding-right: 1rem;
        padding-left: 1rem;
    }

    .omodal .modal-xs,
    .omodal .modal-sm {
        max-width: unset;
    }

    .modal.modal-sticky .modal-dialog {
        margin-right: 0.2rem !important;
        margin-left: 0.2rem;
        margin-bottom: 3rem;
    }
}

.dark-layout .omodal .modal-header,
.dark-layout .omodal .modal-header[class*='bg-'] {
    background-color: #131313;
}

.dark-layout .omodal .modal-header .close {
    text-shadow: none;
    background-color: #1f1f1f !important;
    color: #B4B7BD;
    box-shadow: 0 3px 8px 0 rgba(11, 10, 25, 0.49) !important;
}

.dark-layout .omodal .modal-content,
.dark-layout .omodal .modal-body,
.dark-layout .omodal .modal-footer {
    background-color: #1f1f1f;
    border-color: #3B4253;
}
</style>
