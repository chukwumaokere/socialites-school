<template>
  <section :class="heroVal + size + ' ' + color">
      <Navbar v-if="withNavBar" />
        <div :class="heroBody">
            <div :class="'container ' + textorientation">
                <h1 class="title">{{title}}</h1>
                <slot></slot>
            </div>
        </div>
        <div v-if="footerContent" class="hero-foot">
            <div class="container has-text-centered">
                <slot name="footer"></slot>
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
    components: {
        Navbar,
    },
    props: {
        title: String,
        size: String,
        color: String,
        textorientation: String,
        hero: Boolean,
        withNavBar: Boolean,
        footerContent: Boolean,
    },
    setup(props){
        let heroVal = props.hero ? 'hero ' : '';
        let heroBody = props.hero ? 'hero-body' : '';
        return {
            heroVal,
            heroBody,
        }
    }
}
</script>

<style>

</style>