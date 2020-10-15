<template>
  <div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <router-link :to="location">terms and conditions</router-link>
    </label>
  </div>
</div>
</template>

<script>
export default {
    props:{ 
        location: String,
    }
}
</script>

<style>

</style>