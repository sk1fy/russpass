<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue'

const value = ref(null)

const isReadonly = computed(() => {
  if(value.value) return isReadonly.value = true
  console.log(value.value);
})
</script>
<template>
  <div>
    BookFinish
    <div>
      <Button label="123" />
      <Rating  v-model="value" :cancel="false" :readonly="isReadonly"/>
    </div>
  </div>
</template>