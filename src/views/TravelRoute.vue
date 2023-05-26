<script setup>
import Inspiration from '../components/global/inspiration/Inspiration.vue';
import FilterBlock from '../components/global/filter-block/FilterBlock.vue';
import TravelTypeBlock from '../components/global/travel-type-block/TravelTypeBlock.vue';

const city = 'Нижний Новгород'

</script>
<template>
  <div class="travel-route-view d-flex flex-column">
    <div class="d-flex flex-column">
      <h2 class="title">Моё путешествие - {{ city }}</h2>
      <span>Изменить маршрут</span>
    </div>
    <div>
      <FilterBlock />
    </div>
    <div class="travel-type d-flex flex-column space-between">
      <TravelTypeBlock :city-name="city"/>
    </div>
    <div>
      <Inspiration />
    </div>
  </div>
</template>

<style lang="sass">
.travel-route-view
  & .title
    font-weight: 400
    font-size: 3rem
    line-height: 150%
    margin: 0
</style>

