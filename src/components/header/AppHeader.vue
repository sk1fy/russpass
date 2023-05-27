<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()
</script>
<template>
  <div class="app-header-wrapper">
    <header class="app-header container d-flex align-center">
      <div class="app-header__logo">
        <router-link to="/">
          <img src="@/assets/img/russpass_logo.png" alt="russpass_logo" />
        </router-link>
      </div>
      <div class="app-header__items d-flex">
        <div class="app-header__items__search">
          <img src="@/assets/img/component_70.png" alt="">
        </div>
        <div class="app-header__items__block d-flex align-center">
          <div class="app-header__items__block__favorite" >
            <img src="@/assets/img/mdi_cards-heart-outline.png" alt="outline-heart">
          </div>
          <div class="app-header__items__block__user" @click="router.push('/profile')">
            <img src="@/assets/img/ooui_user-avatar-outline.png" alt="outline-profile">
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="sass">
.app-header-wrapper
  border-bottom: 2px solid #000000
  margin-bottom: 1.25rem
.app-header
  justify-content: space-between
  padding: 1rem 0
  &__items__search
    @media (max-width: 900px)
      display: none
  &__items__block
    gap: .7rem
  &__items__block__user
    cursor: pointer
</style>