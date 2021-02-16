<template>
<div class="container">
    <div>
        <nuxt-link :to="localePath({name: 'index'})">
            <Logo />
        </nuxt-link>
        <h1 class="title">
            Nuxt {{ $t('nested') }}
        </h1>
        <div class="links pb-5">
            <nuxt-link :to="localePath({name: 'index-are-you-ready'})" class="btn btn-primary">
                {{ $t('check') }}
            </nuxt-link>
        </div>
        <nuxt-child></nuxt-child>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style>
</style>
