import { Link } from "@inertiajs/vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./Layout-0dd77213.js";
const ProductCard_vue_vue_type_style_index_0_scoped_0e14400f_lang = "";
const _sfc_main = {
  name: "ProductCard",
  data() {
    return {
      imgUrls: ["https://placehold.co/600x800/E4D5B7/FFF?text=image+1", "https://placehold.co/600x800/bac99a/FFF?text=image+2"],
      imgIndex: 0,
      timer: null
    };
  },
  props: {
    product: Object
  },
  components: {
    Link
  },
  created() {
    this.imgUrls = this.product.images.reduce((acc, img) => {
      if (img.is_main_image === 1) {
        acc.push("/storage/" + img.image_url);
      }
      return acc;
    }, []);
    this.timer = setInterval(() => {
      if (this.imgIndex < this.imgUrls.length - 1) {
        this.imgIndex++;
      } else {
        this.imgIndex = 0;
      }
    }, 3e3);
  },
  unmounted() {
    clearInterval(this.timer);
  },
  computed: {
    getUniqueColorHex() {
      const colors = [...new Set(this.product.inventories.map((inventory) => inventory.color.color_hex))];
      colors.sort((a, b) => {
        const sumA = parseInt(a.slice(0, 2), 16) + parseInt(a.slice(2, 4), 16) + parseInt(a.slice(4, 6), 16);
        const sumB = parseInt(b.slice(0, 2), 16) + parseInt(b.slice(2, 4), 16) + parseInt(b.slice(4, 6), 16);
        return sumB - sumA;
      });
      return colors;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "productcard border-0 bg-transparent",
    "data-aos": "fade-up",
    "data-aos-once": "true",
    "data-aos-duration": "500"
  }, _attrs))} data-v-0e14400f>`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/products/${$props.product.id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="productcard-img mb-2" style="${ssrRenderStyle(`background-image: url(${$data.imgUrls[$data.imgIndex]})`)}" data-v-0e14400f${_scopeId}></div><div class="productcard-colors d-flex mb-3" data-v-0e14400f${_scopeId}><!--[-->`);
        ssrRenderList($options.getUniqueColorHex, (hex) => {
          _push2(`<div class="color" style="${ssrRenderStyle(`background: #${hex}`)}" data-v-0e14400f${_scopeId}></div>`);
        });
        _push2(`<!--]--></div><div class="productcard-info" data-v-0e14400f${_scopeId}><p class="name fs-6 mb-2 lh-normal" data-v-0e14400f${_scopeId}>${ssrInterpolate($props.product ? $props.product.product_name : "name")}</p><p class="price fs-5" data-v-0e14400f${_scopeId}>$${ssrInterpolate($props.product ? $props.product.price : "20")}</p></div>`);
      } else {
        return [
          createVNode("div", {
            class: "productcard-img mb-2",
            style: `background-image: url(${$data.imgUrls[$data.imgIndex]})`
          }, null, 4),
          createVNode("div", { class: "productcard-colors d-flex mb-3" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($options.getUniqueColorHex, (hex) => {
              return openBlock(), createBlock("div", {
                class: "color",
                style: `background: #${hex}`
              }, null, 4);
            }), 256))
          ]),
          createVNode("div", { class: "productcard-info" }, [
            createVNode("p", { class: "name fs-6 mb-2 lh-normal" }, toDisplayString($props.product ? $props.product.product_name : "name"), 1),
            createVNode("p", { class: "price fs-5" }, "$" + toDisplayString($props.product ? $props.product.price : "20"), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="preload-images d-none" data-v-0e14400f><!--[-->`);
  ssrRenderList($data.imgUrls, (imgUrl) => {
    _push(`<img${ssrRenderAttr("src", imgUrl)} data-v-0e14400f>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0e14400f"]]);
export {
  ProductCard as P
};
