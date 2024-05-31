import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
/* import the fontawesome core */ 
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons';  
import { far } from '@fortawesome/free-regular-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
library.add(fas)
library.add(far)
import VueApexCharts from "vue3-apexcharts";


const vuetify = createVuetify({
    components,
    directives,
  })


import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(VueApexCharts)
.use(vuetify)
.use(store)
.use(router)
.mount('#app')
