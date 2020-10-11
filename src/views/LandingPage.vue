<template>
    <section class="hero is-primary is-fullheight">
        <Navbar />
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                   Learn modern, cutting-edge front-end technologies from self-taught experts with our one-on-one lessons, premium tutorials and video courses.
                </h1>
                <br />
                <h2 class="subtitle">
                    Join and get started now!
                </h2>
                <div class="field has-addons" style="width: 70%">
                    <div class="control has-icons-left is-expanded ">
                        <input type="email" class="input is-large" placeholder="Email address"> 
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                    <div class="control">
                        <Button class="is-large" text="Start Learning" theme="is-success" />
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <section class="hero is-light is-medium">
        <div class="hero-body">
            <div class="container">
                Test
            </div>
        </div>
    </section>
    <section class="hero is-medium">
        <div class="hero-body">
            <div class="container">
                Test
            </div>
        </div>
    </section>
</template>

<script>
//import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

export default {
    components: {
        //Container,
        Navbar,
        Button,
    }
}
</script>

<style>
.hero.is-primary .navbar-dropdown > a.navbar-item {
    color: #4a4a4a;
}
.hero.is-primary .modal-card-body > label  {
    color: #4a4a4a;
}
</style>