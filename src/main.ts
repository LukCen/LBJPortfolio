import { createApp } from 'vue'
import App from './App.vue'
import { register } from 'swiper/element/bundle';

import 'swiper/swiper-bundle.css'
import { createI18n } from 'vue-i18n';
register()
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    'en': {
      navbar: {
        aboutme: "About me",
        portfolio: "Portfolio",
        contact: "Contact"
      },
      hero: {
        header: "Frontend with a passion",
        contents: "Hey, thanks for paying me a visit! I'm Łukasz, a front-end developer from Poland."
      }
    },
    'pl': {
      navbar: {
        aboutme: "O mnie",
        portfolio: "Portfolio",
        contact: "Kontakt"
      },
      hero: {
        header: "Frontend z pasją",
        contents: "Hej, dzięki za wizytę! Jestem Łukasz, fajnie że jesteś!"
      }
    }
  }
})
createApp(App).use(i18n).mount('#app')
console.log(i18n)
