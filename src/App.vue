<script setup lang="ts">
import BodyView from './components/body/BodyView.vue';
import FooterView from './components/footer/FooterView.vue';
</script>

<template>
  <div class="relative flex flex-col">
    <BodyView/>
    <FooterView/>
  </div>
  <Toast/>
</template>

<style scoped>
</style>
