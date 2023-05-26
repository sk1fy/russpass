<script setup>
import TravelTypeBlockItem from './TravelTypeBlockItem.vue';

const props = defineProps({
  cityName: String,
})

const travel_types = ['Транспорт', 'Отели', 'Развлечения', 'Рестораны']

</script>
<template>
  <div class="travel-type-block d-flex flex-column">
    <h3>{{ props.cityName }}</h3>
    <div class="travel-type-block__wrapper d-flex space-between">
      <div
        class="travel-type-block__card d-flex flex-column"
        v-for="(item, index) in travel_types" :key="index">
          <div class="travel-type-block__card__header">{{ item }}</div>
          <div class="travel-type-block__card__main d-flex flex-column">
            <TravelTypeBlockItem />
          </div>
        <span class="travel-type-block__card__add d-flex">+</span>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.travel-type-block
  margin-top: 3rem
  // & h3
  //   font-weight: normal
  &__wrapper
    gap: 1.5rem
  &__card
    border: 2px solid var(--secondary-color)
    border-radius: 1rem
    min-height: 21.25rem
    min-width: 18.5rem
    &__header
      padding: 1rem 5rem
      font-weight: 400
      font-size: 1.5rem
      line-height: 150%
      text-align: center
      background: #FFFFFF
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      border-radius: 1rem
    &__main
      padding-top: 2rem
    &__item
      background: #FFFFFF
      border: 1px solid #FF3C1F
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      border-radius: 1rem
      padding: .7rem
      justify-content: center
      position: relative
      margin-bottom: 1rem
      & .close-btn
        position: absolute
        top: 5px
        right: 5px
        cursor: pointer
    &__add
      font-size: 40px
      line-height: 150%
      text-align: center
      justify-content: center
      margin-top: auto
      cursor: pointer
</style>