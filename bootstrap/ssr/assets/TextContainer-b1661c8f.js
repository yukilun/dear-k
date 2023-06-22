import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./Layout-0dd77213.js";
const TextContainer_vue_vue_type_style_index_0_scoped_df6afdbb_lang = "";
const _sfc_main = {
  name: "TextContainer",
  props: {
    title: String,
    image: Object,
    paragraphs: Array
  },
  methods: {
    getImgUrl() {
      return new URL(this.image.src, import.meta.url);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-container" }, _attrs))} data-v-df6afdbb><h3 data-v-df6afdbb>${ssrInterpolate($props.title)}</h3>`);
  if ($props.image) {
    _push(`<div class="img-container" data-v-df6afdbb><img${ssrRenderAttr("src", $options.getImgUrl())}${ssrRenderAttr("alt", $props.image.alt)} data-v-df6afdbb></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($props.paragraphs, (paragraph) => {
    _push(`<p data-v-df6afdbb>${ssrInterpolate(paragraph)}</p>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Support/TextContainer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-df6afdbb"]]);
export {
  TextContainer as T
};
