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
      },
      aboutme: {
        header: 'About me',
        contents: 'I first got into programming around 2020 with Python, experimenting with modules like Pygame to build small games and side projects. Eventually I transitioned into web development, where I completed a course and quickly began working on my own projects. I’ve since made Vue my main focus — I enjoy its balance of simplicity and power, and I’ve explored its ecosystem through tools like VueUse, Lucide, VueUse, VueRouter, Vue-I18n and Nuxt. Along the way I’ve also experimented with Electron, gained experience working with SQL databases, and become comfortable deploying projects with Vercel. This mix of practice and exploration has helped me grow steadily, and I continue to build projects that push me further into modern frontend and fullstack development.'
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
      },
      aboutme: {
        header: 'O mnie',
        contents: 'Zacząłem programować około roku 2020, zaczynając od języka Python. Moje pierwsze projekty były budowane z wykorzystaniem modułów takich jak Pygame, z pomocą którego tworzyłem niewielkie gry i inne projekty poboczne. Z czasem przeniosłem się w kierunku web devu, kończąc kurs i skupiając się na projektach wykorzystujących technologie webowe. Moim głównym narzędziem jest Vue - lubię go za połączenie prostoty i mocy oraz za bardzo przyjemny developer experience. Po drodze zagłębiłem się w jego ekosystem, korzystając z modułów takich jak Lucide, VueUse, VueRouter, Vue-I18n oraz postawiłem pierwsze kroki w SSR z wykorzystaniem frameworka Nuxt. Oprócz tego eksperymentowałem z Electronem, tworzyłem bazy danych z wykorzystaniem SQL (Postgres/Supabase) i publikowałem projekty z użyciem Vercela.'
      },

    }
  }
})
createApp(App).use(i18n).mount('#app')
console.log(i18n)
