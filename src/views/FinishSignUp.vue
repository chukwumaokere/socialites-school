<template>
<Container>
    <Section hero withNavBar theme="">
    <!--
    <p>
      <o-field grouped group-multiline>
        <div class="control">
          <o-switch v-model="showSocial"> Show Social step </o-switch>
        </div>
        <div class="control">
          <o-switch v-model="isAnimated"> Animated </o-switch>
        </div>
        <div class="control">
          <o-switch v-model="isRounded"> Rounded </o-switch>
        </div>
        <div class="control">
          <o-switch v-model="isStepsClickable"> Clickable Marker </o-switch>
        </div>
      </o-field>
      <o-field grouped group-multiline>
        <div class="control">
          <o-switch v-model="hasNavigation"> Navigation Buttons </o-switch>
        </div>
        <div class="control">
          <o-switch v-model="customNavigation"> Custom Navigation </o-switch>
        </div>
        <div class="control">
          <o-switch v-model="isProfileSuccess"> Set <code>success</code> for profile </o-switch>
        </div>
      </o-field>
      <o-field v-if="hasNavigation" grouped group-multiline>
        <o-field label="Prev icon">
          <o-select v-model="prevIcon">
            <option value="chevron-left">Chevron</option>
            <option value="arrow-left">Arrow</option>
          </o-select>
        </o-field>
        <o-field label="Next icon">
          <o-select v-model="nextIcon">
            <option value="chevron-right">Chevron</option>
            <option value="arrow-right">Arrow</option>
          </o-select>
        </o-field>
        <o-field label="Label position">
          <o-select v-model="labelPosition">
            <option value="bottom">Bottom</option>
            <option value="right">Right</option>
            <option value="left">Left</option>
          </o-select>
        </o-field>
        <o-field label="Mobile mode">
          <o-select v-model="mobileMode">
            <option :value="null">-</option>
            <option value="minimalist">Minimalist</option>
            <option value="compact">Compact</option>
          </o-select>
        </o-field>
      </o-field>
    </p>
    -->
    <o-steps
      v-model="activeStep"
      :animated="isAnimated"
      :rounded="isRounded"
      :has-navigation="hasNavigation"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      :label-position="labelPosition"
      :mobile-mode="mobileMode"
      variant="info"
      iconPack="fas"
    >
      <o-step-item step="1" label="Account" :clickable="isStepsClickable">
        <h1 class="title has-text-centered">Account</h1>
        <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" name="username" id="username" type="text" placeholder="Username" autofocus data-validate="require">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icon has-icon-right">
              <input class="input" type="password" name="password" id="password" placeholder="Password" data-validate="require">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Confirm password</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icon has-icon-right">
              <input class="input" type="password" name="password_confirm" id="password_confirm" placeholder="Confirm password" data-validate="require">
            </div>
          </div>
        </div>
      </div>
      </o-step-item>

      <o-step-item step="2" label="Profile" :clickable="isStepsClickable" :variant="{'success': isProfileSuccess}">
        <h1 class="title has-text-centered">Profile</h1>
        <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Firstname</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" name="firstname" id="firstname" type="text" placeholder="Firstname" autofocus data-validate="require">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Last name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icon has-icon-right">
              <input class="input" type="text" name="lastname" id="lastname" placeholder="Last name" data-validate="require">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Email</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icon has-icon-right">
              <input class="input" type="email" name="email" id="email" placeholder="Email" data-validate="require">
            </div>
          </div>
        </div>
      </div>
      </o-step-item>

      <o-step-item step="3" :visible="showSocial" label="Social" :clickable="isStepsClickable">
        <h1 class="title has-text-centered">Social</h1>
        Lorem ipsum dolor sit amet.
      </o-step-item>

      <o-step-item :step="showSocial ? '4' : '3'" label="Finish" :clickable="isStepsClickable" disabled>
        <h1 class="title has-text-centered">Finish</h1>
        <h1 class="title has-text-centered is-4">Your account is now created!</h1>
      </o-step-item>

      <template v-if="customNavigation" v-slot:navigation="{previous,next}">
        <o-button outlined variant="danger" icon-pack="fas" icon-left="backward" :disabled="previous.disabled" @click.prevent="previous.action">
          Previous
        </o-button>
        <o-button outlined variant="success" icon-pack="fas" icon-right="forward" :disabled="next.disabled" @click.prevent="next.action">
          Next
        </o-button>
      </template>
    </o-steps>
  </Section>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import Section from "@/components/Section";

  export default {
    components: {
        Container,
        Section
    },
    data() {
      return {
        activeStep: 0,

        showSocial: false,
        isAnimated: true,
        isRounded: true,
        isStepsClickable: false,

        hasNavigation: true,
        customNavigation: false,
        isProfileSuccess: false,

        prevIcon: 'chevron-left',
        nextIcon: 'chevron-right',
        labelPosition: 'bottom',
        mobileMode: 'compact'
      }
    }
  }
</script>
<style scoped>
</style>