<template>
<div class="field">
  <label class="label">{{label}}</label>
  <div class="control">
    <div class="select">
      <select :id="id">
        <option v-for="(option,index) in options" :key="index">{{option}}</option>
      </select>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: {
        options: Array,
        label: String,
        id: String,
    }

}
</script>

<style>

</style>