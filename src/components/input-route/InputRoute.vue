<script setup>
import { onMounted, ref, inject, watch } from "vue"

import { CityService } from '@/services/CityService'


const value = ref("")
const cities = ref([])
const selectedCity = ref()
const filteredCities = ref()
const provideCities = inject('cities')

onMounted(() => {
    CityService.getCities().then((data) => (cities.value = data))
});

const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCities.value = [...cities.value]
        } else {
            filteredCities.value = cities.value.filter((city) => {
                return city.name.toLowerCase().startsWith(event.query.toLowerCase())
            });
        }
    }, 550);
}

watch(selectedCity, (newSelectedCity) => {
  if(typeof newSelectedCity === 'object') {
    provideCities.push(newSelectedCity)
  }
  console.log(newSelectedCity);
})
</script>
<template>
  <div class="route-allocation d-flex flex-column">
    <div class="d-flex" v-if="null">
        <InputText class="route-allocation-input flex-1" type="text" v-model="value" placeholder="Пункт отправления" />
    </div>
    <div class="d-flex">
      <AutoComplete class="route-allocation-input flex-1" v-model="selectedCity" :suggestions="filteredCities" optionLabel="name" @complete="search" placeholder="Пункт отправления"/>
    </div>
    <span class="route-allocation-addroute">Добавить точку машрута +</span>
    <span>{{ provideCities }}</span>
  </div>
</template>

<style lang="sass">
.route-allocation
  &-input
    max-width: 25rem
    & input
      width: 100%
    &::placeholder
      color: var(--default-color)
  &-addroute
    margin-top: .5rem

</style>