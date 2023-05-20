<script setup>
import { onMounted, inject } from 'vue';


const { setPinkTheme } = inject('mainTheme')
onMounted(() => {
  setPinkTheme()
});
</script>

<template>
  <div class="default-layout">
    <slot />
  </div>
</template>