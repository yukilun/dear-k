import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import AOS from "aos";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = {
  name: "Announcement"
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center bg-primary py-2 px-4" }, _attrs))}><h6 class="fw-normal text-white">Free Shipping 🚚 on orders over $50</h6></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Announcement.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Announcement = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  name: "NavIcons",
  props: {
    openSideMenu: Function
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "nav-icons nav justify-content-end text-uppercase fs-5" }, _attrs))}><li class="nav-item"><a class="nav-link" href="/user">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "user"] }, null, _parent));
  _push(`</a></li><li class="nav-item"><a class="nav-link" href="/cart">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "cart-shopping"] }, null, _parent));
  _push(`</a></li><li class="nav-item d-lg-none"><button class="nav-link">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "bars"] }, null, _parent));
  _push(`</button></li></ul>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavIcons.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const NavIcons = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const NavMenu_vue_vue_type_style_index_0_scoped_f7c3f741_lang = "";
const _sfc_main$5 = {
  name: "NavMenu",
  components: {
    Link
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavMenu.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const NavMenu = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-f7c3f741"]]);
const NavSideMenu_vue_vue_type_style_index_0_scoped_3925de0c_lang = "";
const _sfc_main$4 = {
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_NavMenu = resolveComponent("NavMenu");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["sideMenu z-3 position-fixed top-0 end-0 w-100 vh-100 d-lg-none bg-black", !$props.isOpenedSideMenu && "invisible"],
    style: { "--bs-bg-opacity": ".5" }
  }, _attrs))} data-v-3925de0c><div class="${ssrRenderClass([$props.isOpenedSideMenu && "active", "sideMenuContent position-absolute top-0 end-0 vh-100 overflow-y-auto p-5 bg-white text-uppercase"])}" data-v-3925de0c><button class="link-primary bg-white border-0 mb-4" data-v-3925de0c>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "x"] }, null, _parent));
  _push(`</button><h4 class="px-3 mb-3" data-v-3925de0c>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "bag-shopping"] }, null, _parent));
  _push(`  Shop </h4>`);
  _push(ssrRenderComponent(_component_NavMenu, { class: "flex-column align-items-start" }, null, _parent));
  _push(`<h4 class="px-3 mt-4 mb-3" data-v-3925de0c>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "user"] }, null, _parent));
  _push(`  Account </h4><ul class="nav flex-column" data-v-3925de0c><li class="nav-item" data-v-3925de0c>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link",
    href: "/login"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-3925de0c>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "nav-link",
    href: "/register"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Register`);
      } else {
        return [
          createTextVNode("Register")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavSideMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const NavSideMenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-3925de0c"]]);
const _imports_0 = "/build/assets/logo-327be80c.png";
const Navbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_NavIcons = resolveComponent("NavIcons");
  const _component_NavMenu = resolveComponent("NavMenu");
  const _component_NavSideMenu = resolveComponent("NavSideMenu");
  _push(`<!--[--><div class="container-lg d-flex justify-content-between align-items-center mb-4 mb-lg-0"><div class="logo w-25">`);
  _push(ssrRenderComponent(_component_Link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="Dear K."${_scopeId}>`);
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
  _push(`</div><nav class="${ssrRenderClass([$data.fixedNavbar ? "fixed-top" : "d-none d-lg-block", "bg-white py-2 z-2"])}"><div class="container-lg position-relative">`);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "Footer",
  components: {
    Link
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary text-white" }, _attrs))}><div class="container py-5"><div class="row row-cols-1 row-cols-md-2 row-cols-lg-3"><div class="col logo-font"><h3 class="text-nowrap">Dear K.</h3><p>Dress to impress with us.</p></div><div class="col text-uppercase d-flex flex-column"><p>Support</p>`);
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
  _push(`</div><div class="col text-uppercase"><p>Contact us</p><div class="fs-3 d-flex gap-3">`);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Announcement = resolveComponent("Announcement");
  const _component_Navbar = resolveComponent("Navbar");
  const _component_Footer = resolveComponent("Footer");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Announcement, null, null, _parent));
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<div class="flex-grow-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const ProductCard_vue_vue_type_style_index_0_scoped_eb9cfe53_lang = "";
const _sfc_main = {
  name: "ProductCard",
  data() {
    return {
      imgUrls: ["https://placehold.co/600x800/E4D5B7/FFF?text=image+1", "https://placehold.co/600x800/bac99a/FFF?text=image+2"],
      imgIndex: 0,
      timer: null
    };
  },
  props: {
    product: Object
  },
  components: {
    Link
  },
  mounted() {
    this.imgUrls = this.product.images.reduce((acc, img) => {
      if (img.is_main_image === 1) {
        acc.push("/storage/" + img.image_url);
      }
      return acc;
    }, []);
    this.timer = setInterval(() => {
      if (this.imgIndex < this.imgUrls.length - 1) {
        this.imgIndex++;
      } else {
        this.imgIndex = 0;
      }
    }, 3e3);
  },
  unmounted() {
    clearInterval(this.timer);
  },
  computed: {
    getUniqueColorHex() {
      return [...new Set(this.product.inventories.map((inventory) => inventory.color.color_hex))];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "productcard border-0 bg-transparent",
    "data-aos": "fade-up",
    "data-aos-once": "true",
    "data-aos-duration": "500"
  }, _attrs))} data-v-eb9cfe53>`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/products/${$props.product.id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="productcard-img mb-2" style="${ssrRenderStyle(`background-image: url(${$data.imgUrls[$data.imgIndex]})`)}" data-v-eb9cfe53${_scopeId}></div><div class="productcard-colors d-flex mb-3" data-v-eb9cfe53${_scopeId}><!--[-->`);
        ssrRenderList($options.getUniqueColorHex, (hex) => {
          _push2(`<div class="color" style="${ssrRenderStyle(`background: #${hex}`)}" data-v-eb9cfe53${_scopeId}></div>`);
        });
        _push2(`<!--]--></div><div class="productcard-info" data-v-eb9cfe53${_scopeId}><p class="name fs-6 mb-2 lh-normal" data-v-eb9cfe53${_scopeId}>${ssrInterpolate($props.product ? $props.product.product_name : "name")}</p><p class="price fs-5" data-v-eb9cfe53${_scopeId}>$${ssrInterpolate($props.product ? $props.product.price : "20")}</p></div>`);
      } else {
        return [
          createVNode("div", {
            class: "productcard-img mb-2",
            style: `background-image: url(${$data.imgUrls[$data.imgIndex]})`
          }, null, 4),
          createVNode("div", { class: "productcard-colors d-flex mb-3" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($options.getUniqueColorHex, (hex) => {
              return openBlock(), createBlock("div", {
                class: "color",
                style: `background: #${hex}`
              }, null, 4);
            }), 256))
          ]),
          createVNode("div", { class: "productcard-info" }, [
            createVNode("p", { class: "name fs-6 mb-2 lh-normal" }, toDisplayString($props.product ? $props.product.product_name : "name"), 1),
            createVNode("p", { class: "price fs-5" }, "$" + toDisplayString($props.product ? $props.product.price : "20"), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eb9cfe53"]]);
export {
  Layout as L,
  ProductCard as P,
  _export_sfc as _
};
