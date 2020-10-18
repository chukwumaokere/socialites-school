<template>
  <router-view/>
</template>

<script>
import 'bulma-extensions/dist/js/bulma-extensions.min.js';
export default {
  watch: {
    '$route' (to){
      document.title = to.meta.title || "Socialite's School"
    },
  },
}
</script>

<style>
/*@import 'assets/bulma/css/bulma.min.css';*/
@import '~bulma-extensions/dist/css/bulma-extensions.min.css';
</style>
