import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc, L as Layout } from "./Layout-ef8a87b0.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "aos";
const Failure_vue_vue_type_style_index_0_scoped_5622bc60_lang = "";
const _sfc_main = {
  name: "Failure",
  props: {
    message: String
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
        _push2(`<div class="m-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center" data-v-5622bc60${_scopeId}><p class="failure-icon my-3 text-danger" data-v-5622bc60${_scopeId}>`);
        _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fa", "circle-xmark"] }, null, _parent2, _scopeId));
        _push2(`</p><p class="fs-4 text-capitalize" data-v-5622bc60${_scopeId}>Failure to Pay</p>`);
        if ($props.message) {
          _push2(`<p data-v-5622bc60${_scopeId}>Message: ${ssrInterpolate($props.message)}</p>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_Link, {
          href: `/orders`,
          class: "mt-5 btn btn-primary btn-lg rounded-0 text-white mb-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`View My Orders`);
            } else {
              return [
                createTextVNode("View My Orders")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "m-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center" }, [
            createVNode("p", { class: "failure-icon my-3 text-danger" }, [
              createVNode(_component_font_awesome_icon, { icon: ["fa", "circle-xmark"] })
            ]),
            createVNode("p", { class: "fs-4 text-capitalize" }, "Failure to Pay"),
            $props.message ? (openBlock(), createBlock("p", { key: 0 }, "Message: " + toDisplayString($props.message), 1)) : createCommentVNode("", true),
            createVNode(_component_Link, {
              href: `/orders`,
              class: "mt-5 btn btn-primary btn-lg rounded-0 text-white mb-3"
            }, {
              default: withCtx(() => [
                createTextVNode("View My Orders")
              ]),
              _: 1
            })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Failure.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Failure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5622bc60"]]);
export {
  Failure as default
};
