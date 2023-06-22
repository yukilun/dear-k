import { Link, router } from "@inertiajs/vue3";
import { O as OrderStatus } from "./OrderStatus-60b2f08b.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, L as Layout } from "./Layout-0dd77213.js";
import { C as CustomerLayout } from "./CustomerLayout-440f7e7f.js";
import "aos";
const _sfc_main$1 = {
  name: "OrderRow",
  props: {
    order: Object,
    payment_url: String
  },
  components: {
    Link,
    OrderStatus
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_OrderStatus = resolveComponent("OrderStatus");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row border-bottom text-md-center align-items-center p-2 p-md-0" }, _attrs))}><div class="col-md-2 py-1"><span class="d-md-none text-black-50">Order # </span>${ssrInterpolate(String($props.order.id).padStart(10, "0"))}</div><div class="col-md-3 py-1"><span class="d-md-none text-black-50">Created at  </span>${ssrInterpolate(new Date($props.order.created_at).toString().slice(4, 15))}</div><div class="col-md-2 py-1"><span class="d-md-none text-black-50">Total Amount:  </span>$${ssrInterpolate($props.order.total)}</div><div class="col-md-2 py-1 d-flex justify-content-md-center gap-2"><span class="d-md-none text-black-50">Status: </span>`);
  _push(ssrRenderComponent(_component_OrderStatus, {
    status: $props.order.status
  }, null, _parent));
  _push(`</div><div class="col-md-3 py-2 d-flex gap-2 justify-content-md-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/orders/${$props.order.id}`,
    class: "btn btn-secondary text-white rounded-0"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View `);
      } else {
        return [
          createTextVNode(" View ")
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($props.order.status === "unpaid") {
    _push(`<button class="btn btn-warning text-white rounded-0"> Pay </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/OrderRow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OrderRow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Orders",
  props: {
    orders: Array,
    payment_url: String
  },
  components: {
    Layout,
    CustomerLayout,
    Link,
    OrderRow
  },
  data() {
    return {
      hasUnpaidOrder: this.orders.findIndex((order) => order.status === "unpaid") > -1
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_CustomerLayout = resolveComponent("CustomerLayout");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_OrderRow = resolveComponent("OrderRow");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CustomerLayout, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p class="fs-4"${_scopeId2}>Your Orders</p>`);
              if ($data.hasUnpaidOrder) {
                _push3(`<p class="text-danger"${_scopeId2}> * Orders that remain unpaid for more than 3 hours will be automatically cancelled. </p>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="container-xl border border-bottom-0"${_scopeId2}><div class="row border-bottom py-3 bg-light text-center d-none d-md-flex"${_scopeId2}><div class="col-md-2"${_scopeId2}>Order #</div><div class="col-md-3"${_scopeId2}>Created Date</div><div class="col-md-2"${_scopeId2}>Total</div><div class="col-md-2"${_scopeId2}>Status</div><div class="col-md-3"${_scopeId2}>Action</div></div>`);
              if ($props.orders.length === 0) {
                _push3(`<div class="row border-bottom text-center p-3"${_scopeId2}><p class="fs-1 text-primary pt-2"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "magnifying-glass"] }, null, _parent3, _scopeId2));
                _push3(`</p><p${_scopeId2}>No order found.</p></div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<!--[-->`);
              ssrRenderList($props.orders, (order) => {
                _push3(ssrRenderComponent(_component_OrderRow, {
                  order,
                  payment_url: $props.payment_url
                }, null, _parent3, _scopeId2));
              });
              _push3(`<!--]--></div>`);
            } else {
              return [
                createVNode("p", { class: "fs-4" }, "Your Orders"),
                $data.hasUnpaidOrder ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-danger"
                }, " * Orders that remain unpaid for more than 3 hours will be automatically cancelled. ")) : createCommentVNode("", true),
                createVNode("div", { class: "container-xl border border-bottom-0" }, [
                  createVNode("div", { class: "row border-bottom py-3 bg-light text-center d-none d-md-flex" }, [
                    createVNode("div", { class: "col-md-2" }, "Order #"),
                    createVNode("div", { class: "col-md-3" }, "Created Date"),
                    createVNode("div", { class: "col-md-2" }, "Total"),
                    createVNode("div", { class: "col-md-2" }, "Status"),
                    createVNode("div", { class: "col-md-3" }, "Action")
                  ]),
                  $props.orders.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "row border-bottom text-center p-3"
                  }, [
                    createVNode("p", { class: "fs-1 text-primary pt-2" }, [
                      createVNode(_component_font_awesome_icon, { icon: ["fas", "magnifying-glass"] })
                    ]),
                    createVNode("p", null, "No order found.")
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList($props.orders, (order) => {
                    return openBlock(), createBlock(_component_OrderRow, {
                      order,
                      payment_url: $props.payment_url
                    }, null, 8, ["order", "payment_url"]);
                  }), 256))
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CustomerLayout, null, {
            default: withCtx(() => [
              createVNode("p", { class: "fs-4" }, "Your Orders"),
              $data.hasUnpaidOrder ? (openBlock(), createBlock("p", {
                key: 0,
                class: "text-danger"
              }, " * Orders that remain unpaid for more than 3 hours will be automatically cancelled. ")) : createCommentVNode("", true),
              createVNode("div", { class: "container-xl border border-bottom-0" }, [
                createVNode("div", { class: "row border-bottom py-3 bg-light text-center d-none d-md-flex" }, [
                  createVNode("div", { class: "col-md-2" }, "Order #"),
                  createVNode("div", { class: "col-md-3" }, "Created Date"),
                  createVNode("div", { class: "col-md-2" }, "Total"),
                  createVNode("div", { class: "col-md-2" }, "Status"),
                  createVNode("div", { class: "col-md-3" }, "Action")
                ]),
                $props.orders.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "row border-bottom text-center p-3"
                }, [
                  createVNode("p", { class: "fs-1 text-primary pt-2" }, [
                    createVNode(_component_font_awesome_icon, { icon: ["fas", "magnifying-glass"] })
                  ]),
                  createVNode("p", null, "No order found.")
                ])) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList($props.orders, (order) => {
                  return openBlock(), createBlock(_component_OrderRow, {
                    order,
                    payment_url: $props.payment_url
                  }, null, 8, ["order", "payment_url"]);
                }), 256))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Order/Orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Orders as default
};
