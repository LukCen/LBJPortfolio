import { createApp } from 'vue'
import App from './App.vue'
import { register } from 'swiper/element/bundle';

import 'swiper/swiper-bundle.css'
import { createI18n } from 'vue-i18n';
register()
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    'en': {
      navbar: {
        aboutme: "About me",
        portfolio: "Portfolio",
        contact: "Contact"
      }
    },
    'pl': {
      navbar: {
        aboutme: "O mnie",
        portfolio: "Portfolio",
        contact: "Kontakt"
      }
    }
  }
})
createApp(App).use(i18n).mount('#app')
console.log(i18n)
