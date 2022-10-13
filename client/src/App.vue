<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
  .wrapper {
    height: 100vh;
    margin: 0 auto;
    max-width: 860px;
  }
</style>

