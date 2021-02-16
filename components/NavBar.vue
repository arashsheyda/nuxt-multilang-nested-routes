<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <nuxt-link style="color: #fff!important" v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="navbar-brand">
        {{ locale.name }}
    </nuxt-link>
    <div class=" navbar-collapse">
        <ul class="navbar-nav">
            <li class="nav-item">
                <nuxt-link class="nav-link" :to="localePath({name: 'index'})">Home</nuxt-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
        },
    }
}
</script>

<style>
</style>
