import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, L as Layout, P as ProductCard } from "./ProductCard-f8434ecc.js";
import { register } from "swiper/element/bundle";
import { Link } from "@inertiajs/vue3";
import { F as FeatureProducts } from "./FeatureProducts-6bcddc77.js";
import "aos";
const ProductOptions_vue_vue_type_style_index_0_scoped_067fcdfe_lang = "";
const _sfc_main$3 = {
  name: "ProductOptions",
  props: {
    inventories: Array
  },
  data() {
    return {
      colors: [],
      sizes: [],
      selection: { color_id: -1, size_id: -1, quantity: 1 }
    };
  },
  methods: {
    disableSize(id) {
      if (this.selection.color_id != -1) {
        return this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === id).stock_quantity <= 0;
      }
      return false;
    },
    resetQuantity() {
      this.selection.quantity = 1;
    },
    handleSubmit() {
    }
  },
  mounted() {
    const colorIds = [...new Set(this.inventories.map((inventory) => inventory.color_id))];
    this.colors = colorIds.map((id) => this.inventories.find((inventory) => inventory.color_id === id).color);
    const sizeIds = [...new Set(this.inventories.map((inventory) => inventory.size_id))];
    this.sizes = sizeIds.map((id) => this.inventories.find((inventory) => inventory.size_id === id).size);
    const firstInstock = this.inventories.find((inventory) => inventory.stock_quantity > 0);
    this.selection.color_id = firstInstock.color_id;
    this.selection.size_id = firstInstock.size_id;
  },
  computed: {
    getSelectionColorName() {
      var _a;
      return (_a = this.colors.find((color) => color.id === this.selection.color_id)) == null ? void 0 : _a.color_name;
    },
    getSelectionSizeName() {
      var _a;
      return (_a = this.sizes.find((size) => size.id === this.selection.size_id)) == null ? void 0 : _a.size_name;
    },
    soldOut() {
      var _a;
      if (this.selection.color_id > -1 && this.selection.size_id > -1) {
        return ((_a = this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === this.selection.size_id)) == null ? void 0 : _a.stock_quantity) <= 0;
      }
      return false;
    },
    disableReduceQuantity() {
      return this.selection.quantity <= 1;
    },
    disableAddQuantity() {
      var _a;
      if (this.selection.color_id > -1 && this.selection.size_id > -1) {
        return this.selection.quantity >= 50 || ((_a = this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === this.selection.size_id)) == null ? void 0 : _a.stock_quantity) <= this.selection.quantity;
      }
      return this.selection.quantity >= 50;
    },
    getStockStatus() {
      var _a;
      if (this.selection.color_id > -1 && this.selection.size_id > -1) {
        const stockQuantity = (_a = this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === this.selection.size_id)) == null ? void 0 : _a.stock_quantity;
        if (stockQuantity > 10) {
          return "In stock";
        } else if (stockQuantity > 0) {
          return "Low stock - " + stockQuantity + " avaliable";
        }
      }
      return null;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(mergeProps({ method: "get" }, _attrs))} data-v-067fcdfe><div class="color-options mb-4" data-v-067fcdfe><div class="mb-2 fw-semibold" data-v-067fcdfe>Color:  ${ssrInterpolate($options.getSelectionColorName)}</div><div class="d-flex gap-2 flex-wrap" data-v-067fcdfe><!--[-->`);
  ssrRenderList($data.colors, ({ id, color_hex }) => {
    _push(`<div class="color-option" data-v-067fcdfe><input class="d-none" type="radio" name="color_id"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selection.color_id, id)) ? " checked" : ""}${ssrRenderAttr("value", id)}${ssrRenderAttr("id", `color-${id}`)} data-v-067fcdfe><label${ssrRenderAttr("for", `color-${id}`)} class="${ssrRenderClass([id === $data.selection.color_id && "active", "radio-color"])}" style="${ssrRenderStyle(`background: #${color_hex}`)}" data-v-067fcdfe></label></div>`);
  });
  _push(`<!--]--></div></div><div class="size-options mb-4" data-v-067fcdfe><div class="mb-2 fw-semibold" data-v-067fcdfe>Size:  ${ssrInterpolate($options.getSelectionSizeName)}</div><div class="d-flex gap-2 flex-wrap" data-v-067fcdfe><!--[-->`);
  ssrRenderList($data.sizes, ({ id, size_name }) => {
    _push(`<div class="size-option" data-v-067fcdfe><input class="d-none" type="radio" name="size_id"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selection.size_id, id)) ? " checked" : ""}${ssrRenderAttr("value", id)}${ssrRenderAttr("id", `size-${id}`)} data-v-067fcdfe><label${ssrRenderAttr("for", `size-${id}`)} class="${ssrRenderClass([[id === $data.selection.size_id && "active", $options.disableSize(id) && "disable"], "radio-size"])}" data-v-067fcdfe>${ssrInterpolate(size_name)}</label></div>`);
  });
  _push(`<!--]--></div></div><div style="${ssrRenderStyle(!$options.soldOut ? null : { display: "none" })}" class="quantity" data-v-067fcdfe><div class="mb-2 fw-semibold" data-v-067fcdfe>Quantity: </div><div class="d-flex" data-v-067fcdfe><input class="d-none" type="number" name="quantity"${ssrRenderAttr("value", $data.selection.quantity)} data-v-067fcdfe><button class="quantity-btn btn btn-outline-primary rounded-0 border px-3"${ssrIncludeBooleanAttr($options.disableReduceQuantity) ? " disabled" : ""} style="${ssrRenderStyle(`--bs-btn-hover-color: white; --bs-btn-active-color: white;`)}" data-v-067fcdfe> - </button><div class="flex-grow-1 h-full py-1 text-center border-top border-bottom" data-v-067fcdfe>${ssrInterpolate($data.selection.quantity)}</div><button class="quantity-btn btn btn-outline-primary rounded-0 border px-3"${ssrIncludeBooleanAttr($options.disableAddQuantity) ? " disabled" : ""} style="${ssrRenderStyle(`--bs-btn-hover-color: white`)}" data-v-067fcdfe> + </button></div><div class="stockStatus mt-2" data-v-067fcdfe><small class="text-black-50" data-v-067fcdfe>${ssrInterpolate($options.getStockStatus)}</small></div></div><div class="addToCart d-grid mt-5" data-v-067fcdfe><button type="submit"${ssrIncludeBooleanAttr($options.soldOut) ? " disabled" : ""} class="btn btn-primary btn-lg rounded-0 text-white fw-semibold" data-v-067fcdfe>${ssrInterpolate($options.soldOut ? "Sold Out" : "Add To Cart")}</button></div></form>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductOptions.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProductOptions = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-067fcdfe"]]);
const ProductGallery_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  name: "ProductGallery",
  props: {
    images: Array
  },
  data() {
    return {
      displayIndex: 0
    };
  },
  methods: {
    slidePrev() {
      this.$refs.navSwiper.swiper.slidePrev();
    },
    slideNext() {
      this.$refs.navSwiper.swiper.slideNext();
    },
    changeDisplayIndex(index) {
      this.$refs.displaySwiper.swiper.slideTo(index);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_swiper_container = resolveComponent("swiper-container");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="col-lg-3 d-none d-lg-block"><div class="d-grid gap-2"><button class="btn btn-light opacity-75 text-black-50 rounded-0 p-0 mb-2">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-up"] }, null, _parent));
  _push(`</button></div>`);
  _push(ssrRenderComponent(_component_swiper_container, {
    class: "navSwiper",
    ref: "navSwiper",
    direction: "vertical",
    "space-between": "5",
    "slides-per-view": "auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.images, ({ image_url }, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            onClick: ($event) => $options.changeDisplayIndex(index)
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", `/storage/${image_url}`)}${ssrRenderAttr("alt", index)}${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: `/storage/${image_url}`,
                    alt: index
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.images, ({ image_url }, index) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              onClick: ($event) => $options.changeDisplayIndex(index)
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: `/storage/${image_url}`,
                  alt: index
                }, null, 8, ["src", "alt"])
              ]),
              _: 2
            }, 1032, ["onClick"]);
          }), 256))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="d-grid gap-2"><button class="btn btn-light opacity-75 text-black-50 rounded-0 p-0 mt-2">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-down"] }, null, _parent));
  _push(`</button></div></div><div class="col-12 col-lg-9">`);
  _push(ssrRenderComponent(_component_swiper_container, {
    class: "displaySwiper",
    ref: "displaySwiper",
    pagination: { clickable: true }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.images, ({ image_url }, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", `/storage/${image_url}`)}${ssrRenderAttr("alt", index)}${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: `/storage/${image_url}`,
                    alt: index
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.images, ({ image_url }, index) => {
            return openBlock(), createBlock(_component_swiper_slide, null, {
              default: withCtx(() => [
                createVNode("img", {
                  src: `/storage/${image_url}`,
                  alt: index
                }, null, 8, ["src", "alt"])
              ]),
              _: 2
            }, 1024);
          }), 256))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductGallery.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProductGallery = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const ProductAccordion_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  name: "ProductAccordion",
  props: {
    description: String
  },
  components: {
    Link
  },
  mounted() {
    import("@popperjs/core/dist/umd/popper.min.js");
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "accordion accordion-flush",
    id: "accordionFlushExample"
  }, _attrs))}><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> Description </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"><div class="accordion-body">${ssrInterpolate($props.description)}</div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> Delivery &amp; Returns </button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><p> We offer free shipping withthin Canada on order over $50. Delivery times typically range from 3 to 7 business days after the order has been processed and shipped. If you&#39;re not completely satisfied with your purchase, we accept returns within 14 days. </p><p>For more details, please visit the `);
  _push(ssrRenderComponent(_component_Link, { href: "/shipping" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Shipping`);
      } else {
        return [
          createTextVNode("Shipping")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` or `);
  _push(ssrRenderComponent(_component_Link, { href: "/return" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Return`);
      } else {
        return [
          createTextVNode("Return")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` page. </p></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductAccordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductAccordion = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
register();
const _sfc_main = {
  name: "Product",
  components: {
    Layout,
    ProductGallery,
    ProductOptions,
    ProductAccordion,
    ProductCard,
    FeatureProducts
  },
  props: {
    product: Array,
    exploreProducts: Array
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_ProductGallery = resolveComponent("ProductGallery");
  const _component_ProductOptions = resolveComponent("ProductOptions");
  const _component_ProductAccordion = resolveComponent("ProductAccordion");
  const _component_FeatureProducts = resolveComponent("FeatureProducts");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container-lg my-md-5"${_scopeId}><div class="row"${_scopeId}><div class="col-12 col-md-6 col-lg-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ProductGallery, {
          images: $props.product[0].images
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-12 col-md-6 col-lg-7 py-3 px-md-5 py-md-0"${_scopeId}><p class="fs-3"${_scopeId}>${ssrInterpolate($props.product[0].product_name)}</p><p class="fs-5 fw-semibold mb-4"${_scopeId}>$${ssrInterpolate($props.product[0].price)}</p>`);
        _push2(ssrRenderComponent(_component_ProductOptions, {
          class: "mb-5",
          inventories: $props.product[0].inventories
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ProductAccordion, {
          description: $props.product[0].description
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
        _push2(ssrRenderComponent(_component_FeatureProducts, {
          class: "bg-light mt-5",
          products: $props.exploreProducts,
          title: "Explore More"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "container-lg my-md-5" }, [
            createVNode("div", { class: "row" }, [
              createVNode("div", { class: "col-12 col-md-6 col-lg-5" }, [
                createVNode(_component_ProductGallery, {
                  images: $props.product[0].images
                }, null, 8, ["images"])
              ]),
              createVNode("div", { class: "col-12 col-md-6 col-lg-7 py-3 px-md-5 py-md-0" }, [
                createVNode("p", { class: "fs-3" }, toDisplayString($props.product[0].product_name), 1),
                createVNode("p", { class: "fs-5 fw-semibold mb-4" }, "$" + toDisplayString($props.product[0].price), 1),
                createVNode(_component_ProductOptions, {
                  class: "mb-5",
                  inventories: $props.product[0].inventories
                }, null, 8, ["inventories"]),
                createVNode(_component_ProductAccordion, {
                  description: $props.product[0].description
                }, null, 8, ["description"])
              ])
            ]),
            createVNode(_component_FeatureProducts, {
              class: "bg-light mt-5",
              products: $props.exploreProducts,
              title: "Explore More"
            }, null, 8, ["products"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Product = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Product as default
};
