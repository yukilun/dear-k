import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./Layout-ef8a87b0.js";
const TextContainer_vue_vue_type_style_index_0_scoped_cfdf3078_lang = "";
const _sfc_main = {
  name: "TextContainer",
  props: {
    title: String,
    image: Object,
    paragraphs: Array
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "text-container",
    "data-aos": "fade-left",
    "data-aos-once": "true",
    "data-aos-duration": "1500"
  }, _attrs))} data-v-cfdf3078><h3 data-v-cfdf3078>${ssrInterpolate($props.title)}</h3>`);
  if ($props.image) {
    _push(`<div class="img-container" data-v-cfdf3078><img${ssrRenderAttr("src", `${(_a = $props.image) == null ? void 0 : _a.src}`)}${ssrRenderAttr("alt", (_b = $props.image) == null ? void 0 : _b.alt)} data-v-cfdf3078></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($props.paragraphs, (paragraph) => {
    _push(`<p data-v-cfdf3078>${ssrInterpolate(paragraph)}</p>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Support/TextContainer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cfdf3078"]]);
export {
  TextContainer as T
};
