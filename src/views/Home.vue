<template>
  <Navbar />
  <Container> 
    <div>
      Home
    </div>
  </Container>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
export default {
  name: 'Home',
  components: {
    Navbar,
    Container
  }
}
</script>

<style scoped>

</style>
