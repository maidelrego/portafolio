import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import '@/assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faGithub)



const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(PrimeVue, { ripple: true });
app.use(router)
app.mount('#app')
