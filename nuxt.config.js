export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'nuxt-nested-routes',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    pageTransition: 'slide-bottom',

    loading: {
        color: '#00cd81',
        height: '2px',
        duration: 1000,
        throttle: 0
    },

    router: {
        linkActiveClass: 'active-menu',
        linkExactActiveClass: 'active-menu',
        linkPrefetchedClass: null,
    },


    css: [
        '~/assets/css/bootstrap.css'
    ],

    plugins: [],

    components: true,

    buildModules: [],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        'nuxt-i18n',
    ],

    i18n: {
        defaultLocale: 'en',
        locales: [
            { name: 'English', code: 'en', iso: 'en-US', file: 'en.json' },
            { name: 'Türkçe', code: 'tr', iso: 'tr-TR', file: 'tr.json' },
        ],
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: require('./locales/en.json'),
                tr: require('./locales/tr.json'),
            },
            dateTimeFormats: {
                en: {
                    long: { year: 'numeric', month: 'long', day: 'numeric' },
                },
                tr: {
                    long: { year: 'numeric', month: 'long', day: 'numeric' },
                },
            },
        },
        pages: {
            'are-you-ready': {
                en: '/are-you-ready',
                tr: '/hazir-misin',
            },
        }
    },

    axios: {},

    build: {}
}