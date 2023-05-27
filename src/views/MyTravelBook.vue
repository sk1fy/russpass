<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch, computed } from 'vue'

import MyTravelHeader from '../components/global/my-travel-header/MyTravelHeader.vue'


const router = useRouter()
const route = useRoute()
const bookId = route.params.id

const categories = ref([
    {name: "Отель “Звезда” 03.08.2023 - 05.08.2023 ", key: "A"},
    {name: "Ресторан “Достоевский” 01.08.2023", key: "M"},
    {name: "Театр МОСТ 02.08.2023", key: "P"},
    {name: "Кафе “Нижний” 02.08.2023", key: "R"}
]);
const selectedCategories = ref([]);

const checkedAll = ref(false);

watch(checkedAll, (newX) => {
  // console.log(newX)
  if(checkedAll.value) {
    // checkedAll.value = [...categories.value.map(x => x.name)]
    selectedCategories.value = [...categories.value.map(x => x.name)]
  } else if (!checkedAll.value) {
    selectedCategories.value = []
  }
})

const isFinish = computed(() => {
  if(route.path.includes('finish')) {
    return true
  } else {
    return false
  }
})
</script>
<template>
  <div class="my-travel-book-view">
    <MyTravelHeader />
    <div v-if="!isFinish">
      <div>
        <ToggleButton v-model="checkedAll" onLabel="Убрать все" offLabel="Выбрать все"
            onIcon="pi pi-times" offIcon="pi pi-check" />
      </div>
      <div class="travel-book d-flex flex-column">
        <div v-for="category of categories" :key="category.key" class="travel-book__item d-flex align-center">
            <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
            <label :for="category.key">{{ category.name }}</label>
        </div>
      </div>
      <div class="travel-navs d-flex space-between">
        <div class="d-flex flex-column">
          <Button class="secondary" label="Назад" @click="router.back()" />
          <Button class="secondary" label="Забронировать" @click="router.push(`/book/${route.params.id}/finish`)" />
        </div>
        <div class="btns d-flex flex-column align-center">
          <Button class="primary pulse" label="Рекомендации нейросети" />
          <Button class="primary pulse" label="Рекомендации по характеру" />
        </div>
      </div>
    </div>
    <router-view else></router-view>
  </div>
</template>

<style lang="sass">
.my-travel-book-view
  & .p-togglebutton.p-button.p-highlight
    background: var(--secondary-color)
    border-color: var(--secondary-color)

.travel-book
  max-width: 600px
  margin: auto
  gap: 1rem
  &__item
    gap: 3rem
    & label
      background: #ffffff
      border: 1px solid #FF3C1F
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      border-radius: 1rem
      padding: .8rem 5rem
      width: 100%
      text-align: center
    & .p-checkbox .p-checkbox-box.p-highlight
      background: var(--secondary-color)
      border-color: var(--secondary-color)
    & .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover
      background: var(--secondary-color)
      border-color: var(--secondary-color)

.travel-navs
  margin-top: 6rem
  & div
    gap: 1.5rem
</style>