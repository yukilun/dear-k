import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./Layout-0dd77213.js";
const OrderStatus_vue_vue_type_style_index_0_scoped_8da78481_lang = "";
const _sfc_main = {
  name: "OrderStatus",
  props: {
    status: String
  },
  computed: {
    getOrderStatusClass() {
      switch (this.status) {
        case "paid":
        case "shipped":
        case "completed":
          return "bg-success";
        case "unpaid":
          return "bg-danger";
        case "cancelled":
        default:
          return "bg-body-secondary";
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "order-status d-flex align-items-center gap-2" }, _attrs))} data-v-8da78481><div class="${ssrRenderClass([$options.getOrderStatusClass, "order-status-dot"])}" data-v-8da78481></div> ${ssrInterpolate($props.status)}</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/OrderStatus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OrderStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8da78481"]]);
export {
  OrderStatus as O
};
