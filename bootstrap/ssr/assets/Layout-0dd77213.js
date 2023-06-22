import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { Link, usePage } from "@inertiajs/vue3";
import AOS from "aos";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$6 = {
  name: "Announcement"
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center bg-primary py-2 px-4" }, _attrs))}><h6 class="fw-normal text-white">Free Shipping 🚚 on orders over $100</h6></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Announcement.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Announcement = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const NavIcons_vue_vue_type_style_index_0_scoped_800626a1_lang = "";
const _sfc_main$5 = {
  name: "NavIcons",
  props: {
    openSideMenu: Function
  },
  components: {
    Link
  },
  created() {
    this.page = usePage();
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "nav-icons nav justify-content-end text-uppercase fs-5" }, _attrs))} data-v-800626a1><li class="nav-item" data-v-800626a1>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link",
    href: "/profile"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "user"] }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font_awesome_icon, { icon: ["fas", "user"] })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item position-relative" data-v-800626a1>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link",
    href: "/cart"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "cart-shopping"] }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font_awesome_icon, { icon: ["fas", "cart-shopping"] })
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.page.props.cart_total_quantity > 0) {
    _push(`<div class="cart-count" data-v-800626a1>${ssrInterpolate(_ctx.page.props.cart_total_quantity)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="nav-item d-lg-none" data-v-800626a1><button class="nav-link" data-v-800626a1>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "bars"] }, null, _parent));
  _push(`</button></li></ul>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavIcons.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const NavIcons = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-800626a1"]]);
const NavMenu_vue_vue_type_style_index_0_scoped_f7c3f741_lang = "";
const _sfc_main$4 = {
  name: "NavMenu",
  components: {
    Link
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "nav-menu nav justify-content-center text-uppercase flex-nowrap" }, _attrs))} data-v-f7c3f741><li class="nav-item" data-v-f7c3f741>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link",
    href: "/products"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`All`);
      } else {
        return [
          createTextVNode("All")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-f7c3f741>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link",
    href: "/products?category=top"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Top`);
      } else {
        return [
          createTextVNode("Top")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-f7c3f741>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link",
    href: "/products?category=pants"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pants`);
      } else {
        return [
          createTextVNode("Pants")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-f7c3f741>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link",
    href: "/products?category=skirts"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Skirts`);
      } else {
        return [
          createTextVNode("Skirts")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-f7c3f741>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link",
    href: "/products?category=outer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Outer`);
      } else {
        return [
          createTextVNode("Outer")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-f7c3f741>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link",
    href: "/products?category=dress"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Dress`);
      } else {
        return [
          createTextVNode("Dress")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const NavMenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-f7c3f741"]]);
const NavSideMenu_vue_vue_type_style_index_0_scoped_15740448_lang = "";
const _sfc_main$3 = {
  name: "NavSideMenu",
  props: {
    isOpenedSideMenu: Boolean,
    closeSideMenu: Function
  },
  components: {
    NavMenu,
    Link
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_NavMenu = resolveComponent("NavMenu");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["sideMenu z-3 position-fixed top-0 end-0 w-100 h-100 d-lg-none bg-black", !$props.isOpenedSideMenu && "invisible"],
    style: { "--bs-bg-opacity": ".5" }
  }, _attrs))} data-v-15740448><div class="${ssrRenderClass([$props.isOpenedSideMenu && "active", "sideMenuContent position-absolute top-0 end-0 h-100 px-3 py-4 overflow-y-auto bg-light text-uppercase"])}" data-v-15740448><button class="link-primary bg-white border-0 mb-4" data-v-15740448>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "x"] }, null, _parent));
  _push(`</button><p class="fs-4 text-uppercase mb-3 text-center" data-v-15740448>Category</p><div class="heading-line mb-4" data-v-15740448></div>`);
  _push(ssrRenderComponent(_component_NavMenu, { class: "flex-column align-items-start" }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavSideMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NavSideMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-15740448"]]);
const _imports_0 = "/build/assets/logo-327be80c.png";
const Navbar_vue_vue_type_style_index_0_scoped_051fc6cc_lang = "";
const _sfc_main$2 = {
  name: "Navbar",
  components: {
    Link,
    NavIcons,
    NavMenu,
    NavSideMenu
  },
  data() {
    return {
      fixedNavbar: false,
      isOpenedSideMenu: false
    };
  },
  methods: {
    onscroll() {
      const navY = this.$refs.navmenu.offsetTop || 100;
      if (window.scrollY > navY) {
        this.fixedNavbar = true;
      } else {
        this.fixedNavbar = false;
      }
    },
    openSideMenu() {
      this.isOpenedSideMenu = true;
    },
    closeSideMenu() {
      this.isOpenedSideMenu = false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onscroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onscroll);
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_NavIcons = resolveComponent("NavIcons");
  const _component_NavMenu = resolveComponent("NavMenu");
  const _component_NavSideMenu = resolveComponent("NavSideMenu");
  _push(`<!--[--><div class="container-lg d-flex justify-content-between align-items-center mb-4 mb-lg-0" data-v-051fc6cc><div class="logo w-25" data-v-051fc6cc>`);
  _push(ssrRenderComponent(_component_Link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="Dear K." data-v-051fc6cc${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            class: "img-fluid",
            alt: "Dear K."
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_NavIcons, {
    openSideMenu: $options.openSideMenu,
    style: !$data.fixedNavbar ? null : { display: "none" }
  }, null, _parent));
  _push(`</div><nav class="${ssrRenderClass([$data.fixedNavbar ? "fixed-top z-3" : "d-none d-lg-block", "bg-white py-2 z-2"])}" data-v-051fc6cc><div class="container-lg position-relative" data-v-051fc6cc>`);
  _push(ssrRenderComponent(_component_NavMenu, { class: "position-absolute top-50 start-50 translate-middle d-none d-lg-flex" }, null, _parent));
  _push(ssrRenderComponent(_component_NavIcons, {
    openSideMenu: $options.openSideMenu,
    class: !$data.fixedNavbar && "invisible"
  }, null, _parent));
  _push(`</div></nav>`);
  _push(ssrRenderComponent(_component_NavSideMenu, {
    isOpenedSideMenu: $data.isOpenedSideMenu,
    closeSideMenu: $options.closeSideMenu
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-051fc6cc"]]);
const _sfc_main$1 = {
  name: "Footer",
  components: {
    Link
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary text-white" }, _attrs))}><div class="container p-5"><div class="row row-cols-2 row-cols-lg-3"><div class="col logo-font d-none d-md-block"><h3 class="text-nowrap">Dear K.</h3><p>Dress to impress with us.</p></div><div class="col text-uppercase d-flex flex-column"><p class="fw-semibold">Support</p>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/about",
    class: "link-light link-offset-2 link-opacity-75 link-opacity-100-hover link-underline-opacity-0 link-underline-opacity-75-hover mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About `);
      } else {
        return [
          createTextVNode(" About ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/faq",
    class: "link-light link-offset-2 link-opacity-75 link-opacity-100-hover link-underline-opacity-0 link-underline-opacity-75-hover mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` FAQ `);
      } else {
        return [
          createTextVNode(" FAQ ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/shipping",
    class: "link-light link-offset-2 link-opacity-75 link-opacity-100-hover link-underline-opacity-0 link-underline-opacity-75-hover mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Shipping `);
      } else {
        return [
          createTextVNode(" Shipping ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/return",
    class: "link-light link-offset-2 link-opacity-75 link-opacity-100-hover link-underline-opacity-0 link-underline-opacity-75-hover mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Return `);
      } else {
        return [
          createTextVNode(" Return ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col text-uppercase"><p class="fw-semibold">Contact us</p><div class="fs-3 d-flex gap-3">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "#",
    class: "link-light link-opacity-75 link-opacity-100-hover"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "facebook"] }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font_awesome_icon, { icon: ["fab", "facebook"] })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "#",
    class: "link-light link-opacity-75 link-opacity-100-hover"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "instagram"] }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font_awesome_icon, { icon: ["fab", "instagram"] })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "#",
    class: "link-light link-opacity-75 link-opacity-100-hover"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "twitter"] }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font_awesome_icon, { icon: ["fab", "twitter"] })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Layout",
  components: {
    Announcement,
    Navbar,
    Footer
  },
  mounted() {
    AOS.init();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Announcement = resolveComponent("Announcement");
  const _component_Navbar = resolveComponent("Navbar");
  const _component_Footer = resolveComponent("Footer");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Announcement, null, null, _parent));
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<div class="flex-grow-1 d-flex flex-column">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Layout as L,
  _export_sfc as _
};
