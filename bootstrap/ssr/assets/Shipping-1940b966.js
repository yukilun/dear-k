import { T as TextContainer } from "./TextContainer-b1661c8f.js";
import { _ as _export_sfc, L as Layout } from "./Layout-0dd77213.js";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import "aos";
const _sfc_main = {
  name: "Shipping",
  components: {
    Layout,
    TextContainer
  },
  created() {
    this.title = "Shipping";
    this.paragraphs = [
      `We currently offer free shipping on all orders over $100 within Canada.`,
      `We use reliable shipping carriers to ensure prompt and secure delivery.`,
      `Delivery times may vary depending on the destination. Generally, it takes 3-7 business days for orders to arrive after they have been shipped.`,
      `Please note that any customs duties or taxes imposed by the destination country are the responsibility of the customer.`
    ];
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_TextContainer = resolveComponent("TextContainer");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TextContainer, {
          title: _ctx.title,
          paragraphs: _ctx.paragraphs,
          image: _ctx.image
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TextContainer, {
            title: _ctx.title,
            paragraphs: _ctx.paragraphs,
            image: _ctx.image
          }, null, 8, ["title", "paragraphs", "image"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Support/Shipping.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Shipping = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Shipping as default
};
