import './bootstrap';
// import { createApp, h } from 'vue'
import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import  '../scss/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faCartShopping, faBars, faShoppingBag, faX, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faSpinner, faCircleXmark, faCircleCheck, faLock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import 'aos/dist/aos.css'

library.add(faUser, faCartShopping, faBars, faShoppingBag, faX, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faSpinner, faCircleXmark, faCircleCheck, faLock, faMagnifyingGlass, faFacebook, faInstagram, faTwitter)

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .component('font-awesome-icon', FontAwesomeIcon)
      .mount(el)
  },
})
