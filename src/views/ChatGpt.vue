<script setup>
const props = defineProps({
  default: String,
})
</script>

<template>
  <div>
    ChatGPT
    {{ default }}
  </div>
</template>