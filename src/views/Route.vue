<script>
import Inspiration from '../components/global/inspiration/Inspiration.vue'
import InputRoute from '../components/input-route/InputRoute.vue'

export default {
    components: { Inspiration, InputRoute },
    data() {
      return {
        cities: []
      }
    },
    provide() {
      // use function syntax so that we can access `this`
      return {
        cities: this.cities
      }
    },
}
</script>
<template>
  <div class="route-view d-flex flex-column">
    <div class="route-view-main d-flex space-between">
      <div class="d-flex flex-column flex-1">
        <h2 class="title">Маршрут</h2>
        <InputRoute />
        <div>{{ cities }}</div>
        <div class="route-view-nav d-flex space-between">
          <router-link to="/">
            <Button class="primary" label="Назад" />
          </router-link>
          <router-link to="/travel_route">
            <Button class="secondary" label="Программа путешествия" />
          </router-link>
        </div>
      </div>
      <div class="d-flex flex-column flex-1 align-center">
        <div class="map">
          <img src="@/assets/img/image365.png" alt="map" @click="check">
        </div>
        <div class="btns d-flex flex-column align-center">
          <Button class="primary pulse" label="Рекомендации нейросети" />
          <Button class="primary pulse" label="Рекомендации по характеру" />
        </div>
      </div>
    </div>
    <Inspiration />
  </div>
</template>

<style lang="sass">
.route-view
  &-main
    @media (max-width: 900px)
      flex-direction: column
      gap: 2rem
  & .title
    font-weight: 400
    font-size: 3rem
    line-height: 150%
    margin: 0
  & .map
    margin-bottom: 5rem
  & .btns
    gap: 1.5rem
  &-nav
    margin-top: auto
    @media (max-width: 900px)
      flex-direction: column-reverse
      align-items: center
      gap: 1rem
      margin-top: 2rem

</style>
