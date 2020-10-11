<template>
<Navbar />
<Container>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</Container>
</template>

<script>
import Navbar from "@/components/Navbar";
import Container from "@/components/Container"
export default {
  components: {
    Navbar,
    Container,
  }
}
</script>

<style scoped>

</style>
