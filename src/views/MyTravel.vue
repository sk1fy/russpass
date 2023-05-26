<script setup>
import { useRouter } from 'vue-router';
import EventCalendar from '../components/event-calendar/EventCalendar.vue';
import MyTravelHeader from '../components/global/my-travel-header/MyTravelHeader.vue';
import { uuid } from 'vue-uuid';

const router = useRouter()

const goBack = () => {
  router.push('/route')
}

const travelId = uuid.v1().substring(0,4)
</script>
<template>
  <div class="my-travel-view d-flex flex-column">
    <h4>Мои путешествия</h4>
    <MyTravelHeader />
    <div class="my-travel-back d-flex">
      <Button class="primary" label="Назад" @click="goBack()" />
    </div>
    <div>{{ travelId }}</div>
    <div>
      <EventCalendar />
    </div>
  </div>
</template>