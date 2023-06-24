import { _ as _export_sfc, L as Layout } from "./Layout-ef8a87b0.js";
import { register } from "swiper/element/bundle";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { F as FeatureProducts } from "./FeatureProducts-72fef6b3.js";
import "@inertiajs/vue3";
import "aos";
import "./ProductCard-9589f52d.js";
const Carousel_vue_vue_type_style_index_0_scoped_80d1dee8_lang = "";
register();
const _sfc_main$1 = {
  name: "Carousel",
  props: {
    banners: Array
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "container-lg",
    "data-aos": "fade-right",
    "data-aos-once": "true",
    "data-aos-duration": "2500"
  }, _attrs))} data-v-80d1dee8><swiper-container navigation="true"${ssrRenderAttr("pagination", { clickable: true })} speed="500" loop="true" autoplay-delay="2000" autoplay-disable-on-interaction="false" data-v-80d1dee8><!--[-->`);
  ssrRenderList($props.banners, (banner) => {
    _push(`<swiper-slide data-v-80d1dee8><img${ssrRenderAttr("src", `/storage/${banner.banner_horiz_url}`)} class="d-none d-sm-block" alt="..." data-v-80d1dee8><img${ssrRenderAttr("src", `/storage/${banner.banner_vert_url}`)} class="d-block d-sm-none" alt="..." data-v-80d1dee8></swiper-slide>`);
  });
  _push(`<!--]--></swiper-container></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Carousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-80d1dee8"]]);
const _sfc_main = {
  name: "Home",
  components: {
    Layout,
    Carousel,
    FeatureProducts
  },
  props: {
    bestProducts: Array,
    newProducts: Array,
    banners: Array
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Carousel = resolveComponent("Carousel");
  const _component_FeatureProducts = resolveComponent("FeatureProducts");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Carousel, { banners: $props.banners }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_FeatureProducts, {
          products: $props.newProducts,
          title: "New Items",
          class: "bg-light mt-4"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_FeatureProducts, {
          products: $props.bestProducts,
          title: "Best Seller"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Carousel, { banners: $props.banners }, null, 8, ["banners"]),
          createVNode(_component_FeatureProducts, {
            products: $props.newProducts,
            title: "New Items",
            class: "bg-light mt-4"
          }, null, 8, ["products"]),
          createVNode(_component_FeatureProducts, {
            products: $props.bestProducts,
            title: "Best Seller"
          }, null, 8, ["products"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Home as default
};
