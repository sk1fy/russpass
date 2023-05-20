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
    <img src="../assets/img/traveling_back_to_home.png" alt="traveling_back_to_home" style="align-self: center;">
    <Inspiration />
  </div>
</template>