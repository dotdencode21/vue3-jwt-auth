<script setup>
  import SignInForm from "../components/SignInForm.vue";
  import { reactive } from "vue";
  import { signIn } from "../services/AuthService";

  const state = reactive({
    email: "",
    password: ""
  });

  const handleSignIn = async () => {
    try {
      await signIn(state);
    } catch (e) {
      console.log(`Error occured: ${e}`);
    }
  }
</script>

<template>
  <SignInForm @sign-in="handleSignIn" :state="state" />
</template>
