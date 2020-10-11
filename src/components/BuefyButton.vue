<template>
    <b-button @click="clickMe">Click Me</b-button>
</template>

<script>
    export default {
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    }
</script>