import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Particles from "particles.vue3";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import axios from 'axios'
axios.defaults.baseURL = "https://portfolio.mxbal.my.id/api/"
document.title = "Muhammad Iqbal"

createApp(App).use(router).use(Particles).mount('#app')
// createApp(App)..mount("#app")
