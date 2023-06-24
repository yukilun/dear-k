import { P as ProductCard } from "./ProductCard-9589f52d.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./Layout-ef8a87b0.js";
const _sfc_main = {
  name: "FeatureProducts",
  components: {
    ProductCard
  },
  props: {
    products: Array,
    title: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_ProductCard = resolveComponent("ProductCard");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-box" }, _attrs))}><div class="container px-2 py-5"><p class="fs-4 text-uppercase text-center">${ssrInterpolate($props.title)}</p><div class="heading-line mb-5"></div>`);
  if ($props.products.length < 1) {
    _push(`<div class="text-center p-5"><p class="fs-1 text-secondary">`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "x"] }, null, _parent));
    _push(`</p><p>No product found</p></div>`);
  } else {
    _push(`<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4"><!--[-->`);
    ssrRenderList($props.products, (product, idx) => {
      _push(`<div class="col">`);
      _push(ssrRenderComponent(_component_ProductCard, {
        "data-aos-delay": idx * 50,
        product
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FeatureProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FeatureProducts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FeatureProducts as F
};
