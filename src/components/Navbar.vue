<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/home">
      <!-- <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png" >-->
      <p>{soc} [ial] (ites) . &lt;io/&gt; </p>
    </router-link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/home">Home</router-link>
      <router-link class="navbar-item" to="/courses">Courses</router-link>
      <router-link class="navbar-item" to="/plans">Plans</router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/about">
            About Us
          </router-link>
          <router-link to="/contact" class="navbar-item">
            Contact Us
          </router-link>
          <router-link to="/" class="navbar-item"> 
            Landing Page
          </router-link>
          <hr class="navbar-divider">
          <router-link to="/jobs" class="navbar-item">
            Jobs
          </router-link>
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
            <div :class="'dropdown is-right ' + isactive" >
                <div class="dropdown-trigger" >                    
                    <Button text="Log in" theme="is-light" icon="fas fa-angle-down" aria-haspopup="true" aria-controls="dropdown-menu"  @click="toggle_active" />
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <form>
                            <div class="modal-card" style="width:300px;">
                                <section class="modal-card-body">
                                    <div class="field">
                                        <div class="control has-icons-left">
                                            <input class="input" type="email" placeholder="Email">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control has-icons-left">
                                            <input class="input" type="password" placeholder="Password">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-lock"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <label class="checkbox">
                                        <input type="checkbox">
                                        Remember me
                                    </label>
                                </section>
                                <footer class="modal-card-foot">
                                    <Button text="Login" @click="login" theme="is-primary" />
                                </footer>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Buttons>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import Button from "@/components/Button";
import Buttons from "@/components/Buttons";
import { ref } from "vue";
//import Container from "@/components/Container"

export default {
    components: {
        Button,
        Buttons,
        //Container,
    },
    setup(){
        const login = () => {
          console.log('logging in');
        }
        let isactive = ref("");
        let toggle_active = () => {
            if (isactive.value == 'is-active'){
                isactive.value = '';
            }else{
                isactive.value = 'is-active';
            }
        }
        return { 
            isactive,
            toggle_active,
            login
        }
    }
}
</script>

<style scoped>
a.router-link-exact-active {
  color: #42b983;
}
.dropdown-content{
    padding: 0;
}
.dropdown-menu{
    transition: 3s;
}
</style>