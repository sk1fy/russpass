<script setup></script>
<template>
  <div class="inspiration-block">
    <h2 class="inspiration-block__title">Вдохновение для путешествия</h2>
    <div class="inspiration-block__travels d-flex">
      <div class="inspiration-block__travels__item d-flex flex-column">
        <div class="inspiration-block__travels__item__pic">
          <img src="@/assets/img/ellipse_17.png" alt="moscow">
        </div>
        <div class="inspiration-block__travels__item__title">Пешком по Москве</div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.inspiration-block
  &__title
    font-weight: 400
    font-size: 2.25rem
    line-height: 150%
  &__travels
    justify-content: space-between
    &__item
      &__pic
        border: 1px solid #000000
        border-radius: 50em
        padding: .5rem .5rem .25rem
</style>