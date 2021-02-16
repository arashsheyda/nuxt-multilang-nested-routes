<template>
<nuxt-link class="go-back" :to="localePath({name: path})">{{ $t('start_over') }}</nuxt-link>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.go-back {
    z-index: 1;
    position: fixed;
    top: 13vh;
    left: 5vh;
}
</style>
