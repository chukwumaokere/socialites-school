<template>
  <div :class="'content has-text-left ' + size ">
        <h4 :class="titleColor"> {{title}} </h4>
        <ul>
            <li v-for='(cont, index) in content' :key="index" ><router-link :class="linkColor" :to="cont[1]">{{cont[0]}}</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        content: Array,
        size: String,
        titleColor: String,
        linkColor: String,
    }

}
</script>

<style>

</style>