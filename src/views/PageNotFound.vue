<template>  
  <section class="hero is-danger is-bold is-fullheight">
    <Navbar />
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    404
                </h1>
                <h2 class="subtitle">
                    Page not found
                </h2>
                <p>
                    Think you're seeing this message in error? <br> Please <router-link class="has-text-link" to="/contact">let us know</router-link>
                </p>
                <!-- <BuefyButton /> -->
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from "@/components/Navbar";
//import BuefyButton from "@/components/BuefyButton";
//import Container from '@/components/Container'
export default {
    components: {
        Navbar,
  //      Container,
  //      BuefyButton,
    }
}
</script>

<style>
.hero.is-danger .navbar-dropdown > a.navbar-item {
    color: #4a4a4a;
}
.hero.is-danger .modal-card-body > label  {
    color: #4a4a4a;
}
</style>