<script setup>
import { reactive, ref } from 'vue'

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ruLocale from '@fullcalendar/core/locales/ru'

// const idValue = ref(1)
const options = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  locale: ruLocale,
  dateClick: (arg) => {
    checkGrid(arg)
  },
  events: [
    { title: 'event 1', date: '2023-05-26' },
    { title: 'event 2', date: '2023-05-27' },
    { title: 'event 3', start: '2023-05-27T04:00', end: '2023-05-27T07:00', backgroundColor: '#d7f0f7', color: '#000' },
    { title: 'event 3', start: '2023-05-27T11:00', end: '2023-05-27T12:00', },
    { title: 'event 3', start: '2023-05-28T10:00', end: '2023-05-28T12:00', }
  ],
})

const checkGrid = (arg) => {
  console.log(arg.dateStr);
}

const addNewEvent = (arg) => {
  // const title = prompt('Please enter a new title for your event')
  // const calendarApi = arg.view.calendar
  // calendarApi.unselect() // clear date selection
  // calendarApi.addEvent({
  //   id: `${idValue.value}`,
  //   title: 'New event',
  //   start: arg.startStr,
  //   end: arg.endStr,
  //   allDay: arg.allDay
  // })
  options.events = [
    ...options.events,
    { title: 'Another Event', date: '2023-05-27' }
  ]
}
</script>
<template>
  <div>
    <FullCalendar :options="options"/>
  </div>
  <div class="calendar-navs d-flex space-between">
    <div class="d-flex flex-column">
      <Button class="secondary" label="Сохранить" @click="addNewEvent" />
      <Button class="secondary" label="Забронировать и оплатить" @click="addNewEvent" />
    </div>
    <div class="btns d-flex flex-column align-center">
      <router-link to="/chat">
        <Button class="primary pulse" label="Рекомендации нейросети" />
      </router-link>
      <router-link to="/test">
        <Button class="primary pulse" label="Рекомендации по характеру" />
      </router-link>
    </div>
  </div>
</template>

<style lang="sass">
.calendar-navs
  margin-top: 6rem
  & div
    gap: 1.5rem
</style>