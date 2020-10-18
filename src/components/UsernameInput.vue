<template>
  <div class="field">
  <label class="label">{{label}}</label>
  <div class="control has-icons-left has-icons-right">
    <input :id="id" class="input is-success" type="text" :placeholder="placeholder">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
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