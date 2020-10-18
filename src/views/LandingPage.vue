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
        <br>
        <strong class="subtitle" style="font-weight: 600;">...And at the end we help you find jobs, remote, local, or contract during these tough times!</strong>
    </Section>
    <Section hero size="is-fullheight" textorientation="has-text-centered" color="is-success is-bold" title="Flexible payment plans to fit your need">
        <strong class="subtitle" style="font-weight: 600;">Cheaper than any other bootcamp which averages around $13,000 and can be as high as <a href="https://www.coursereport.com/blog/coding-bootcamp-cost-comparison-full-stack-immersives">$21,000 *</a></strong>
        <br><br><br>
        <div class="columns has-text-left">
            <PriceCard @set-type="updateType" class="column" subtitle="One and Done" subtitleDesc="For any 4-month course of your choosing" price="3,000" text="one time payment!" btnText="Choose" helper="* You save 40% by choosing this!" color="is-primary is-fullwidth" />
            <PriceCard @set-type="updateType" class="column" subtitle="Monthly" subtitleDesc="For any 4-month course of your choosing" price="1,000" text="/month" btnText="Choose" color="is-warning is-fullwidth" />
            <PriceCard @set-type="updateType" class="column is-active" subtitle="6-Month Plan" subtitleDesc="For any 4-month course of your choosing" price="200" text="/week" btnText="Choose" helper="" color="is-success is-fullwidth" />
            <PriceCard @set-type="updateType" class="column" subtitle="Super Saver" subtitleDesc="For any 4-month course of your choosing" price="100" text="/week" btnText="Choose" helper="* This is a one year payment plan" color="is-danger is-fullwidth" />
        </div>
        <br><br><br>
        <strong class="subtitle" style="font-weight: 600;">The course takes about 4 months to complete, but you can go at your own pace.</strong>
        <br>
        <strong class="subtitle" style="font-weight: 600;">BONUS: Every option comes with a one-week free trial of the lessons!</strong>
        <br><br>
        <p class="help">* This figure is as reported by <a href="https://www.coursereport.com/blog/coding-bootcamp-cost-comparison-full-stack-immersives">Course Reports Coding Bootcamp Cost Comparison</a>. Click to learn more</p>
    </Section>
    <!--
    <Section hero size="is-medium" textorientation="has-text-centered" color="is-warning" title="Testimonies">
    
    </Section>
    -->
    <!--
    <Section hero size="is-medium" textorientation="has-text-centered" color="is-warning" title="Meet your teachers">
    
    </Section>
    -->
    <Section id="join" hero size="is-medium" textorientation="has-text-centered" color="is-info" title="Ready to join?">
        <Container class="has-text-left box">
            <div class="columns">
                <div class="column">
                    <Form 
                    nameLabel="Name *"
                    namePlaceholder="Chuck Okere"
                    usernameLabel="Username *"
                    usernamePlaceholder="chuckokere"
                    emailLabel="Email *"
                    emailPlaceholder="chuckokere@socialites.app"
                    :select="options"
                    textareaLabel="Message"
                    textareaPlaceholder="Tell us a little about yourself, anything goes!"
                    selectLabel="Interested In:"
                    selectId="interested_in"
                    tacLocation="/tac"
                    submitButton="Submit"
                    submitButtonTheme="is-link"
                    cancelButton="Cancel"
                    cancelButtonTheme="is-link is-light"
                    @submit-form="submitForm"
                    >
                    <template v-slot:after-select>
                        <Select id="plan_type" label="Plan Type:" :options="plan_types" />
                    </template>
                    </Form>
                </div>
                <div style="margin: 1rem;" class="column box">
                    <div style="padding: 2rem;">
                        <h3 class="title" style="color: #4a4a4a;"> The Tech Schooling System for the Social Era  </h3> 
                        <br>
                        <h3 class="subtitle" style="color: #4a4a4a;"> We offer scholarships to people in need, women, veterans and minority groups. </h3>
                        <h3 class="subtitle" style="color: #4a4a4a;"> We also offer an additional 10% off on referrals and friends and family discounts!</h3>                        
                        <h3 class="subtitle" style="color: #4a4a4a;"> All students get access to our Discord where you can talk with other students and teachers to collaborate and learn together!</h3>
                        <p> We're here for you so please let us know what accommodations you might need and we'll definitely put those first </p>
                        
                    </div>
                </div>
            </div>
        </Container>
    </Section>
    <Section hero size="" textorientation="has-text-centered" color="is-dark">
        <FooterSection />
    </Section>
</template>

<script>
//import Container from "@/components/Container";
//import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Section from '@/components/Section'
import UnorderedList from "@/components/UnorderedList";
import PriceCard from "@/components/PriceCard"
import Form from "@/components/Form";
import Container from "@/components/Container";
import FooterSection from "@/components/FooterSection";
import Select from "@/components/Select";
import API from "@/lib/API";
//import Card from "@/components/Card";

export default {
    components: {
        Container,
        //Navbar,
        Button,
        Section,
        UnorderedList,
        PriceCard,
        Form,
        FooterSection,
        Select,
  //      Card,
    },
    setup(){
        let plan_types = ['One and Done', 'Monthly', '6-Month Plan', 'Super Saver'];
        let options = ['Front-End Development', 'Front-End Design', 'Mobile-App Development', 'Back-End Development', 'Full-Stack Development'];
        let front_end_devlopment = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Vue 3', 'React', 'Svelte', 'Sails.js', 'Electron (for desktop)']
        let front_end_design = ['Modern Design Fundamentals', 'Responsive Design', 'Mobile First Approach', 'Bootstrap', 'TailwindCSS', 'Bulma', 'Semantic UI', 'Materialize', 'Adobe XD', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop']
        let mobile_app_development = ['Ionic Native', 'React-Native', 'Vue-Native', 'NativeScript', 'Expo', 'Flutter', 'Framework 7']
        let back_end_development = ['GraphQL', 'MySQL', 'MongoDB', 'NoSQL', 'PHP', 'Node.js', 'Socket.io', 'Google Firebase', 'Building APIs', 'Linux (Server Management)', 'Bash', 'Version Management (Git/SVN)']
        const goTo = (el) => {
            document.getElementById(el).scrollIntoView({behavior: "smooth"});
        }
        return {
            goTo,
            front_end_devlopment,
            front_end_design,
            mobile_app_development,
            back_end_development,
            options,
            plan_types            
        }
    },
    methods: {
        updateType(type){
            document.getElementById('plan_type').value = type;
        },
        submitForm(){
            let info;
            info = {
                name: document.getElementById('form_name').value,
                username:  document.getElementById('form_username').value,
                email:  document.getElementById('form_email').value,
                interested_in: document.getElementById('interested_in').value,
                plan_type:  document.getElementById('plan_type').value,
            }
            let tac = document.getElementById('form_tac');
            if(tac.checked && !Object.values(info).some(v => (v == null || v == ''))){
                info.message = document.getElementById("form_textarea").value;
                //console.log(info,'it works and everythings filled');
                API.SubmitForm(info).then(res => {
                    if(res.success){
                        //morph form to success : Finish sign up by clicking the confirmation email you were just sent
                    }else{
                        //show some error
                    }
                })
            }else{
                //console.log('check for empty fields', tac.checked, info)
            }
            
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