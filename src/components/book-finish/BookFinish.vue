<script setup>
// import { computed } from '@vue/reactivity';
// import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

// const value = ref(null)

// const isReadonly = computed(() => {
//   if(value.value) return isReadonly.value = true
//   console.log(value.value);
// })
</script>

<template>
  <div class="book-finish">
    <div class="book-finish-card">
      <h3>БРОНИРОВАНИЕ ПРОШЛО УСПЕШНО!</h3>
      <span>
        Забронированные объекты: Ресторан “Достоевский” ; Парк аттракционов.
      </span>
      <p>Подтверждение брони прикреплено к программе и высланы на электронную почту.</p>
      <h3>ВНИМАНИЕ!!!</h3>
      <p>Некоторые пункты программы требуют оплаты!</p>
      <!-- <Rating  v-model="value" :cancel="false" :readonly="isReadonly"/> -->
    </div>
  </div>
  <div class="btn-finish d-flex">
    <Button class="secondary" label="Оплатить в течении  00:20:00" />
  </div>
  <div class="travel-navs d-flex space-between">
    <div class="d-flex flex-column">
      <Button class="secondary" label="Назад" @click="router.back()" />
      <Button class="secondary" label="К программе" @click="router.push('/my_travel')" />
    </div>
    <div class="btns d-flex flex-column align-center">
      <Button class="primary pulse" label="Рекомендации нейросети" />
      <Button class="primary pulse" label="Рекомендации по характеру" />
    </div>
  </div>
</template>

<style lang="sass">
.book-finish
  background: #fff
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  border-radius: 1rem
  padding: 3.5rem 1.75rem
  margin: auto
  max-width: 53.75rem
  &-card
    text-align: center
  & h3
    font-size: 2.25rem
  & p
    font-size: 1.3rem
  & span
    font-size: 1.3rem

.btn-finish
  margin: 4rem auto 0
  justify-content: center
</style>