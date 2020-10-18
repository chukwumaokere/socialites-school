<template>
  <div class="field">
  <label class="label">{{label}}</label>
  <div class="control">
    <input :id="id" class="input" type="text" :placeholder="placeholder">
  </div>
</div>
</template>

<script>
export default {
    props: {
        label: String,
        placeholder: String,
        id: String,
    }

}
</script>

<style>

</style>