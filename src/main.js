
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

import './assets/normalze.css'
import './assets/styles.sass'

import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'

import Button from 'primevue/button';

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)

app.component('Button', Button);

app.mount('#app')
