<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="sign-in-wrapper">
    <h2>Sign In</h2>
    <div class="input-wrapper">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Email" />
    </div>
    <div class="input-wrapper">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Password" />
    </div>
    <button type="button">Sign In</button>
    <div class="sign-up-tip">
      <span>Don't have an account? </span>
      <RouterLink to="/sign-up">Sign Up!</RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .sign-in-wrapper {
    margin: 100px auto;
    height: 450px;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #DCDCDC;
    border-radius: 7px;
    background-color: #F5F5F5;
  }

  .sign-in-wrapper h2 {
    padding-bottom: 40px;
    letter-spacing: 1px;
  }

  .input-wrapper {
    padding-bottom: 15px;
  }

  .input-wrapper label {
    display: block;
    font-weight: 600;
    padding-bottom: 5px;
  }

  .input-wrapper input {
    width: 250px;
    padding: 10px 5px 10px;
    font-size: 18px;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
  }

  .input-wrapper input:focus {
    border: 1px solid #0000CD;
  }

  .sign-in-wrapper button {
    width: 100px;
    background-color: #0000CD;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 7px;
    cursor: pointer;
    text-align: center;
    margin: 10px;
  }

  .sign-up-tip {
    margin-top: 10px;
  }
</style>