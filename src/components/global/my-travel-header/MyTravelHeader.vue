<script setup>
import { ref, computed } from 'vue';

const ratingValue = ref(null)
const isReadonly = computed(() => {
  if(ratingValue.value) return isReadonly.value = true
})
</script>
<template>
  <div class="my-travel-header d-flex space-between">
    <div>
      <h2>Моё путешествие - Нижний Новгород</h2>
      <Rating v-model="ratingValue" :cancel="false" :disabled="isReadonly" />
    </div>
    <div class="my-travel-utilities d-flex">
      <!-- <span>1</span>
      <span>2</span>
      <span>3</span> -->
    </div>
  </div>
  <div class="my-travel-date d-flex">
    01.08.2023 - 05.08.2023
  </div>
</template>

<style lang="sass" scoped>
.my-travel-header
  & div
    margin-bottom: .5rem
  & .p-rating-item svg
    color: #FFCF08!important
h2
  margin: 0
</style>