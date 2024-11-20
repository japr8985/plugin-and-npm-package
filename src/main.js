import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import TextViewer from './install'


createApp(App)
    .use(TextViewer)
    .mount('#app')
