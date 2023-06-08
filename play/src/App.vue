<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
// import { Button } from "@yuntulib/components";
// import { Input } from "@yuntulib/components";
</script>

<template>
  <main>
    <ljf-button type="primary">按 钮</ljf-button>
    <!-- <ljf-input></ljf-input> -->
    <!-- <LJFButton type="primary">测试按钮1</LJFButton> -->
    <!-- <Input /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
