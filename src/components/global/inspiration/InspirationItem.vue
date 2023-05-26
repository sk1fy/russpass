<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  name: String,
  imgSrc: String
})

const imgLink = computed(() => props.imgSrc)
</script>
<template>
  <router-link to="#">
    <div class="inspiration-block__travels__item ">
      <div class="inspiration-block__travels__item__pic d-flex">
        <div class="pic-image" :style="{'background-image':`url(${imgLink})`}"></div>
      </div>
      <div class="inspiration-block__travels__item__title">{{ props.name }}</div>
    </div>
  </router-link>
</template>
