<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<template>
  <div class="profile-trips-view">
    <h2>Мои путешествия</h2>
    <div class="profile-trips-list">
      <div class="profile-trips__item d-flex space-between" v-for="(item, index) in 5" :key="index">
        <span @click="console.log('trip id')">Нижний Новгород - 01.08.2023 - 05.08.2023</span>
        <img src="@/assets/img/fontisto_trash.png" alt="trash" @click="console.log('delete item')">
      </div>
    </div>
    <div class="btns d-flex space-between">
      <Button class="primary" label="Назад" @click="router.back()" />
      <Button class="secondary" label="Спланировать новое путешествие" @click="router.push('/route')"/>
    </div>
  </div>
</template>

<style lang="sass">
.profile-trips-view
  & h2
    font-size: 3rem
    line-height: 150%
    font-weight: normal
  & .profile-trips-list
    position: relative
    margin-bottom: 5rem
  & .profile-trips__item
    max-width: 50%
    width: 100%
    margin-bottom: .5rem
    & span
      background: #FFFFFF
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      border-radius: 1rem
      text-align: center
      padding: .5rem 1rem
    & img
      cursor: pointer
</style>