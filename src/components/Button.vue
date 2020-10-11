<template>
<a :class="'button ' + theme">
    <strong>{{text}}</strong>
    <span v-if="icon" class="icon is-small">
        <i :class="icon" aria-hiddne="true"></i>
    </span>
</a>
</template>

<script>
export default {
    props: {
        theme: String,
        text: String,
        icon: String,
    },
}
</script>

<style>

</style>