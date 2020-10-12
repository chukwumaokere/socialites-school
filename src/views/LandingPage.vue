<template>
    <Section 
        hero 
        withNavBar 
        size="is-fullheight" 
        title="Learn modern, cutting-edge front-end technologies from self-taught experts with our one-on-one lessons, premium tutorials and video courses." 
        color="is-primary"
        >
        <br />
        <h2 class="subtitle">
            Join and get started now:
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
    </Section>
    <Section hero size="is-medium" textorientation="has-text-centered" color="is-light" title="Some of our awesome courses" >
    
    </Section>
    <Section hero size="is-medium" textorientation="has-text-centered" color="" title="Flexible payment plans to fit your need">
    
    </Section>
    <Section hero size="is-medium" textorientation="has-text-centered" color="is-dark" title="Testimonies">
    
    </Section>

</template>

<script>
//import Container from "@/components/Container";
//import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Section from '@/components/Section'

export default {
    components: {
        //Container,
        //Navbar,
        Button,
        Section
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