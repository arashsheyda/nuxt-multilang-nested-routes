<template>
<div class="p-3">
    <h1>{{ $t('hell') }}...</h1>
    <nuxt-link :to="localePath({name: 'index-are-you-ready-yes-posts'})" class="btn btn-primary">{{ $t('see') }}</nuxt-link>
    <nuxt-child></nuxt-child>
</div>
</template>

<script>
export default {
nuxtI18n: {
        paths: {
            en: '/are-you-ready/yes',
            tr: '/hazir-misin/evet',
        }
    },
}
</script>

<style>

</style>
