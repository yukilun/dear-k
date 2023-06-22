import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';


import  '../scss/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faCartShopping, faBars, faShoppingBag, faX, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faSpinner, faCircleXmark, faCircleCheck, faLock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import 'aos/dist/aos.css'

library.add(faUser, faCartShopping, faBars, faShoppingBag, faX, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faSpinner, faCircleXmark, faCircleCheck, faLock, faMagnifyingGlass, faFacebook, faInstagram, faTwitter);

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props),
      }).use(plugin)
      .component('font-awesome-icon', FontAwesomeIcon)
    },
  }),
)