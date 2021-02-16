<template>
<div>
    <h1>{{ $t('ready') }}?</h1>
    <nuxt-link :to="localePath({name: 'index-are-you-ready-no'})" class="btn btn-danger">{{ $t('no') }}</nuxt-link>
    <nuxt-link :to="localePath({name: 'index-are-you-ready-yes'})" class="btn btn-primary">{{ $t('yes') }}</nuxt-link>
    <nuxt-child></nuxt-child>
</div>
</template>

<script>
export default {
nuxtI18n: {
        paths: {
            en: '/are-you-ready',
            tr: '/hazir-misin',
        }
    },
}
</script>

<style>

</style>
