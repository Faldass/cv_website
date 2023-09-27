import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

createApp(App).use(store).use(router).use(bootstrap).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
