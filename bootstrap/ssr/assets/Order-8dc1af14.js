import { O as OrderStatus } from "./OrderStatus-a1633e6b.js";
import { resolveComponent, mergeProps, useSSRContext, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, L as Layout } from "./Layout-cbfb21e4.js";
import { Link, router } from "@inertiajs/vue3";
import { C as CustomerLayout } from "./CustomerLayout-7408cbd5.js";
import "aos";
const _sfc_main$7 = {
  name: "OrderInfo",
  props: {
    order: Object,
    shipper: Object
  },
  components: {
    OrderStatus
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_OrderStatus = resolveComponent("OrderStatus");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col mb-4 p-2" }, _attrs))}><p class="fs-5 mb-3">Order Information</p><div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Order No.:</div><div class="col-7 col-sm-9 col-md-7">${ssrInterpolate(String($props.order.id).padStart(10, "0"))}</div></div><div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Created Date:</div><div class="col-7 col-sm-9 col-md-7">${ssrInterpolate(Date($props.order.created_at).toString().slice(4, 15))}</div></div><div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Status:</div><div class="col-7 col-sm-9 col-md-7">`);
  _push(ssrRenderComponent(_component_OrderStatus, {
    status: $props.order.status
  }, null, _parent));
  _push(`</div></div>`);
  if ($props.order.status === "shipped" || $props.order.status === "completed") {
    _push(`<!--[-->`);
    if ($props.order.shipped_at) {
      _push(`<div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Ship Date:</div><div class="col-7 col-sm-9 col-md-7">${ssrInterpolate(Date($props.order.shipped_at).toString().slice(4, 15))}</div></div>`);
    } else {
      _push(`<!---->`);
    }
    if ((_a = $props.shipper) == null ? void 0 : _a.shipper_name) {
      _push(`<div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Shipper Name:</div><div class="col-7 col-sm-9 col-md-7">${ssrInterpolate($props.shipper.shipper_name)}</div></div>`);
    } else {
      _push(`<!---->`);
    }
    if ((_b = $props.order) == null ? void 0 : _b.tracking_number) {
      _push(`<div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Tracking No.:</div><div class="col-7 col-sm-9 col-md-7"><a${ssrRenderAttr("href", `${$props.shipper.tracking_url}${$props.order.tracking_number}`)} target="_blank">${ssrInterpolate($props.order.tracking_number)}</a></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/OrderInfo.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const OrderInfo = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const OrderItemRow_vue_vue_type_style_index_0_scoped_da7c621d_lang = "";
const _sfc_main$6 = {
  name: "OrderItemRow",
  props: {
    orderItem: Object
  },
  components: {
    Link
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row border-bottom text-center py-2" }, _attrs))} data-v-da7c621d><div class="col-md-6 d-flex gap-2 my-2" data-v-da7c621d><div class="p-0" data-v-da7c621d>`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/products/${$props.orderItem.inventory.product_id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", `/storage/${$props.orderItem.inventory.product.images[0].image_url}`)} class="product_image" alt="" data-v-da7c621d${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: `/storage/${$props.orderItem.inventory.product.images[0].image_url}`,
            class: "product_image",
            alt: ""
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex-grow-1 text-start p-0" data-v-da7c621d>`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/products/${$props.orderItem.inventory.product_id}`,
    class: "link-dark link-underline link-underline-opacity-0"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="mb-1" data-v-da7c621d${_scopeId}><small data-v-da7c621d${_scopeId}>${ssrInterpolate($props.orderItem.inventory.product.product_name)}</small></p>`);
      } else {
        return [
          createVNode("p", { class: "mb-1" }, [
            createVNode("small", null, toDisplayString($props.orderItem.inventory.product.product_name), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="text-black-50 mb-1" data-v-da7c621d><small data-v-da7c621d>Color: ${ssrInterpolate($props.orderItem.inventory.color.color_name)}</small></p><p class="text-black-50" data-v-da7c621d><small data-v-da7c621d>Size: ${ssrInterpolate($props.orderItem.inventory.size.size_name)}</small></p></div></div><div class="col-3 col-md-2 my-2 text-black-50" data-v-da7c621d>$${ssrInterpolate($props.orderItem.unit_price)}</div><div class="col-1 d-md-none my-2 text-black-50" data-v-da7c621d>x</div><div class="col-3 col-md-2 my-2 text-black-50" data-v-da7c621d>${ssrInterpolate($props.orderItem.quantity)}</div><div class="col-1 d-md-none my-2 text-black-50" data-v-da7c621d>=</div><div class="col-4 col-md-2 my-2" data-v-da7c621d>$${ssrInterpolate($props.orderItem.subtotal)}</div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/OrderItemRow.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const OrderItemRow = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-da7c621d"]]);
const _sfc_main$5 = {
  name: "OrderItemsTable",
  props: {
    order: Object,
    orderItems: Array
  },
  components: {
    OrderItemRow
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_OrderItemRow = resolveComponent("OrderItemRow");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "order-items-table container-xl border border-bottom-0" }, _attrs))}><div class="row border-bottom py-3 bg-light text-center d-none d-md-flex"><div class="col-md-6">Product</div><div class="col-md-2">Price</div><div class="col-md-2">Quantity</div><div class="col-md-2">Subtotal</div></div><div class="row border-bottom py-3 bg-light text-center d-flex d-md-none"><div>Ordered Items</div></div><!--[-->`);
  ssrRenderList($props.orderItems, (orderItem) => {
    _push(ssrRenderComponent(_component_OrderItemRow, { orderItem }, null, _parent));
  });
  _push(`<!--]--><div class="row border-bottom py-3 justify-content-end"><div class="col col-md-4 col-lg-3 mx-4 mx-lg-5"><div class="row text-black-50 mb-1"><div class="col-6">Subtotal</div><div class="col-6 text-end">$${ssrInterpolate($props.order.subtotal)}</div></div><div class="row text-black-50 mb-1"><div class="col-6">Shipping</div><div class="col-6 text-end">$${ssrInterpolate($props.order.shipping_fee)}</div></div><div class="row text-black-50 mb-2"><div class="col-6">Sales Tax</div><div class="col-6 text-end">$${ssrInterpolate($props.order.sales_tax)}</div></div><div class="row fw-semibold fs-5 mb-1 text-uppercase py-2 border-top"><div class="col-6">Total</div><div class="col-6 text-end">$${ssrInterpolate($props.order.total)}</div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/OrderItemsTable.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const OrderItemsTable = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const PaymentStatus_vue_vue_type_style_index_0_scoped_79a64dbc_lang = "";
const _sfc_main$4 = {
  name: "PaymentStatus",
  props: {
    status: String
  },
  computed: {
    getPaymentStatusClass() {
      switch (this.status) {
        case "paid":
          return "bg-success";
        case "pending":
          return "bg-warning";
        case "failed":
          return "bg-danger";
        default:
          return "bg-body-secondary";
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment-status d-flex align-items-center gap-2" }, _attrs))} data-v-79a64dbc><div class="${ssrRenderClass([$options.getPaymentStatusClass, "payment-status-dot"])}" data-v-79a64dbc></div> ${ssrInterpolate($props.status)}</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/PaymentStatus.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PaymentStatus = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-79a64dbc"]]);
const _sfc_main$3 = {
  name: "PaymentInfo",
  props: {
    payment: Object
  },
  components: {
    PaymentStatus
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PaymentStatus = resolveComponent("PaymentStatus");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col mb-4 p-2" }, _attrs))}><p class="fs-5 mb-3">Payment Information</p><div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Status:</div><div class="col-7 col-sm-9 col-md-7">`);
  _push(ssrRenderComponent(_component_PaymentStatus, {
    status: $props.payment.status
  }, null, _parent));
  _push(`</div></div><div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Amount:</div><div class="col-7 col-sm-9 col-md-7">$${ssrInterpolate($props.payment.amount)}</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/PaymentInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PaymentInfo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "ShippingAddress",
  props: {
    orderShippingDetail: Object
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col mb-4 p-2" }, _attrs))}><p class="fs-5 mb-3">Shipping Address</p><div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Name:</div><div class="col-7 col-sm-9 col-md-7">${ssrInterpolate($props.orderShippingDetail.name)}</div></div><div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Phone:</div><div class="col-7 col-sm-9 col-md-7">${ssrInterpolate($props.orderShippingDetail.phone.replace(/(\d{3})(\d{3})(\d{4})/, "+1 ($1) $2-$3"))}</div></div><div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Address:</div><div class="col-7 col-sm-9 col-md-7"><p class="mb-0">${ssrInterpolate($props.orderShippingDetail.street_address)}</p><p class="mb-0">${ssrInterpolate($props.orderShippingDetail.city)} ${ssrInterpolate($props.orderShippingDetail.province_code)} ${ssrInterpolate($props.orderShippingDetail.postal_code.slice(0, 3) + " " + $props.orderShippingDetail.postal_code.slice(3, 6))}</p></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/ShippingAddress.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ShippingAddress = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "BillingAddress",
  props: {
    orderBillingDetail: Object
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col p-2" }, _attrs))}><p class="fs-5 mb-3">Billing Address</p><div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Name:</div><div class="col-7 col-sm-9 col-md-7">${ssrInterpolate($props.orderBillingDetail.name)}</div></div><div class="row text-black-50 mb-1"><div class="col-5 col-sm-3 col-md-5">Address:</div><div class="col-7 col-sm-9 col-md-7"><p class="mb-0">${ssrInterpolate($props.orderBillingDetail.street_address)}</p><p class="mb-0">${ssrInterpolate($props.orderBillingDetail.city)} ${ssrInterpolate($props.orderBillingDetail.province_code)} ${ssrInterpolate($props.orderBillingDetail.postal_code.slice(0, 3) + " " + $props.orderBillingDetail.postal_code.slice(3, 6))}</p></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/BillingAddress.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BillingAddress = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Order",
  props: {
    order: Object,
    orderShippingDetail: Object,
    orderBillingDetail: Object,
    orderItems: Array,
    payment: Object,
    shipper: Object,
    payment_url: String
  },
  components: {
    Layout,
    CustomerLayout,
    Link,
    OrderItemsTable,
    OrderInfo,
    PaymentInfo,
    ShippingAddress,
    BillingAddress
  },
  methods: {
    checkoutOrder() {
      router.post("/checkout/" + this.order.id, {}, {
        onSuccess: () => {
          window.location.href = this.payment_url;
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_CustomerLayout = resolveComponent("CustomerLayout");
  const _component_Link = resolveComponent("Link");
  const _component_OrderItemsTable = resolveComponent("OrderItemsTable");
  const _component_OrderInfo = resolveComponent("OrderInfo");
  const _component_PaymentInfo = resolveComponent("PaymentInfo");
  const _component_ShippingAddress = resolveComponent("ShippingAddress");
  const _component_BillingAddress = resolveComponent("BillingAddress");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CustomerLayout, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mb-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Link, {
                href: "/orders",
                class: "link link-underline link-underline-opacity-0",
                "preserve-scroll": ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` ❮  Back to All Orders `);
                  } else {
                    return [
                      createTextVNode(" ❮  Back to All Orders ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><p class="fs-4"${_scopeId2}>Order Summary</p>`);
              if ($props.order.status === "unpaid") {
                _push3(`<p class="text-danger d-flex flex-column flex-md-row align-items-md-center"${_scopeId2}> * This order will be automatically cancelled if it remains unpaid for more than 3 hours.   <button class="my-3 my-md-0 btn btn-warning text-white rounded-0"${_scopeId2}> Pay now </button></p>`);
              } else {
                _push3(`<!---->`);
              }
              if ($props.order.status === "cancelled") {
                _push3(`<div class="text-danger"${_scopeId2}><p class="mb-2"${_scopeId2}>This order has been automatically cancelled as it remains unpaid for more than 3 hours.</p><p${_scopeId2}>If you wish to order the items, please place the order again.</p></div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_OrderItemsTable, {
                order: $props.order,
                orderItems: $props.orderItems,
                class: $props.order.status === "cancelled" && `opacity-50`
              }, null, _parent3, _scopeId2));
              _push3(`<div class="${ssrRenderClass([$props.order.status === "cancelled" && `opacity-50`, "container-xl px-3 pt-4 pt-md-5"])}"${_scopeId2}><div class="row row-cols-1 row-cols-md-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_OrderInfo, {
                order: $props.order,
                shipper: $props.shipper
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_PaymentInfo, { payment: $props.payment }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ShippingAddress, { orderShippingDetail: $props.orderShippingDetail }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_BillingAddress, { orderBillingDetail: $props.orderBillingDetail }, null, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "mb-4" }, [
                  createVNode(_component_Link, {
                    href: "/orders",
                    class: "link link-underline link-underline-opacity-0",
                    "preserve-scroll": ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" ❮  Back to All Orders ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("p", { class: "fs-4" }, "Order Summary"),
                $props.order.status === "unpaid" ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-danger d-flex flex-column flex-md-row align-items-md-center"
                }, [
                  createTextVNode(" * This order will be automatically cancelled if it remains unpaid for more than 3 hours.   "),
                  createVNode("button", {
                    onClick: $options.checkoutOrder,
                    class: "my-3 my-md-0 btn btn-warning text-white rounded-0"
                  }, " Pay now ", 8, ["onClick"])
                ])) : createCommentVNode("", true),
                $props.order.status === "cancelled" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-danger"
                }, [
                  createVNode("p", { class: "mb-2" }, "This order has been automatically cancelled as it remains unpaid for more than 3 hours."),
                  createVNode("p", null, "If you wish to order the items, please place the order again.")
                ])) : createCommentVNode("", true),
                createVNode(_component_OrderItemsTable, {
                  order: $props.order,
                  orderItems: $props.orderItems,
                  class: $props.order.status === "cancelled" && `opacity-50`
                }, null, 8, ["order", "orderItems", "class"]),
                createVNode("div", {
                  class: ["container-xl px-3 pt-4 pt-md-5", $props.order.status === "cancelled" && `opacity-50`]
                }, [
                  createVNode("div", { class: "row row-cols-1 row-cols-md-2" }, [
                    createVNode(_component_OrderInfo, {
                      order: $props.order,
                      shipper: $props.shipper
                    }, null, 8, ["order", "shipper"]),
                    createVNode(_component_PaymentInfo, { payment: $props.payment }, null, 8, ["payment"]),
                    createVNode(_component_ShippingAddress, { orderShippingDetail: $props.orderShippingDetail }, null, 8, ["orderShippingDetail"]),
                    createVNode(_component_BillingAddress, { orderBillingDetail: $props.orderBillingDetail }, null, 8, ["orderBillingDetail"])
                  ])
                ], 2)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CustomerLayout, null, {
            default: withCtx(() => [
              createVNode("div", { class: "mb-4" }, [
                createVNode(_component_Link, {
                  href: "/orders",
                  class: "link link-underline link-underline-opacity-0",
                  "preserve-scroll": ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(" ❮  Back to All Orders ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("p", { class: "fs-4" }, "Order Summary"),
              $props.order.status === "unpaid" ? (openBlock(), createBlock("p", {
                key: 0,
                class: "text-danger d-flex flex-column flex-md-row align-items-md-center"
              }, [
                createTextVNode(" * This order will be automatically cancelled if it remains unpaid for more than 3 hours.   "),
                createVNode("button", {
                  onClick: $options.checkoutOrder,
                  class: "my-3 my-md-0 btn btn-warning text-white rounded-0"
                }, " Pay now ", 8, ["onClick"])
              ])) : createCommentVNode("", true),
              $props.order.status === "cancelled" ? (openBlock(), createBlock("div", {
                key: 1,
                class: "text-danger"
              }, [
                createVNode("p", { class: "mb-2" }, "This order has been automatically cancelled as it remains unpaid for more than 3 hours."),
                createVNode("p", null, "If you wish to order the items, please place the order again.")
              ])) : createCommentVNode("", true),
              createVNode(_component_OrderItemsTable, {
                order: $props.order,
                orderItems: $props.orderItems,
                class: $props.order.status === "cancelled" && `opacity-50`
              }, null, 8, ["order", "orderItems", "class"]),
              createVNode("div", {
                class: ["container-xl px-3 pt-4 pt-md-5", $props.order.status === "cancelled" && `opacity-50`]
              }, [
                createVNode("div", { class: "row row-cols-1 row-cols-md-2" }, [
                  createVNode(_component_OrderInfo, {
                    order: $props.order,
                    shipper: $props.shipper
                  }, null, 8, ["order", "shipper"]),
                  createVNode(_component_PaymentInfo, { payment: $props.payment }, null, 8, ["payment"]),
                  createVNode(_component_ShippingAddress, { orderShippingDetail: $props.orderShippingDetail }, null, 8, ["orderShippingDetail"]),
                  createVNode(_component_BillingAddress, { orderBillingDetail: $props.orderBillingDetail }, null, 8, ["orderBillingDetail"])
                ])
              ], 2)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Order/Order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Order = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Order as default
};
