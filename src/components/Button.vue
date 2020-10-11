<template>
<a :class="'button ' + theme">
    <strong>{{text}}</strong>
</a>
</template>

<script>
export default {
    props: {
        theme: String,
        text: String
    }
}
</script>

<style>

</style>