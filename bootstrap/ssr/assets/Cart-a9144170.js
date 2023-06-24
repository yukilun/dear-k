import { Link, router, usePage } from "@inertiajs/vue3";
import { _ as _export_sfc, L as Layout } from "./Layout-ef8a87b0.js";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import "aos";
const CartItem_vue_vue_type_style_index_0_scoped_ab67e329_lang = "";
const _sfc_main$1 = {
  name: "CartItem",
  components: {
    Link
  },
  props: {
    cartItem: Object
  },
  data() {
    return {
      quantity: this.cartItem.quantity
    };
  },
  methods: {
    addQuantity() {
      this.quantity = this.quantity + 1;
      router.post("/cart/update-quantity", {
        inventory_id: this.cartItem.inventory_id,
        quantity: this.quantity
      }, {
        preserveScroll: true
      });
    },
    reduceQuantity() {
      this.quantity = this.quantity - 1;
      router.post("/cart/update-quantity", {
        inventory_id: this.cartItem.inventory_id,
        quantity: this.quantity
      }, {
        preserveScroll: true
      });
    },
    removeCartItem() {
      router.post("/cart/remove", {
        inventory_id: this.cartItem.inventory_id
      }, {
        preserveScroll: true
      });
    }
  },
  computed: {
    isAvailable() {
      return this.cartItem.availability === "available";
    },
    disableReduceQuantity() {
      return this.quantity <= 1;
    },
    disableAddQuantity() {
      return this.quantity >= this.cartItem.inventory.stock_quantity;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "table-row row py-3 pt-5 pt-md-3 border-bottom position-relative" }, _attrs))} data-v-ab67e329><div class="col-md-6 d-flex gap-2" data-v-ab67e329><div class="p-0" data-v-ab67e329>`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/products/${$props.cartItem.inventory.product_id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", `/storage/${$props.cartItem.inventory.product.images[0].image_url}`)} class="product_image" alt="" data-v-ab67e329${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: `/storage/${$props.cartItem.inventory.product.images[0].image_url}`,
            class: "product_image",
            alt: ""
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="${ssrRenderClass([!$options.isAvailable && "opacity-50", "flex-grow-1 text-start p-0"])}" data-v-ab67e329>`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/products/${$props.cartItem.inventory.product_id}`,
    class: "link-dark link-underline link-underline-opacity-0"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="fw-semibold mb-1" data-v-ab67e329${_scopeId}>${ssrInterpolate($props.cartItem.inventory.product.product_name)}</p>`);
      } else {
        return [
          createVNode("p", { class: "fw-semibold mb-1" }, toDisplayString($props.cartItem.inventory.product.product_name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="text-black-50 mb-1" data-v-ab67e329><small data-v-ab67e329>Color: ${ssrInterpolate($props.cartItem.inventory.color.color_name)}</small></p><p class="text-black-50" data-v-ab67e329><small data-v-ab67e329>Size: ${ssrInterpolate($props.cartItem.inventory.size.size_name)}</small></p></div></div><div class="${ssrRenderClass([!$options.isAvailable && "opacity-50", "col-md-1 mb-3 text-md-center"])}" data-v-ab67e329><span class="d-md-none" data-v-ab67e329>Price:</span> $${ssrInterpolate($props.cartItem.inventory.product.price)}</div><div class="col-md-3 mb-3 text-md-center d-flex align-items-center d-md-block" data-v-ab67e329><span class="d-md-none" data-v-ab67e329>Quantity:</span><div class="flex-grow-1 d-flex justify-content-md-center py-0" data-v-ab67e329><button class="quantity-btn px-3 btn btn-primary text-white rounded-0"${ssrIncludeBooleanAttr($options.disableReduceQuantity) ? " disabled" : ""} data-v-ab67e329> - </button><div class="border w-50 py-1 text-center" data-v-ab67e329>${ssrInterpolate($props.cartItem.quantity)}</div><button class="quantity-btn px-3 btn btn-primary text-white rounded-0"${ssrIncludeBooleanAttr($options.disableAddQuantity) ? " disabled" : ""} data-v-ab67e329> + </button></div></div><div class="${ssrRenderClass([!$options.isAvailable && "opacity-50", "col-md-1 mb-3 text-md-center fw-semibold"])}" data-v-ab67e329><span class="d-md-none" data-v-ab67e329>Subtotal:</span> $${ssrInterpolate($props.cartItem.subtotal)}</div><div class="col-md-1 text-md-center" data-v-ab67e329><button class="link link-danger border-0 p-3 position-absolute top-0 end-0" data-v-ab67e329>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "x"] }, null, _parent));
  _push(`</button></div>`);
  if (!$options.isAvailable) {
    _push(`<div class="my-3 my-md-1 text-danger" data-v-ab67e329> * ${ssrInterpolate($props.cartItem.availability)}, please update quantity or remove this item </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Cart/CartItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CartItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ab67e329"]]);
const _sfc_main = {
  name: "Cart",
  props: {
    cartItems: Array,
    canCheckout: Boolean,
    total: String
  },
  components: {
    Layout,
    Link,
    CartItem
  },
  created() {
    this.page = usePage();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_Link = resolveComponent("Link");
  const _component_CartItem = resolveComponent("CartItem");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container-lg my-5"${_scopeId}><p class="fs-4 text-center text-uppercase text-center"${_scopeId}>Shopping Cart</p><div class="heading-line mb-5"${_scopeId}></div>`);
        if ($props.cartItems.length === 0) {
          _push2(`<div class="mb-4 text-center"${_scopeId}><p class="fs-1"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "cart-shopping"] }, null, _parent2, _scopeId));
          _push2(`</p><p class="mb-5"${_scopeId}>Your cart is empty.</p>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: "/",
            class: "btn btn-primary btn-lg px-5 text-white rounded-0 mb-4"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Go Shopping`);
              } else {
                return [
                  createTextVNode("Go Shopping")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.cartItems.length > 0) {
          _push2(`<div class="table container-lg"${_scopeId}><div class="table-header row d-none d-md-flex text-center text-uppercase text-primary py-2 border-bottom"${_scopeId}><div class="col-md-6"${_scopeId}>Product</div><div class="col-md-1"${_scopeId}>Price</div><div class="col-md-3"${_scopeId}>Quantity</div><div class="col-md-1"${_scopeId}>Subtotal</div><div class="col-md-1"${_scopeId}></div></div><!--[-->`);
          ssrRenderList($props.cartItems, (cartItem) => {
            _push2(ssrRenderComponent(_component_CartItem, { cartItem }, null, _parent2, _scopeId));
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.cartItems.length > 0) {
          _push2(`<div class="row justify-content-end"${_scopeId}><div class="col-md-6 col-lg-5 col-xl-4 py-2 px-4 px-md-2"${_scopeId}><div class="row mb-4 fs-5 fw-semibold text-uppercase"${_scopeId}><div class="col-6"${_scopeId}> Subtotal <br${_scopeId}><span class="fw-normal fs-6 text-capitalize"${_scopeId}> (${ssrInterpolate(_ctx.page.props.cart_total_quantity)} items) </span></div><div class="col-6"${_scopeId}>$${ssrInterpolate($props.total)}</div></div><div class="mb-4 text-black-50"${_scopeId}> Shipping and taxes calculated at checkout. </div><div class="d-grid"${_scopeId}>`);
          if ($props.canCheckout) {
            _push2(ssrRenderComponent(_component_Link, {
              href: "/checkout",
              class: "btn btn-primary btn-lg rounded-0 text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<small${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "lock"] }, null, _parent3, _scopeId2));
                  _push3(`</small>   Proceed to Checkout `);
                } else {
                  return [
                    createVNode("small", null, [
                      createVNode(_component_font_awesome_icon, { icon: ["fas", "lock"] })
                    ]),
                    createTextVNode("   Proceed to Checkout ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<button class="btn btn-primary btn-lg rounded-0 text-white"${ssrIncludeBooleanAttr(true) ? " disabled" : ""}${_scopeId}> Unable to Checkout </button>`);
          }
          _push2(`</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "container-lg my-5" }, [
            createVNode("p", { class: "fs-4 text-center text-uppercase text-center" }, "Shopping Cart"),
            createVNode("div", { class: "heading-line mb-5" }),
            $props.cartItems.length === 0 ? (openBlock(), createBlock("div", {
              key: 0,
              class: "mb-4 text-center"
            }, [
              createVNode("p", { class: "fs-1" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "cart-shopping"] })
              ]),
              createVNode("p", { class: "mb-5" }, "Your cart is empty."),
              createVNode(_component_Link, {
                href: "/",
                class: "btn btn-primary btn-lg px-5 text-white rounded-0 mb-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("Go Shopping")
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            $props.cartItems.length > 0 ? (openBlock(), createBlock("div", {
              key: 1,
              class: "table container-lg"
            }, [
              createVNode("div", { class: "table-header row d-none d-md-flex text-center text-uppercase text-primary py-2 border-bottom" }, [
                createVNode("div", { class: "col-md-6" }, "Product"),
                createVNode("div", { class: "col-md-1" }, "Price"),
                createVNode("div", { class: "col-md-3" }, "Quantity"),
                createVNode("div", { class: "col-md-1" }, "Subtotal"),
                createVNode("div", { class: "col-md-1" })
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList($props.cartItems, (cartItem) => {
                return openBlock(), createBlock(_component_CartItem, { cartItem }, null, 8, ["cartItem"]);
              }), 256))
            ])) : createCommentVNode("", true),
            $props.cartItems.length > 0 ? (openBlock(), createBlock("div", {
              key: 2,
              class: "row justify-content-end"
            }, [
              createVNode("div", { class: "col-md-6 col-lg-5 col-xl-4 py-2 px-4 px-md-2" }, [
                createVNode("div", { class: "row mb-4 fs-5 fw-semibold text-uppercase" }, [
                  createVNode("div", { class: "col-6" }, [
                    createTextVNode(" Subtotal "),
                    createVNode("br"),
                    createVNode("span", { class: "fw-normal fs-6 text-capitalize" }, " (" + toDisplayString(_ctx.page.props.cart_total_quantity) + " items) ", 1)
                  ]),
                  createVNode("div", { class: "col-6" }, "$" + toDisplayString($props.total), 1)
                ]),
                createVNode("div", { class: "mb-4 text-black-50" }, " Shipping and taxes calculated at checkout. "),
                createVNode("div", { class: "d-grid" }, [
                  $props.canCheckout ? (openBlock(), createBlock(_component_Link, {
                    key: 0,
                    href: "/checkout",
                    class: "btn btn-primary btn-lg rounded-0 text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("small", null, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "lock"] })
                      ]),
                      createTextVNode("   Proceed to Checkout ")
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock("button", {
                    key: 1,
                    class: "btn btn-primary btn-lg rounded-0 text-white",
                    disabled: true
                  }, " Unable to Checkout "))
                ])
              ])
            ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Cart/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Cart as default
};
