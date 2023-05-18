<script setup>
</script>

<template>
  <main>
    <div class="container">
      <component :is="this.$route.meta.layout || 'div'">
          <router-view />
      </component>
    </div>
  </main>
</template>

<style lang="sass">
// @import "./assets/styles.sass"
</style>



