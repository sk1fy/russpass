<script setup>
const props = defineProps({
  title: String,
  id: Number
})

const imageUrl = `/src/assets/icons/arrow_${props.id}.svg`
</script>
<template>
  <div class="home-recommendation__item d-flex flex-column">
    <div class="home-recommendation__item__title">{{ title }}</div>
    <img
      :src=imageUrl
      alt="arrow"
      style="max-width: 150px;align-self: center;transform: rotate(12deg);" />
    <Button label="Рекомендации по характеру" />
  </div>
</template>

<style lang="sass">
.home-recommendation__item
  border: 1px solid #000000
  border-radius: 30px
  padding: 1.5rem 1rem
  justify-content: space-between
  &__title
    font-size: 2rem
    line-height: 150%
  & .p-button
    font-size: 1.5rem
    margin-top: 1.5rem
</style>