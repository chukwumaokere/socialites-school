<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/home">
      <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png" >
    </router-link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/home">Home</router-link>
    
      <router-link class="navbar-item" to="/">Documentation</router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/about">
            About
          </router-link>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <Buttons>
          <Button text="Sign up" theme="is-primary" />
          <Button text="Log in" theme="is-light" />
        </Buttons>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import Button from "@/components/Button";
import Buttons from "@/components/Buttons";
export default {
    components: {
        Button,
        Buttons,
    }
}
</script>

<style>
a.router-link-exact-active {
  color: #42b983;
}
</style>