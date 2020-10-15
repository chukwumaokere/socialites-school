<template>
  <div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a :href="location">terms and conditions</a>
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