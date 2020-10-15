<template>

<NameInput :label="nameLabel" :placeholder="namePlaceholder" />

<UsernameInput :label="usernameLabel" :placeholder="usernamePlaceholder" />

<EmailInput :label="emailLabel" :placeholder="emailPlaceholder" />

<Select :label="selectLabel" :options="select" />

<TextareaInput :label="textareaLabel" :placeholder="textareaPlaceholder" />

<TAC v-if="tacLocation" :location="tacLocation" />
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
    <Button :text="submitButton" :theme="submitButtonTheme" />
    <!--<button class="button is-link">Submit</button>-->
  </div>
  <div v-if="cancelButton" class="control">
      <Button :text="cancelButton" :theme="cancelButtonTheme" />
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
    }

}
</script>

<style>

</style>