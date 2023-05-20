<script setup>
</script>
<template>
    <header class="app-header container d-flex">
      <div class="app-header__logo">
        <router-link to="/">
          <img src="@/assets/img/russpass_logo.png" alt="russpass_logo" />
        </router-link>
      </div>
      <div class="app-header__items d-flex">
        <div class="app-header__items__search">
          search
        </div>
        <div class="app-header__items__block d-flex">
          <div class="app-header__items__block__favorite">1</div>
          <div class="app-header__items__block__user">2</div>
        </div>
      </div>
    </header>
</template>

<style lang="sass">
.app-header
  justify-content: space-between
</style>