<script setup>
import { onMounted, inject } from 'vue';


const { setBlueTheme } = inject('mainTheme')
onMounted(() => {
  setBlueTheme()
});
</script>
<template>
  <div class="blue-layout">
    <slot />
  </div>
</template>