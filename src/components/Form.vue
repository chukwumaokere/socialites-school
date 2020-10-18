<template>

<NameInput id="form_name" :label="nameLabel" :placeholder="namePlaceholder" />

<UsernameInput id="form_username" :label="usernameLabel" :placeholder="usernamePlaceholder" />

<EmailInput id="form_email" :label="emailLabel" :placeholder="emailPlaceholder" />

<Select :id="selectId" :label="selectLabel" :options="select" />

<slot name="after-select" />

<TextareaInput id="form_textarea" :label="textareaLabel" :placeholder="textareaPlaceholder" />

<TAC id="form_tac" v-if="tacLocation" :location="tacLocation" />
<!--
<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question">
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question">
      No
    </label>
  </div>
</div>
-->

<div v-if="submitButton" class="field is-grouped">
  <div class="control">
    <Button :text="submitButton" :theme="submitButtonTheme" @click="submitForm" />
    <!--<button class="button is-link">Submit</button>-->
  </div>
  <div v-if="cancelButton" class="control">
      <Button :text="cancelButton" :theme="cancelButtonTheme"  />
    <!--<button class="button is-link is-light">Cancel</button>-->
  </div>
</div>
</template>

<script>
import NameInput from "@/components/NameInput";
import UsernameInput from "@/components/UsernameInput";
import EmailInput from "@/components/EmailInput";
import Select from '@/components/Select';
import TextareaInput from "@/components/TextareaInput";
import TAC from "@/components/TAC";
import Button from '@/components/Button';

export default {
    props: {
        nameLabel: String,
        namePlaceholder: String,
        usernameLabel: String,
        usernamePlaceholder: String,
        emailLabel: String,
        emailPlaceholder: String,
        select: Array,
        selectLabel: String,
        selectId: String,
        textareaLabel: String,
        textareaPlaceholder: String,
        submitButton: String,
        submitButtonTheme: String,
        cancelButton: String,
        cancelButtonTheme: String,
        tacLocation: String,
    },
    setup(){        
        return {
            Select,
            UsernameInput,
            EmailInput,
            NameInput,
            TextareaInput,
            TAC,
            Button
        }
    },
    methods: {
      submitForm() {
        this.$emit('submit-form')
      }
    }

}
</script>

<style>

</style>