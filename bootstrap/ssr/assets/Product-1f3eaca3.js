import { Link, useForm, usePage } from "@inertiajs/vue3";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, L as Layout } from "./Layout-0dd77213.js";
import { register } from "swiper/element/bundle";
import { P as ProductCard } from "./ProductCard-2b8d9c9f.js";
import { F as FeatureProducts } from "./FeatureProducts-aae37762.js";
import "aos";
const MessageModal_vue_vue_type_style_index_0_scoped_8613c4b7_lang = "";
const _sfc_main$4 = {
  name: "MessageModal",
  props: {
    isOpenModal: Boolean,
    closeModal: Function,
    status: String
  },
  components: {
    Link
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["message-modal z-3 position-fixed top-0 start-0 w-100 h-100 bg-black", !$props.isOpenModal && "invisible"],
    style: { "--bs-bg-opacity": ".5" }
  }, _attrs))} data-v-8613c4b7><div class="${ssrRenderClass([$props.isOpenModal && "active", "message-modal-content position-absolute top-50 start-50 px-3 py-4 bg-light"])}" data-v-8613c4b7><div class="text-end" data-v-8613c4b7><button type="button" class="link-primary bg-light border-0 mb-4" data-v-8613c4b7>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "x"] }, null, _parent));
  _push(`</button></div><div class="px-3 py-3 text-center" data-v-8613c4b7>`);
  if ($props.status === "error") {
    _push(`<div data-v-8613c4b7><p class="fs-1 text-danger" data-v-8613c4b7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fa", "circle-xmark"] }, null, _parent));
    _push(`</p><p class="fs-5 text-uppercase" data-v-8613c4b7>Cannot add to cart</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.status === "success") {
    _push(`<div data-v-8613c4b7><p class="fs-1 text-success" data-v-8613c4b7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fa", "circle-check"] }, null, _parent));
    _push(`</p><p class="fs-5 text-uppercase" data-v-8613c4b7>Added to cart</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="d-grid gap-2 mt-5" data-v-8613c4b7>`);
  if ($props.status === "success") {
    _push(ssrRenderComponent(_component_Link, {
      href: "/cart",
      class: "btn btn-primary py-2 text-white rounded-0 mb-2"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`View Cart and Checkout`);
        } else {
          return [
            createTextVNode("View Cart and Checkout")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<button type="button" class="btn btn-secondary py-2 text-white rounded-0" data-v-8613c4b7>Continue Shopping</button></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Product/MessageModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MessageModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-8613c4b7"]]);
const ProductOptions_vue_vue_type_style_index_0_scoped_7b060254_lang = "";
const _sfc_main$3 = {
  name: "ProductOptions",
  components: {
    MessageModal
  },
  props: {
    inventories: Array
  },
  data() {
    return {
      colors: [],
      sizes: [],
      selection: { color_id: -1, size_id: -1, quantity: 1 },
      form: null,
      status: null,
      isOpenModal: false
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
      const inventory = this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === this.selection.size_id);
      if (inventory) {
        this.form = useForm({
          inventory_id: inventory.id,
          quantity: this.selection.quantity
        });
        this.form.post("/cart/add", {
          preserveScroll: true,
          onError: () => {
            this.status = "error";
            this.isOpenModal = true;
          },
          onSuccess: () => {
            this.status = "success";
            this.isOpenModal = true;
          }
        });
      }
    },
    closeModal() {
      this.isOpenModal = false;
    }
  },
  created() {
    this.page = usePage();
  },
  mounted() {
    const colorIds = [...new Set(this.inventories.map((inventory) => inventory.color_id))];
    const colors = colorIds.map((id) => this.inventories.find((inventory) => inventory.color_id === id).color);
    colors.sort((a, b) => {
      const sumA = parseInt(a.color_hex.slice(0, 2), 16) + parseInt(a.color_hex.slice(2, 4), 16) + parseInt(a.color_hex.slice(4, 6), 16);
      const sumB = parseInt(b.color_hex.slice(0, 2), 16) + parseInt(b.color_hex.slice(2, 4), 16) + parseInt(b.color_hex.slice(4, 6), 16);
      return sumB - sumA;
    });
    this.colors = colors;
    const sizeIds = [...new Set(this.inventories.map((inventory) => inventory.size_id))];
    this.sizes = sizeIds.map((id) => this.inventories.find((inventory) => inventory.size_id === id).size);
    var instockSizeId = -1;
    const instockColor = colors.find((color) => {
      const instockInventory = this.inventories.find((inventory) => inventory.color_id === color.id && inventory.stock_quantity > 0);
      if (!instockInventory)
        return false;
      instockSizeId = instockInventory.size_id;
      return true;
    });
    if (!instockColor) {
      this.selection.color_id = colorIds[0];
      this.selection.size_id = sizeIds[0];
    } else {
      this.selection.color_id = instockColor.id;
      this.selection.size_id = instockSizeId;
    }
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
        return ((_a = this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === this.selection.size_id)) == null ? void 0 : _a.stock_quantity) <= this.selection.quantity;
      }
      return false;
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
  const _component_MessageModal = resolveComponent("MessageModal");
  _push(`<form${ssrRenderAttrs(mergeProps({ method: "get" }, _attrs))} data-v-7b060254>`);
  _push(ssrRenderComponent(_component_MessageModal, {
    isOpenModal: $data.isOpenModal,
    closeModal: $options.closeModal,
    status: $data.status
  }, null, _parent));
  _push(`<div class="color-options mb-4" data-v-7b060254><div class="mb-2 fw-semibold" data-v-7b060254>Color:  ${ssrInterpolate($options.getSelectionColorName)}</div><div class="d-flex gap-2 flex-wrap" data-v-7b060254><!--[-->`);
  ssrRenderList($data.colors, ({ id, color_hex }) => {
    _push(`<div class="color-option" data-v-7b060254><input class="d-none" type="radio" name="color_id"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selection.color_id, id)) ? " checked" : ""}${ssrRenderAttr("value", id)}${ssrRenderAttr("id", `color-${id}`)} data-v-7b060254><label${ssrRenderAttr("for", `color-${id}`)} class="${ssrRenderClass([id === $data.selection.color_id && "active", "radio-color"])}" style="${ssrRenderStyle(`background: #${color_hex}`)}" data-v-7b060254></label></div>`);
  });
  _push(`<!--]--></div></div><div class="size-options mb-4" data-v-7b060254><div class="mb-2 fw-semibold" data-v-7b060254>Size:  ${ssrInterpolate($options.getSelectionSizeName)}</div><div class="d-flex gap-2 flex-wrap" data-v-7b060254><!--[-->`);
  ssrRenderList($data.sizes, ({ id, size_name }) => {
    _push(`<div class="size-option" data-v-7b060254><input class="d-none" type="radio" name="size_id"${ssrIncludeBooleanAttr(ssrLooseEqual($data.selection.size_id, id)) ? " checked" : ""}${ssrRenderAttr("value", id)}${ssrRenderAttr("id", `size-${id}`)} data-v-7b060254><label${ssrRenderAttr("for", `size-${id}`)} class="${ssrRenderClass([[id === $data.selection.size_id && "active", $options.disableSize(id) && "disable"], "radio-size"])}" data-v-7b060254>${ssrInterpolate(size_name)}</label></div>`);
  });
  _push(`<!--]--></div></div><div style="${ssrRenderStyle(!$options.soldOut ? null : { display: "none" })}" class="quantity" data-v-7b060254><div class="mb-2 fw-semibold" data-v-7b060254>Quantity: </div><div class="d-flex" data-v-7b060254><input class="d-none" type="number" name="quantity"${ssrRenderAttr("value", $data.selection.quantity)} data-v-7b060254><button type="button" class="quantity-btn btn btn-outline-primary rounded-0 border px-3"${ssrIncludeBooleanAttr($options.disableReduceQuantity) ? " disabled" : ""} style="${ssrRenderStyle(`--bs-btn-hover-color: white; --bs-btn-active-color: white;`)}" data-v-7b060254> - </button><div class="flex-grow-1 h-full py-1 text-center border-top border-bottom" data-v-7b060254>${ssrInterpolate($data.selection.quantity)}</div><button type="button" class="quantity-btn btn btn-outline-primary rounded-0 border px-3"${ssrIncludeBooleanAttr($options.disableAddQuantity) ? " disabled" : ""} style="${ssrRenderStyle(`--bs-btn-hover-color: white`)}" data-v-7b060254> + </button></div><div class="stockStatus mt-2" data-v-7b060254><small class="text-black-50" data-v-7b060254>${ssrInterpolate($options.getStockStatus)}</small></div></div><div class="addToCart d-grid mt-5" data-v-7b060254><button type="submit"${ssrIncludeBooleanAttr($options.soldOut) ? " disabled" : ""} class="btn btn-primary btn-lg rounded-0 text-white fw-semibold" data-v-7b060254>${ssrInterpolate($options.soldOut ? "Sold Out" : "Add To Cart")}</button></div></form>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Product/ProductOptions.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProductOptions = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-7b060254"]]);
const ProductGallery_vue_vue_type_style_index_0_scoped_df1406b1_lang = "";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))} data-v-df1406b1><div class="col-lg-3 d-none d-lg-block" data-v-df1406b1><div class="d-grid gap-2" data-v-df1406b1><button class="btn btn-light opacity-75 text-black-50 rounded-0 p-0 mb-2" data-v-df1406b1>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-up"] }, null, _parent));
  _push(`</button></div><swiper-container class="navSwiper" direction="vertical" space-between="5" slides-per-view="auto" data-v-df1406b1><!--[-->`);
  ssrRenderList($props.images, ({ image_url }, index) => {
    _push(`<swiper-slide data-v-df1406b1><img${ssrRenderAttr("src", `/storage/${image_url}`)}${ssrRenderAttr("alt", index)} data-v-df1406b1></swiper-slide>`);
  });
  _push(`<!--]--></swiper-container><div class="d-grid gap-2" data-v-df1406b1><button class="btn btn-light opacity-75 text-black-50 rounded-0 p-0 mt-2" data-v-df1406b1>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-down"] }, null, _parent));
  _push(`</button></div></div><div class="col-12 col-lg-9" data-v-df1406b1><swiper-container class="displaySwiper"${ssrRenderAttr("pagination", { clickable: true })} data-v-df1406b1><!--[-->`);
  ssrRenderList($props.images, ({ image_url }, index) => {
    _push(`<swiper-slide data-v-df1406b1><img${ssrRenderAttr("src", `/storage/${image_url}`)}${ssrRenderAttr("alt", index)} data-v-df1406b1></swiper-slide>`);
  });
  _push(`<!--]--></swiper-container></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Product/ProductGallery.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProductGallery = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-df1406b1"]]);
const _imports_0 = "/build/assets/size_chart-b2f24c14.png";
const ProductAccordion_vue_vue_type_style_index_0_scoped_9262c8df_lang = "";
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
    id: "product-accordion"
  }, _attrs))} data-v-9262c8df><div class="accordion-item" data-v-9262c8df><h2 class="accordion-header" data-v-9262c8df><button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" data-v-9262c8df> Description </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#product-accordion" data-v-9262c8df><div class="accordion-body" data-v-9262c8df>${ssrInterpolate($props.description)}</div></div></div><div class="accordion-item" data-v-9262c8df><h2 class="accordion-header" data-v-9262c8df><button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" data-v-9262c8df> Size Chart </button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#product-accordion" data-v-9262c8df><div class="accordion-body text-center" data-v-9262c8df><img class="size-chart"${ssrRenderAttr("src", _imports_0)} alt="size chart" data-v-9262c8df></div></div></div><div class="accordion-item" data-v-9262c8df><h2 class="accordion-header" data-v-9262c8df><button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" data-v-9262c8df> Delivery &amp; Returns </button></h2><div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#product-accordion" data-v-9262c8df><div class="accordion-body" data-v-9262c8df><p data-v-9262c8df> We offer free shipping withthin Canada on order over $50. Delivery times typically range from 3 to 7 business days after the order has been processed and shipped. If you&#39;re not completely satisfied with your purchase, we accept returns within 14 days. </p><p data-v-9262c8df>For more details, please visit the `);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Product/ProductAccordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductAccordion = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9262c8df"]]);
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
        _push2(`</div><div class="col-12 col-md-6 col-lg-7 py-3 px-md-5 py-md-0"${_scopeId}><p class="fs-4"${_scopeId}>${ssrInterpolate($props.product[0].product_name)}</p><p class="fs-5 fw-semibold mb-4"${_scopeId}>$${ssrInterpolate($props.product[0].price)}</p>`);
        _push2(ssrRenderComponent(_component_ProductOptions, {
          class: "mb-5",
          inventories: $props.product[0].inventories
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ProductAccordion, {
          description: $props.product[0].description
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div>`);
        _push2(ssrRenderComponent(_component_FeatureProducts, {
          class: "bg-light mt-5",
          products: $props.exploreProducts,
          title: "Explore More"
        }, null, _parent2, _scopeId));
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
                createVNode("p", { class: "fs-4" }, toDisplayString($props.product[0].product_name), 1),
                createVNode("p", { class: "fs-5 fw-semibold mb-4" }, "$" + toDisplayString($props.product[0].price), 1),
                createVNode(_component_ProductOptions, {
                  class: "mb-5",
                  inventories: $props.product[0].inventories
                }, null, 8, ["inventories"]),
                createVNode(_component_ProductAccordion, {
                  description: $props.product[0].description
                }, null, 8, ["description"])
              ])
            ])
          ]),
          createVNode(_component_FeatureProducts, {
            class: "bg-light mt-5",
            products: $props.exploreProducts,
            title: "Explore More"
          }, null, 8, ["products"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Product = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Product as default
};
