<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="home-wrapper">
    <h1>Sign In or Sign Up in system!</h1>
    <RouterLink class="sign-in-link" to="/sign-in">
      Sign In
    </RouterLink>
  </div>
</template>

<style scoped>
  .home-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home-wrapper h1 {
    padding-bottom: 45px;
    letter-spacing: 1px;
  }

  .sign-in-link {
    width: 125px;
    background-color: #0000CD;
    padding: 15px;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 7px;
    cursor: pointer;
    text-align: center;
  }
</style>