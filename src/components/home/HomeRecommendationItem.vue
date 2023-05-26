<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  title: String,
  id: Number,
  btnName: String,
})

const imageUrl = `/src/assets/icons/arrow_${props.id}.svg`
const arrowDes = computed(() => {
  switch(props.id) {
    case 0:
      return '346'
    case 1:
      return '12'
    case 2:
      return '310'
  }
})
</script>
<template>
  <div class="home-recommendation__item d-flex flex-column">
    <div class="home-recommendation__item__title">{{ title }}</div>
    <img
      :src=imageUrl
      alt="arrow"
      style="max-width: 150px;align-self: center;"
      :style="{'transform':`rotate(${arrowDes}deg)`}" />
    <router-link to="/route">
      <Button class="primary pulse" :label=props.btnName />
    </router-link>
  </div>
</template>

<style lang="sass">
.home-recommendation__item
  border: 1px solid #000000
  border-radius: 30px
  padding: 1.5rem 1rem
  justify-content: space-between
  align-items: center
  &__title
    font-size: 2rem
    line-height: 150%
  & .p-button
    font-size: 1.5rem
    // margin-top: 1.5rem
  & a
    margin-top: 1.2em
</style>