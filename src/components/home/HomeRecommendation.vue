<script setup>
import { ref } from 'vue';

import HomeRecommendationItem from './HomeRecommendationItem.vue';

const recommendationItems = ref(
  [
    { title: 'Чтобы понять,какой отдых станет для тебя идеальным,пройди тест', btnName: 'Рекомендации по характеру' },
    { title: 'Пользуешься рекомендациями поисковых запросов? Тебе сюда', btnName: 'Рекомендации нейросети' },
    { title: 'Знаешь,куда хочешь поехать? Поможем спланировать новое путешествие в 2 клика', btnName: 'Спалнировать' }
  ]
)



</script>
<template>
  <div class="home-recommendation d-flex flex-row">
    <HomeRecommendationItem
      v-for="(item, index) in recommendationItems"
      :title=item.title
      :btn-name=item.btnName
      :id=index
    />
  </div>
</template>

<style lang="sass">
.home-recommendation
  gap: 1.25rem
  margin-top: 1.25rem
</style>