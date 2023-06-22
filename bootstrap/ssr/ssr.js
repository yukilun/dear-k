import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faCartShopping, faBars, faShoppingBag, faX, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faSpinner, faCircleXmark, faCircleCheck, faLock, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
library.add(faUser, faCartShopping, faBars, faShoppingBag, faX, faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faSpinner, faCircleXmark, faCircleCheck, faLock, faMagnifyingGlass, faFacebook, faInstagram, faTwitter);
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-9d054793.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-fca4cb9d.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-9876aa0c.js"), "./Pages/Auth/ResetPassword.vue": () => import("./assets/ResetPassword-883bfd3c.js"), "./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-ba78e1fb.js"), "./Pages/Cart/Cart.vue": () => import("./assets/Cart-ac5ea2bb.js"), "./Pages/Checkout/Checkout.vue": () => import("./assets/Checkout-8172b5d2.js"), "./Pages/Checkout/Failure.vue": () => import("./assets/Failure-41a55631.js"), "./Pages/Checkout/Success.vue": () => import("./assets/Success-a4ca5ace.js"), "./Pages/Home.vue": () => import("./assets/Home-eacdad97.js"), "./Pages/Order/Order.vue": () => import("./assets/Order-ca9b84c1.js"), "./Pages/Order/Orders.vue": () => import("./assets/Orders-fb8bb492.js"), "./Pages/Product/Product.vue": () => import("./assets/Product-ac191b68.js"), "./Pages/Product/Products.vue": () => import("./assets/Products-b75ebdc3.js"), "./Pages/Profile/ProfileEdit.vue": () => import("./assets/ProfileEdit-8ca77b38.js"), "./Pages/Support/About.vue": () => import("./assets/About-905d6188.js"), "./Pages/Support/Faq.vue": () => import("./assets/Faq-c6c41dee.js"), "./Pages/Support/Return.vue": () => import("./assets/Return-50eb6fa6.js"), "./Pages/Support/Shipping.vue": () => import("./assets/Shipping-1940b966.js") })),
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin).component("font-awesome-icon", FontAwesomeIcon);
    }
  })
);
