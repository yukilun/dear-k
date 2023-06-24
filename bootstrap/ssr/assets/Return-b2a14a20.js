import { T as TextContainer } from "./TextContainer-21bfb38b.js";
import { _ as _export_sfc, L as Layout } from "./Layout-cbfb21e4.js";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import "aos";
const _sfc_main = {
  name: "Return",
  components: {
    Layout,
    TextContainer
  },
  created() {
    this.title = "Return";
    this.paragraphs = [
      `If you are not satisfied with your purchase, you can return the item(s) within 14 days of receiving them.`,
      `The item(s) must be unworn, in their original condition, and with all tags attached.`,
      `To initiate a return, please contact our customer support team with your order details. They will guide you through the return process.`,
      `Once we receive the returned item(s), we will process the refund within 5-7 business days to your original payment method.`,
      `Please note that shipping costs for returns are the responsibility of the customer, unless the return is due to a damaged or incorrect item.`
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
          paragraphs: _ctx.paragraphs
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TextContainer, {
            title: _ctx.title,
            paragraphs: _ctx.paragraphs
          }, null, 8, ["title", "paragraphs"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Support/Return.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Return = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Return as default
};
