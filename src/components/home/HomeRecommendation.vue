<script setup>
import { ref } from 'vue';

import HomeRecommendationItem from './HomeRecommendationItem.vue';

const recommendationItems = ref(
  [
    { title: 'Чтобы понять,какой отдых станет для тебя идеальным,пройди тест' },
    { title: 'Пользуешься рекомендациями поисковых запросов? Тебе сюда' },
    { title: 'Знаешь,куда хочешь поехать? Поможем спланировать новое путешествие в 2 клика' }
  ]
)



</script>
<template>
  <div class="home-recommendation d-flex flex-row">
    <HomeRecommendationItem
      v-for="(item, index) in recommendationItems"
      :title=item.title
      :id=index
    />
  </div>
</template>

<style lang="sass">
.home-recommendation
  gap: 1.25rem
</style>