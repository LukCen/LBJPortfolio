import { createApp } from 'vue'
import App from './App.vue'
import { register } from 'swiper/element/bundle';

import 'swiper/swiper-bundle.css'
register()
createApp(App).mount('#app')
