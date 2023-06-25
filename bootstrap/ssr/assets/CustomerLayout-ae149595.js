import { Link } from "@inertiajs/vue3";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./Layout-e4e7b742.js";
const CustomerTabs_vue_vue_type_style_index_0_scoped_9784f101_lang = "";
const _sfc_main$1 = {
  name: "CustomerTabs",
  components: {
    Link
  },
  created() {
    this.tabs = [{
      tabName: "Profile",
      href: "/profile"
    }, {
      tabName: "Orders",
      href: "/orders"
    }];
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex" }, _attrs))} data-v-9784f101><!--[-->`);
  ssrRenderList(_ctx.tabs, ({ tabName, href }, index) => {
    _push(`<div class="${ssrRenderClass([_ctx.$page.url.startsWith(href) && "active", "tab"])}" data-v-9784f101>`);
    _push(ssrRenderComponent(_component_Link, {
      class: "d-block py-3 text-decoration-none",
      href
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(tabName)}`);
        } else {
          return [
            createTextVNode(toDisplayString(tabName), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CustomerTabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CustomerTabs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9784f101"]]);
const CustomerLayout_vue_vue_type_style_index_0_scoped_09d4f760_lang = "";
const _sfc_main = {
  name: "CustomerLayout",
  components: {
    Link,
    CustomerTabs
  },
  created() {
    this.tabs = [{
      tabName: "Profile",
      href: "/profile"
    }, {
      tabName: "Orders",
      href: "/orders"
    }];
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_CustomerTabs = resolveComponent("CustomerTabs");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-lg mb-5" }, _attrs))} data-v-09d4f760><div class="text-end mb-4" data-v-09d4f760>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/logout",
    method: "post",
    as: "button",
    class: "btn btn-primary rounded-0 text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Logout `);
      } else {
        return [
          createTextVNode(" Logout ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div data-v-09d4f760>`);
  _push(ssrRenderComponent(_component_CustomerTabs, null, null, _parent));
  _push(`<div class="content px-3 px-md-5 py-5" data-v-09d4f760>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/CustomerLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CustomerLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-09d4f760"]]);
export {
  CustomerLayout as C
};
