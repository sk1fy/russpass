<script>
import InspirationItem from '@/components/global/inspiration/InspirationItem.vue'
export default {
  components: { InspirationItem },
  data() {
    return {
      inspirations: [
        { name: 'Пешком по Москве', image: '/src/assets/img/ellipse_17.png' },
        { name: 'Мосты Санкт-Петербурга', image: '/src/assets/img/ellipse_18.png' },
        { name: 'Разносторонний Сочи', image: '/src/assets/img/ellipse_19.png' },
        { name: 'Удивительная Казань', image: '/src/assets/img/ellipse_20.png' }
      ]
    }
  },
}
</script>
<template>
  <div class="inspiration-block">
    <h2 class="inspiration-block__title d-flex">Вдохновение для путешествия</h2>
    <div class="inspiration-block__travels d-flex">
      <InspirationItem
        v-for="(item, index) in inspirations"
        :key="index"
        :name=item.name
        :imgSrc=item.image
        />
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
    @media (max-width: 568px)
      justify-content: center
      gap: 1.5rem
    &__item
      justify-content: center
      &__pic
        border: 1px solid #000000
        max-width: 215px
        border-radius: 50%
        padding: 7px
        margin: auto
        & .pic-image
          width: 100%
          height: 100%
          min-height: 185px
          // background-image: url('/src/assets/img/ellipse_17.png')
          border-radius: 50%
          display: inline-block
          background-position: center
          background-size: cover
      &__title
        font-weight: 400
        font-size: 24px
        line-height: 150%
        color: #000000
</style>