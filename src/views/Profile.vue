<script setup>
import { useRoute, useRouter } from 'vue-router';
import Inspiration from '../components/global/inspiration/Inspiration.vue';
import { computed } from 'vue';

const router = useRouter()
const route = useRoute()


const isTrip = computed(() => {
  if(route.path.includes('trip')) {
    return true
  } else {
    return false
  }
})
</script>
<template>
  <div class="profile-view d-flex flex-column">
    <div v-if="!isTrip">
      <div class="profile d-flex flex-column" >
        <div class="profile-logo">
          <img src="@/assets/img/ooui_user-avatar-outline1.png" alt="profile">
        </div>
        <div class="profile-name">
          Ольга Дренова
        </div>
        <div class="profile-email">
          leolia_lile@mail.ru
        </div>
      </div>
      <div class="profile-menu">
        <div class="profile-menu__item d-flex space-between align-center" @click="router.push('profile/trips')">
          <div class="d-flex flex-column">
            <p>Мои путешествия</p>
            <span>Все программы путешествий</span>
          </div>
          <img src="@/assets/img/polygon3.png" alt="arrow">
        </div>
      </div>
    </div>
    <router-view else></router-view>
    <Inspiration />
  </div>
</template>

<style lang="sass">
.profile
  justify-content: center
  align-items: center
  &-name
    font-size: 2rem
    line-height: 150%
  &-email
    font-size: 1.3rem
    line-height: 150%
  &-menu
    background: #F8E9DC
    border: 1px solid #000000
    border-radius: 2rem
    padding: .5rem 2rem
    max-width: 34rem
    margin: 1rem auto
    &__item
      border-bottom: 1px solid #B3B3B3
      padding-right: 1.5rem
      cursor: pointer
      & p
        margin: 0 0 .5rem 0
      & div span
        font-size: .8rem
        color: #858D97
      & img
        height: fit-content
        margin-left: 11.5rem
</style>