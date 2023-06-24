import { _ as _export_sfc, L as Layout } from "./Layout-ef8a87b0.js";
import { Link } from "@inertiajs/vue3";
import { resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "aos";
const _sfc_main = {
  name: "Error",
  props: {
    status: Number
  },
  computed: {
    title() {
      return {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden"
      }[this.status];
    },
    description() {
      return {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page."
      }[this.status];
    }
  },
  components: { Layout, Link }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5 m-5"${_scopeId}><h3${_scopeId}>${ssrInterpolate($options.title)}</h3><p class="mt-3"${_scopeId}>${ssrInterpolate($options.description)}</p>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/",
          class: "btn btn-primary btn-lg text-white rounded-0 mt-4 px-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5 m-5" }, [
            createVNode("h3", null, toDisplayString($options.title), 1),
            createVNode("p", { class: "mt-3" }, toDisplayString($options.description), 1),
            createVNode(_component_Link, {
              href: "/",
              class: "btn btn-primary btn-lg text-white rounded-0 mt-4 px-4"
            }, {
              default: withCtx(() => [
                createTextVNode("Home")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Error as default
};
