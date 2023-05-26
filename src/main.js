
import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import 'primeicons/primeicons.css'

import './assets/normalze.css'
import './assets/styles.sass'

import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from "primevue/inputnumber"
import AutoComplete  from 'primevue/autocomplete'
import Calendar from "primevue/calendar"
import OverlayPanel from 'primevue/overlaypanel'
import SelectButton from "primevue/selectbutton"
import Rating from 'primevue/rating'
import Checkbox from 'primevue/checkbox'
import ToggleButton from 'primevue/togglebutton'


const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  locale: {
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
    aria: {
      star: '1 звезда',
      stars: '{star} звезд'
    }
  }
})
app.use(router)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('AutoComplete',AutoComplete)
app.component('Calendar',Calendar)
app.component('OverlayPanel',OverlayPanel)
app.component('InputNumber',InputNumber)
app.component('SelectButton',SelectButton)
app.component('Rating',Rating)
app.component('Checkbox',Checkbox)
app.component('ToggleButton',ToggleButton)




app.mount('#app')
