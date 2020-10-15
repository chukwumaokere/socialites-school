<template>
  <div class="field">
  <label class="label">{{label}}</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" :placeholder="placeholder" >
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>
</template>

<script>
export default {
    props: {
        label: String,
        placeholder: String,
    }
}
</script>

<style>

</style>