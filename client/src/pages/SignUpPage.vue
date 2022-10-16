<script setup>
  import SignUpForm from "../components/SignUpForm.vue";
  import { reactive } from "vue";
  import { signUp } from "../services/AuthService";

  const state = reactive({
    id: Math.round(Math.random() * 10000),
    name: "",
    surname: "",
    email: "",
    password: ""
  });

  const handleSignUp = async () => {
    try {
      await signUp(state);
    } catch (e) {
      console.log(`Error occured: ${e}`);
    }
  } 
</script>
  
<template>
  <SignUpForm @sign-up="handleSignUp" :state="state" />
</template>
  
