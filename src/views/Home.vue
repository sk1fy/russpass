<script>
import HomeRecommendation from '../components/home/HomeRecommendation.vue'
import Inspiration from '../components/global/inspiration/Inspiration.vue'

export default {
    components: { HomeRecommendation, Inspiration }
}
</script>
<template>
  <div class="home-view d-flex flex-column">
    <HomeRecommendation />
    <div class="traveling-to-home">
      <img src="../assets/img/traveling_back_to_home.png" alt="traveling_back_to_home" style="align-self: center;">
    </div>
    <Inspiration />
  </div>
</template>

<style lang="sass">
.traveling-to-home
  margin: 1.25rem auto 1.5rem
</style>