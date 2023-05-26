<script setup>
import { useRoute } from 'vue-router';

import MyTravelHeader from '../components/global/my-travel-header/MyTravelHeader.vue';

const route = useRoute()
const cartId = parseInt(route.params.id)
</script>
<template>
  <div>
    <MyTravelHeader />
    {{ cartId }}
    <router-view></router-view>
  </div>
</template>