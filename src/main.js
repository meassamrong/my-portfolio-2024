// Style important
import './assets/tailwind.css'
import './assets/main.css'
import './assets/font.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// end of assets folder

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
