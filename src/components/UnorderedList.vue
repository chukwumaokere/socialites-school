<template>
  <div :class="'content has-text-left ' + size ">
        <h4> {{title}} </h4>
        <ul>
            <li v-for='(cont, index) in content' :key="index" >{{cont}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        content: Array,
        size: String,
    }

}
</script>

<style>

</style>