import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Particles from "particles.vue3";

import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:5000/api/"

createApp(App).use(router).use(Particles).mount('#app')
// createApp(App)..mount("#app")
