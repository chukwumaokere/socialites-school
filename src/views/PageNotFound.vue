<template>
  <Navbar />
  <section class="hero is-danger is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    404
                </h1>
                <h2 class="subtitle">
                    Page not found
                </h2>
                <BuefyButton />
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from "@/components/Navbar";
import BuefyButton from "@/components/BuefyButton";
//import Container from '@/components/Container'
export default {
    components: {
        Navbar,
  //      Container,
        BuefyButton,
    }
}
</script>

<style>

</style>