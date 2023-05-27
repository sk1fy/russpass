<script setup>
import { provide, ref } from 'vue'
import AppHeader from './components/header/AppHeader.vue'
import { useRoute } from 'vue-router';

const route = useRoute()

  const theme = ref(null);
  function setPinkTheme() {
    const body = document.body
    theme.value = 'pink'
    body.dataset.theme = theme.value
  }
  function setBlueTheme() {
    var body = document.body
    theme.value = 'blue'
    body.dataset.theme = theme.value
  }

  provide('mainTheme', {
    theme,
    setPinkTheme,
    setBlueTheme
  })
</script>

<template>
  <AppHeader />
  <main>
    <div class="container">
      <component :is="route.meta.layout || 'div'">
          <router-view />
      </component>
    </div>
  </main>
</template>

<style lang="sass">
// @import "./assets/styles.sass"
</style>



