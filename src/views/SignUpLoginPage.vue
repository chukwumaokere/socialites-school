<template>
  <Navbar />
  <Container>
    Signup or something
  </Container>
</template>

<script>
import Navbar from "@/components/Navbar"
import Container from "@/components/Container";
import Router from '@/router';
export default {
    components: {
        Navbar,
        Container
    },
    setup(){
       let params = Router.currentRoute.value.params;
       return {
           params
       }
    }
}
</script>

<style>

</style>