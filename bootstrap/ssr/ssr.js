import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faCartShopping, faBars, faShoppingBag, faX, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const app = "";
const aos = "";
library.add(faUser, faCartShopping, faBars, faShoppingBag, faX, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faSpinner, faFacebook, faInstagram, faTwitter);
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Category.vue": () => import("./assets/Category-35188bf6.js"), "./Pages/Home.vue": () => import("./assets/Home-3b01b4a7.js"), "./Pages/Product.vue": () => import("./assets/Product-bdb57b67.js") })),
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin).component("font-awesome-icon", FontAwesomeIcon);
    }
  })
);
