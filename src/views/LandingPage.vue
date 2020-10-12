<template>
    <Section 
        hero 
        withNavBar 
        size="is-fullheight" 
        title="Learn modern, cutting-edge web development technologies from self-taught experts with our one-on-one lessons, premium tutorials and video courses." 
        color="is-primary is-bold"
        footerContent
        >
        <template v-slot:default>
            <br />
            <h2 class="subtitle">
                Join and get started now:
            </h2>
            <div class="field has-addons" style="width: 70%; min-width:21rem;">
                <div class="control has-icons-left is-expanded">
                    <input type="email" class="input is-large is-size-6-mobile" placeholder="Email address"> 
                    <span class="icon is-small is-left is-size-6-mobile">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
                <div class="control">
                    <Button class="is-large is-size-6-mobile" text="Start Learning" theme="is-success" />
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <Button class="is-large" text="Read more" theme="is-primary" icon="fas fa-arrow-down" @click="goTo('courses')" style="padding-bottom: 3rem; background-color: transparent;" />
        </template>
    </Section>
    <Section id="courses" hero size="is-medium" textorientation="has-text-centered" color="is-light" title="Some of our awesome courses" >
        <div class="columns">
            <UnorderedList class="column" title="Front-End Development:" :content="front_end_devlopment" />
            <UnorderedList class="column" title="Front-End Design:" :content="front_end_design" />
            <UnorderedList class="column" title="Mobile App Development:" :content="mobile_app_development" />
            <UnorderedList class="column" title="Back-End Development:" :content="back_end_development" />
        </div>
    </Section>
    <Section hero size="is-medium" textorientation="has-text-centered" color="is-success is-bold" title="Flexible payment plans to fit your need">
    
    </Section>
    <!--
    <Section hero size="is-medium" textorientation="has-text-centered" color="is-warning" title="Testimonies">
    
    </Section>
    -->
    <Section hero size="is-medium" textorientation="has-text-centered" color="is-warning" title="Meet your teachers">
    
    </Section>
    <Section hero size="is-medium" textorientation="has-text-centered" color="is-info" title="Ready to join?">
    
    </Section>
    <Section hero size="is-medium" textorientation="has-text-centered" color="is-dark">
        <div class="content has-text-centered">
            <p>
            <strong style="color: white">Socialites School</strong> by <a href="https://chukwumaokere.com">Chuck Okere</a>.
            </p>
        </div>
    </Section>
</template>

<script>
//import Container from "@/components/Container";
//import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Section from '@/components/Section'
import UnorderedList from "@/components/UnorderedList";

export default {
    components: {
        //Container,
        //Navbar,
        Button,
        Section,
        UnorderedList
    },
    setup(){
        let front_end_devlopment = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Vue 3', 'React', 'Svelte', 'Sails.js', 'Electron (for desktop)']
        let front_end_design = ['Modern Design Fundamentals', 'Responsive Design', 'Mobile First Approach', 'Bootstrap', 'TailwindCSS', 'Bulma', 'Semantic UI', 'Materialize', 'Adobe XD', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop']
        let mobile_app_development = ['Ionic Native', 'React-Native', 'Vue-Native', 'NativeScript', 'Expo']
        let back_end_development = ['GraphQL', 'MySQL', 'PHP', 'Node.js', 'Socket.io', 'Google Firebase', 'Building APIs']
        const goTo = (el) => {
            document.getElementById(el).scrollIntoView({behavior: "smooth"});
        }
        return {
            goTo,
            front_end_devlopment,
            front_end_design,
            mobile_app_development,
            back_end_development            
        }
    }
}
</script>

<style>
.hero.is-primary .navbar-dropdown > a.navbar-item, .hero.is-dark .navbar-dropdown > a.navbar-item {
    color: #4a4a4a;
}
.hero.is-primary .modal-card-body > label, .hero.is-dark .modal-card-body > label {
    color: #4a4a4a;
}
</style>