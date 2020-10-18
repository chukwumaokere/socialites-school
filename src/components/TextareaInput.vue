<template>
  <div class="field">
  <label class="label">{{label}}</label>
  <div class="control">
    <textarea :id="id" class="textarea" :placeholder="placeholder"></textarea>
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