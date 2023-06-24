import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc, L as Layout } from "./Layout-ef8a87b0.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "aos";
const Success_vue_vue_type_style_index_0_scoped_d7b4a8c8_lang = "";
const _sfc_main = {
  name: "Success",
  props: {
    name: String,
    order_id: String
  },
  components: {
    Layout,
    Link
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="m-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center" data-v-d7b4a8c8${_scopeId}><p class="success-icon my-3 text-success" data-v-d7b4a8c8${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fa", "circle-check"] }, null, _parent2, _scopeId));
        _push2(`</p><p class="fs-4 text-capitalize" data-v-d7b4a8c8${_scopeId}>${ssrInterpolate($props.name)}, thank you for your order!</p><p data-v-d7b4a8c8${_scopeId}>You will recieve an order confirmation email from us.</p><p class="mb-5" data-v-d7b4a8c8${_scopeId}>Your Order # : ${ssrInterpolate(String($props.order_id).padStart(10, "0"))}</p>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: `/orders/${$props.order_id}`,
          class: "btn btn-primary btn-lg rounded-0 text-white mb-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`View My Order`);
            } else {
              return [
                createTextVNode("View My Order")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "m-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center" }, [
            createVNode("p", { class: "success-icon my-3 text-success" }, [
              createVNode(_component_font_awesome_icon, { icon: ["fa", "circle-check"] })
            ]),
            createVNode("p", { class: "fs-4 text-capitalize" }, toDisplayString($props.name) + ", thank you for your order!", 1),
            createVNode("p", null, "You will recieve an order confirmation email from us."),
            createVNode("p", { class: "mb-5" }, "Your Order # : " + toDisplayString(String($props.order_id).padStart(10, "0")), 1),
            createVNode(_component_Link, {
              href: `/orders/${$props.order_id}`,
              class: "btn btn-primary btn-lg rounded-0 text-white mb-3"
            }, {
              default: withCtx(() => [
                createTextVNode("View My Order")
              ]),
              _: 1
            }, 8, ["href"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Success = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d7b4a8c8"]]);
export {
  Success as default
};
