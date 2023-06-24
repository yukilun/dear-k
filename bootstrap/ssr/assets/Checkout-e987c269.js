import { Link, useForm } from "@inertiajs/vue3";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, resolveDirective, openBlock, createBlock, Fragment, renderList, withDirectives, createCommentVNode, vShow } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, L as Layout } from "./Layout-0dd77213.js";
import { Field, Form, configure } from "vee-validate";
import * as yup from "yup";
import { vMaska } from "maska";
import "aos";
const OrderSummaryItem_vue_vue_type_style_index_0_scoped_2ce7a58c_lang = "";
const _sfc_main$2 = {
  name: "OrderSummaryItem",
  props: {
    cartItem: Object
  },
  components: { Link }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-2 mb-3" }, _attrs))} data-v-2ce7a58c><div class="p-0" data-v-2ce7a58c>`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/products/${$props.cartItem.inventory.product_id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", `/storage/${$props.cartItem.inventory.product.images[0].image_url}`)} class="product_image" alt="" data-v-2ce7a58c${_scopeId}>`);
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
  _push(`</div><div class="flex-grow-1 text-start p-0" data-v-2ce7a58c>`);
  _push(ssrRenderComponent(_component_Link, {
    href: `/products/${$props.cartItem.inventory.product_id}`,
    class: "link-dark link-underline link-underline-opacity-0"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="fw-semibold lh-1 mb-2" data-v-2ce7a58c${_scopeId}><small data-v-2ce7a58c${_scopeId}>${ssrInterpolate($props.cartItem.inventory.product.product_name)}</small></p>`);
      } else {
        return [
          createVNode("p", { class: "fw-semibold lh-1 mb-2" }, [
            createVNode("small", null, toDisplayString($props.cartItem.inventory.product.product_name), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="text-black-50 lh-1 mb-1" data-v-2ce7a58c><small data-v-2ce7a58c>Color: ${ssrInterpolate($props.cartItem.inventory.color.color_name)}</small></p><p class="text-black-50 lh-1 mb-1" data-v-2ce7a58c><small data-v-2ce7a58c>Size: ${ssrInterpolate($props.cartItem.inventory.size.size_name)}</small></p><p class="text-black-50 lh-1 mb-1" data-v-2ce7a58c><small data-v-2ce7a58c>Qty: ${ssrInterpolate($props.cartItem.quantity)}</small></p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkout/OrderSummaryItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const OrderSummaryItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-2ce7a58c"]]);
const _sfc_main$1 = {
  name: "OrderSummary",
  components: {
    OrderSummaryItem
  },
  props: {
    cartItems: Array,
    total: String,
    shippingProvince: Object
  },
  mounted() {
    import("@popperjs/core/dist/umd/popper.min.js");
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  },
  computed: {
    isFreeShipping() {
      const totalAmount = parseFloat(this.total);
      return totalAmount >= 100;
    },
    getSalesTax() {
      if (!this.shippingProvince)
        return "TBD";
      return Math.round(parseFloat(this.total) * this.shippingProvince.sales_tax_rate * 100) / 100;
    },
    getTotal() {
      const salesTax = this.getSalesTax;
      if (salesTax === "TBD")
        return "TBD";
      return parseFloat(this.total) + salesTax + (this.isFreeShipping ? 0 : 15);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_OrderSummaryItem = resolveComponent("OrderSummaryItem");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "col-md-5 col-lg-4 order-md-2 accordion mb-4",
    id: "checkout_accordion"
  }, _attrs))}><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button fs-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Order Summary </button></h2><div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#checkout_accordion"><div class="accordion-body"><div class="items"><!--[-->`);
  ssrRenderList($props.cartItems, (cartItem) => {
    _push(ssrRenderComponent(_component_OrderSummaryItem, { cartItem }, null, _parent));
  });
  _push(`<!--]--></div><div class="container pt-4"><div class="row text-black-50"><div class="col-6">Subtotal</div><div class="col-6 text-end">$${ssrInterpolate($props.total)}</div></div><div class="row text-black-50"><div class="col-6">Shipping</div><div class="col-6 text-end">${ssrInterpolate($options.isFreeShipping ? "FREE" : "$15.00")}</div></div><div class="row text-black-50 mb-2"><div class="col-6">Sales Tax</div><div class="col-6 text-end">${ssrInterpolate($options.getSalesTax == "TBD" ? "TBD" : "$" + $options.getSalesTax.toFixed(2))}</div></div><div class="row fw-bold border-top py-2 text-uppercase"><div class="col-6">Total</div><div class="col-6 text-end fs-5">${ssrInterpolate($options.getTotal == "TBD" ? "TBD" : "$" + $options.getTotal.toFixed(2))}</div></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkout/OrderSummary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OrderSummary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Checkout",
  components: {
    Layout,
    OrderSummary,
    Field,
    Form
  },
  directives: {
    maska: vMaska
  },
  props: {
    cartItems: Array,
    canCheckout: Boolean,
    total: String,
    user: Object,
    provinces: Array,
    payment_url: String
  },
  data() {
    return {
      shippingProvince: null,
      shipping_phone: {
        unmasked: ""
      },
      shipping_postal_code: {
        unmasked: ""
      },
      billing_postal_code: {
        unmasked: ""
      },
      sameAddress: null,
      form: null
    };
  },
  methods: {
    changeShippingProvince() {
      const code = this.$refs.vform.getValues().shipping_province_code;
      this.shippingProvince = this.provinces.find((province) => province.code == code);
    },
    setSameAddress() {
      if (!this.sameAddress) {
        this.sameAddress = true;
        const formValues = this.$refs.vform.getValues();
        this.$refs.vform.setValues({
          ...formValues,
          billing_name: formValues.shipping_name,
          billing_street_address: formValues.shipping_street_address,
          billing_city: formValues.shipping_city,
          billing_province_code: formValues.shipping_province_code,
          billing_postal_code: formValues.shipping_postal_code,
          billing_country: formValues.shipping_country,
          same_address: true
        });
      }
    },
    setDifferentAddress() {
      if (this.sameAddress !== false) {
        this.sameAddress = false;
        this.$refs.vform.setValues({
          billing_name: "",
          billing_street_address: "",
          billing_city: "",
          billing_province_code: "",
          billing_postal_code: "",
          billing_country: "Canada",
          same_address: false
        });
      }
    },
    handleSubmit(values) {
      var unmaskedValues = {
        ...values,
        shipping_phone: this.shipping_phone.unmasked,
        shipping_postal_code: this.shipping_postal_code.unmasked.toUpperCase(),
        billing_postal_code: this.billing_postal_code.unmasked.toUpperCase()
      };
      if (this.sameAddress) {
        unmaskedValues = {
          ...unmaskedValues,
          billing_name: unmaskedValues.shipping_name,
          billing_street_address: unmaskedValues.shipping_street_address,
          billing_city: unmaskedValues.shipping_city,
          billing_province_code: unmaskedValues.shipping_province_code,
          billing_postal_code: unmaskedValues.shipping_postal_code,
          billing_country: unmaskedValues.shipping_country
        };
      }
      this.form = useForm(unmaskedValues);
      this.form.post("/checkout", {
        onSuccess: () => {
          window.location.href = this.payment_url;
        }
      });
    }
  },
  created() {
    this.schema = yup.object({
      shipping_name: yup.string().required("name is required").max(255),
      shipping_phone: yup.string().required("phone is required").matches(/^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/, "enter the 10-digit phone number"),
      shipping_street_address: yup.string().required("street address is required").max(100),
      shipping_city: yup.string().required("city is required").max(50),
      shipping_province_code: yup.string().required("province is required"),
      shipping_postal_code: yup.string().required("postal code is required").matches(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/, "invalid postal code"),
      shipping_country: yup.string().required("country is required"),
      billing_name: yup.string().required("name is required").max(255),
      billing_street_address: yup.string().required("street address is required").max(100),
      billing_city: yup.string().required("city is required").max(50),
      billing_province_code: yup.string().required("province is required"),
      billing_postal_code: yup.string().required("postal code is required").matches(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/, "invalid postal code"),
      billing_country: yup.string().required("country is required"),
      same_address: yup.boolean().required("you must specify your billing address.")
    });
    this.initialValues = {
      shipping_name: this.user.name,
      shipping_phone: "1" + this.user.customer.phone,
      shipping_street_address: this.user.customer.street_address,
      shipping_city: this.user.customer.city,
      shipping_province_code: this.user.customer.province_code,
      shipping_postal_code: this.user.customer.postal_code,
      shipping_country: "Canada",
      billing_country: "Canada",
      same_address: null
    };
    this.shippingProvince = this.provinces.find((province) => province.code == this.user.customer.province_code);
    configure({
      validateOnBlur: false,
      validateOnChange: false,
      validateOnInput: false,
      validateOnModelUpdate: true
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_OrderSummary = resolveComponent("OrderSummary");
  const _component_Form = resolveComponent("Form");
  const _component_Field = resolveComponent("Field");
  const _directive_maska = resolveDirective("maska");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container-lg my-5"${_scopeId}><p class="fs-4 text-center text-uppercase text-center"${_scopeId}>Checkout</p><div class="heading-line mb-5"${_scopeId}></div><div class="container-xl"${_scopeId}><div class="row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_OrderSummary, {
          cartItems: $props.cartItems,
          total: $props.total,
          shippingProvince: $data.shippingProvince
        }, null, _parent2, _scopeId));
        _push2(`<div class="col-md-7 col-lg-8 order-md-1"${_scopeId}><div class="border rounded p-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Form, {
          onSubmit: $options.handleSubmit,
          "validation-schema": _ctx.schema,
          "initial-values": _ctx.initialValues,
          ref: "vform"
        }, {
          default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z;
            if (_push3) {
              _push3(`<p class="fs-5 fw-semi-bold"${_scopeId2}>Shipping Details</p><p class="text-black-50"${_scopeId2}>Please ensure the following shipping address is correct.</p><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "text",
                class: ["form-control", (errors.shipping_name || ((_a = $data.form) == null ? void 0 : _a.errors.shipping_name)) && "is-invalid"],
                name: "shipping_name",
                id: "shipping_name",
                placeholder: "Name"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="shipping_name" class="form-label"${_scopeId2}>Name</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.shipping_name || ((_b = $data.form) == null ? void 0 : _b.errors.shipping_name))}</div></div><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, mergeProps({
                type: "text",
                class: ["form-control", (errors.shipping_phone || ((_c = $data.form) == null ? void 0 : _c.errors.shipping_phone)) && "is-invalid"],
                placeholder: "Phone",
                name: "shipping_phone",
                id: "shipping_phone",
                "aria-label": "Phone",
                "aria-describedby": "phone",
                "data-maska": "+1 (###) ###-####"
              }, ssrGetDirectiveProps(_ctx, _directive_maska, $data.shipping_phone)), null, _parent3, _scopeId2));
              _push3(`<label for="shipping_phone" class="form-label"${_scopeId2}>Phone</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.shipping_phone || ((_d = $data.form) == null ? void 0 : _d.errors.shipping_phone))}</div></div><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "text",
                class: ["form-control", (errors.shipping_street_address || ((_e = $data.form) == null ? void 0 : _e.errors.shipping_street_address)) && "is-invalid"],
                name: "shipping_street_address",
                id: "shipping_street_address",
                placeholder: "Street Address",
                maxlength: "100"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="shipping_street_address" class="form-label"${_scopeId2}>Street Address</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.shipping_street_address || ((_f = $data.form) == null ? void 0 : _f.errors.shipping_street_address))}</div></div><div class="row g-3 mb-3"${_scopeId2}><div class="col-lg-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "text",
                class: ["form-control", (errors.shipping_city || ((_g = $data.form) == null ? void 0 : _g.errors.shipping_city)) && "is-invalid"],
                name: "shipping_city",
                id: "shipping_city",
                placeholder: "City",
                max: "50"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="shipping_city" class="form-label"${_scopeId2}>City</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.shipping_city || ((_h = $data.form) == null ? void 0 : _h.errors.shipping_city))}</div></div></div><div class="col-lg-6 h-100"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                as: "select",
                name: "shipping_province_code",
                id: "shipping_province_code",
                class: ["form-select h-100", (errors.shipping_province_code || ((_i = $data.form) == null ? void 0 : _i.errors.shipping_province_code)) && "is-invalid"],
                onChange: $options.changeShippingProvince
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<option disabled${_scopeId3}></option><!--[-->`);
                    ssrRenderList($props.provinces, (province) => {
                      _push4(`<option${ssrRenderAttr("value", province.code)}${_scopeId3}>${ssrInterpolate(province.code)} - ${ssrInterpolate(province.province_name)}</option>`);
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      createVNode("option", { disabled: "" }),
                      (openBlock(true), createBlock(Fragment, null, renderList($props.provinces, (province) => {
                        return openBlock(), createBlock("option", {
                          value: province.code
                        }, toDisplayString(province.code) + " - " + toDisplayString(province.province_name), 9, ["value"]);
                      }), 256))
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(`<label for="shipping_province_code" class="form-label"${_scopeId2}>Province</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.shipping_province_code || ((_j = $data.form) == null ? void 0 : _j.errors.shipping_province_code))}</div></div></div><div class="col-lg-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, mergeProps({
                type: "text",
                class: ["form-control", (errors.shipping_postal_code || ((_k = $data.form) == null ? void 0 : _k.errors.shipping_postal_code)) && "is-invalid"],
                name: "shipping_postal_code",
                id: "shipping_postal_code",
                placeholder: "Postal Code",
                "data-maska": "@#@ #@#"
              }, ssrGetDirectiveProps(_ctx, _directive_maska, $data.shipping_postal_code)), null, _parent3, _scopeId2));
              _push3(`<label for="shipping_postal_code" class="form-label"${_scopeId2}>Postal Code</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.shipping_postal_code || ((_l = $data.form) == null ? void 0 : _l.errors.shipping_postal_code))}</div></div></div><div class="col-lg-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                as: "select",
                name: "shipping_country",
                id: "shipping_country",
                class: ["form-select h-100", (errors.shipping_country || ((_m = $data.form) == null ? void 0 : _m.errors.shipping_country)) && "is-invalid"]
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<option selected${_scopeId3}>Canada</option>`);
                  } else {
                    return [
                      createVNode("option", { selected: "" }, "Canada")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(`<label for="shipping_country" class="form-label"${_scopeId2}>Country</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.shipping_country || ((_n = $data.form) == null ? void 0 : _n.errors.shipping_country))}</div></div></div></div><p class="fs-5 fw-semi-bold mt-5"${_scopeId2}>Billing Details</p><p class="text-black-50"${_scopeId2}>Please ensure the following billing address is correct.</p><div class="form-check"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                class: "form-check-input",
                type: "radio",
                name: "same_address",
                id: "sameAddress1",
                value: true,
                onClick: $options.setSameAddress
              }, null, _parent3, _scopeId2));
              _push3(`<label class="form-check-label" for="sameAddress1"${_scopeId2}> Same as shipping address </label></div><div class="form-check mt-2 mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                class: "form-check-input",
                type: "radio",
                name: "same_address",
                id: "sameAddress2",
                value: false,
                onClick: $options.setDifferentAddress
              }, null, _parent3, _scopeId2));
              _push3(`<label class="form-check-label" for="sameAddress2"${_scopeId2}> Use another address </label></div>`);
              if (errors.same_address) {
                _push3(`<div class="text-danger mb-3"${_scopeId2}>${ssrInterpolate(errors.same_address)}</div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div style="${ssrRenderStyle($data.sameAddress === false ? null : { display: "none" })}"${_scopeId2}><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "text",
                class: ["form-control", (errors.billing_name || ((_o = $data.form) == null ? void 0 : _o.errors.billing_name)) && "is-invalid"],
                name: "billing_name",
                id: "billing_name",
                placeholder: "Name"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="billing_name" class="form-label"${_scopeId2}>Name</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.billing_name || ((_p = $data.form) == null ? void 0 : _p.errors.billing_name))}</div></div><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "text",
                class: ["form-control", (errors.billing_street_address || ((_q = $data.form) == null ? void 0 : _q.errors.billing_street_address)) && "is-invalid"],
                name: "billing_street_address",
                id: "billing_street_address",
                placeholder: "Street Address",
                maxlength: "100"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="billing_street_address" class="form-label"${_scopeId2}>Street Address</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.billing_street_address || ((_r = $data.form) == null ? void 0 : _r.errors.billing_street_address))}</div></div><div class="row g-3 mb-3"${_scopeId2}><div class="col-lg-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "text",
                class: ["form-control", (errors.billing_city || ((_s = $data.form) == null ? void 0 : _s.errors.billing_city)) && "is-invalid"],
                name: "billing_city",
                id: "billing_city",
                placeholder: "City",
                max: "50"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="billing_city" class="form-label"${_scopeId2}>City</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.billing_city || ((_t = $data.form) == null ? void 0 : _t.errors.billing_city))}</div></div></div><div class="col-lg-6 h-100"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                as: "select",
                name: "billing_province_code",
                id: "billing_province_code",
                class: ["form-select h-100", (errors.billing_province_code || ((_u = $data.form) == null ? void 0 : _u.errors.billing_province_code)) && "is-invalid"],
                onChange: $options.changeShippingProvince
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<option disabled${_scopeId3}></option><!--[-->`);
                    ssrRenderList($props.provinces, (province) => {
                      _push4(`<option${ssrRenderAttr("value", province.code)}${_scopeId3}>${ssrInterpolate(province.code)} - ${ssrInterpolate(province.province_name)}</option>`);
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      createVNode("option", { disabled: "" }),
                      (openBlock(true), createBlock(Fragment, null, renderList($props.provinces, (province) => {
                        return openBlock(), createBlock("option", {
                          value: province.code
                        }, toDisplayString(province.code) + " - " + toDisplayString(province.province_name), 9, ["value"]);
                      }), 256))
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(`<label for="billing_province_code" class="form-label"${_scopeId2}>Province</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.billing_province_code || ((_v = $data.form) == null ? void 0 : _v.errors.billing_province_code))}</div></div></div><div class="col-lg-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, mergeProps({
                type: "text",
                class: ["form-control", (errors.billing_postal_code || ((_w = $data.form) == null ? void 0 : _w.errors.billing_postal_code)) && "is-invalid"],
                name: "billing_postal_code",
                id: "billing_postal_code",
                placeholder: "Postal Code",
                "data-maska": "@#@ #@#"
              }, ssrGetDirectiveProps(_ctx, _directive_maska, $data.billing_postal_code)), null, _parent3, _scopeId2));
              _push3(`<label for="billing_postal_code" class="form-label"${_scopeId2}>Postal Code</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.billing_postal_code || ((_x = $data.form) == null ? void 0 : _x.errors.billing_postal_code))}</div></div></div><div class="col-lg-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                as: "select",
                name: "billing_country",
                id: "billing_country",
                class: ["form-select h-100", (errors.billing_country || ((_y = $data.form) == null ? void 0 : _y.errors.billing_country)) && "is-invalid"]
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<option selected${_scopeId3}>Canada</option>`);
                  } else {
                    return [
                      createVNode("option", { selected: "" }, "Canada")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(`<label for="billing_country" class="form-label"${_scopeId2}>Country</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.billing_country || ((_z = $data.form) == null ? void 0 : _z.errors.billing_country))}</div></div></div></div></div><div class="d-grid d-md-block"${_scopeId2}><button type="submit" class="btn btn-primary btn-lg rounded-0 text-white mt-4 px-5"${_scopeId2}> Place The Order * </button></div><p class="text-black-50 mt-3"${_scopeId2}> * Once you place the order, the items will be reserved for you. However, you must complete the payment within 3 hours or otherwise your order would be cancelled automatically. </p>`);
            } else {
              return [
                createVNode("p", { class: "fs-5 fw-semi-bold" }, "Shipping Details"),
                createVNode("p", { class: "text-black-50" }, "Please ensure the following shipping address is correct."),
                createVNode("div", { class: "form-floating mb-3" }, [
                  createVNode(_component_Field, {
                    type: "text",
                    class: ["form-control", (errors.shipping_name || ((_A = $data.form) == null ? void 0 : _A.errors.shipping_name)) && "is-invalid"],
                    name: "shipping_name",
                    id: "shipping_name",
                    placeholder: "Name"
                  }, null, 8, ["class"]),
                  createVNode("label", {
                    for: "shipping_name",
                    class: "form-label"
                  }, "Name"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_name || ((_B = $data.form) == null ? void 0 : _B.errors.shipping_name)), 1)
                ]),
                createVNode("div", { class: "form-floating mb-3" }, [
                  withDirectives(createVNode(_component_Field, {
                    type: "text",
                    class: ["form-control", (errors.shipping_phone || ((_C = $data.form) == null ? void 0 : _C.errors.shipping_phone)) && "is-invalid"],
                    placeholder: "Phone",
                    name: "shipping_phone",
                    id: "shipping_phone",
                    "aria-label": "Phone",
                    "aria-describedby": "phone",
                    "data-maska": "+1 (###) ###-####"
                  }, null, 8, ["class"]), [
                    [_directive_maska, $data.shipping_phone]
                  ]),
                  createVNode("label", {
                    for: "shipping_phone",
                    class: "form-label"
                  }, "Phone"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_phone || ((_D = $data.form) == null ? void 0 : _D.errors.shipping_phone)), 1)
                ]),
                createVNode("div", { class: "form-floating mb-3" }, [
                  createVNode(_component_Field, {
                    type: "text",
                    class: ["form-control", (errors.shipping_street_address || ((_E = $data.form) == null ? void 0 : _E.errors.shipping_street_address)) && "is-invalid"],
                    name: "shipping_street_address",
                    id: "shipping_street_address",
                    placeholder: "Street Address",
                    maxlength: "100"
                  }, null, 8, ["class"]),
                  createVNode("label", {
                    for: "shipping_street_address",
                    class: "form-label"
                  }, "Street Address"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_street_address || ((_F = $data.form) == null ? void 0 : _F.errors.shipping_street_address)), 1)
                ]),
                createVNode("div", { class: "row g-3 mb-3" }, [
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("div", { class: "form-floating" }, [
                      createVNode(_component_Field, {
                        type: "text",
                        class: ["form-control", (errors.shipping_city || ((_G = $data.form) == null ? void 0 : _G.errors.shipping_city)) && "is-invalid"],
                        name: "shipping_city",
                        id: "shipping_city",
                        placeholder: "City",
                        max: "50"
                      }, null, 8, ["class"]),
                      createVNode("label", {
                        for: "shipping_city",
                        class: "form-label"
                      }, "City"),
                      createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_city || ((_H = $data.form) == null ? void 0 : _H.errors.shipping_city)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-6 h-100" }, [
                    createVNode("div", { class: "form-floating" }, [
                      createVNode(_component_Field, {
                        as: "select",
                        name: "shipping_province_code",
                        id: "shipping_province_code",
                        class: ["form-select h-100", (errors.shipping_province_code || ((_I = $data.form) == null ? void 0 : _I.errors.shipping_province_code)) && "is-invalid"],
                        onChange: $options.changeShippingProvince
                      }, {
                        default: withCtx(() => [
                          createVNode("option", { disabled: "" }),
                          (openBlock(true), createBlock(Fragment, null, renderList($props.provinces, (province) => {
                            return openBlock(), createBlock("option", {
                              value: province.code
                            }, toDisplayString(province.code) + " - " + toDisplayString(province.province_name), 9, ["value"]);
                          }), 256))
                        ]),
                        _: 2
                      }, 1032, ["onChange", "class"]),
                      createVNode("label", {
                        for: "shipping_province_code",
                        class: "form-label"
                      }, "Province"),
                      createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_province_code || ((_J = $data.form) == null ? void 0 : _J.errors.shipping_province_code)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("div", { class: "form-floating" }, [
                      withDirectives(createVNode(_component_Field, {
                        type: "text",
                        class: ["form-control", (errors.shipping_postal_code || ((_K = $data.form) == null ? void 0 : _K.errors.shipping_postal_code)) && "is-invalid"],
                        name: "shipping_postal_code",
                        id: "shipping_postal_code",
                        placeholder: "Postal Code",
                        "data-maska": "@#@ #@#"
                      }, null, 8, ["class"]), [
                        [_directive_maska, $data.shipping_postal_code]
                      ]),
                      createVNode("label", {
                        for: "shipping_postal_code",
                        class: "form-label"
                      }, "Postal Code"),
                      createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_postal_code || ((_L = $data.form) == null ? void 0 : _L.errors.shipping_postal_code)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("div", { class: "form-floating" }, [
                      createVNode(_component_Field, {
                        as: "select",
                        name: "shipping_country",
                        id: "shipping_country",
                        class: ["form-select h-100", (errors.shipping_country || ((_M = $data.form) == null ? void 0 : _M.errors.shipping_country)) && "is-invalid"]
                      }, {
                        default: withCtx(() => [
                          createVNode("option", { selected: "" }, "Canada")
                        ]),
                        _: 2
                      }, 1032, ["class"]),
                      createVNode("label", {
                        for: "shipping_country",
                        class: "form-label"
                      }, "Country"),
                      createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_country || ((_N = $data.form) == null ? void 0 : _N.errors.shipping_country)), 1)
                    ])
                  ])
                ]),
                createVNode("p", { class: "fs-5 fw-semi-bold mt-5" }, "Billing Details"),
                createVNode("p", { class: "text-black-50" }, "Please ensure the following billing address is correct."),
                createVNode("div", { class: "form-check" }, [
                  createVNode(_component_Field, {
                    class: "form-check-input",
                    type: "radio",
                    name: "same_address",
                    id: "sameAddress1",
                    value: true,
                    onClick: $options.setSameAddress
                  }, null, 8, ["onClick"]),
                  createVNode("label", {
                    class: "form-check-label",
                    for: "sameAddress1"
                  }, " Same as shipping address ")
                ]),
                createVNode("div", { class: "form-check mt-2 mb-3" }, [
                  createVNode(_component_Field, {
                    class: "form-check-input",
                    type: "radio",
                    name: "same_address",
                    id: "sameAddress2",
                    value: false,
                    onClick: $options.setDifferentAddress
                  }, null, 8, ["onClick"]),
                  createVNode("label", {
                    class: "form-check-label",
                    for: "sameAddress2"
                  }, " Use another address ")
                ]),
                errors.same_address ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-danger mb-3"
                }, toDisplayString(errors.same_address), 1)) : createCommentVNode("", true),
                withDirectives(createVNode("div", null, [
                  createVNode("div", { class: "form-floating mb-3" }, [
                    createVNode(_component_Field, {
                      type: "text",
                      class: ["form-control", (errors.billing_name || ((_O = $data.form) == null ? void 0 : _O.errors.billing_name)) && "is-invalid"],
                      name: "billing_name",
                      id: "billing_name",
                      placeholder: "Name"
                    }, null, 8, ["class"]),
                    createVNode("label", {
                      for: "billing_name",
                      class: "form-label"
                    }, "Name"),
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_name || ((_P = $data.form) == null ? void 0 : _P.errors.billing_name)), 1)
                  ]),
                  createVNode("div", { class: "form-floating mb-3" }, [
                    createVNode(_component_Field, {
                      type: "text",
                      class: ["form-control", (errors.billing_street_address || ((_Q = $data.form) == null ? void 0 : _Q.errors.billing_street_address)) && "is-invalid"],
                      name: "billing_street_address",
                      id: "billing_street_address",
                      placeholder: "Street Address",
                      maxlength: "100"
                    }, null, 8, ["class"]),
                    createVNode("label", {
                      for: "billing_street_address",
                      class: "form-label"
                    }, "Street Address"),
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_street_address || ((_R = $data.form) == null ? void 0 : _R.errors.billing_street_address)), 1)
                  ]),
                  createVNode("div", { class: "row g-3 mb-3" }, [
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("div", { class: "form-floating" }, [
                        createVNode(_component_Field, {
                          type: "text",
                          class: ["form-control", (errors.billing_city || ((_S = $data.form) == null ? void 0 : _S.errors.billing_city)) && "is-invalid"],
                          name: "billing_city",
                          id: "billing_city",
                          placeholder: "City",
                          max: "50"
                        }, null, 8, ["class"]),
                        createVNode("label", {
                          for: "billing_city",
                          class: "form-label"
                        }, "City"),
                        createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_city || ((_T = $data.form) == null ? void 0 : _T.errors.billing_city)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "col-lg-6 h-100" }, [
                      createVNode("div", { class: "form-floating" }, [
                        createVNode(_component_Field, {
                          as: "select",
                          name: "billing_province_code",
                          id: "billing_province_code",
                          class: ["form-select h-100", (errors.billing_province_code || ((_U = $data.form) == null ? void 0 : _U.errors.billing_province_code)) && "is-invalid"],
                          onChange: $options.changeShippingProvince
                        }, {
                          default: withCtx(() => [
                            createVNode("option", { disabled: "" }),
                            (openBlock(true), createBlock(Fragment, null, renderList($props.provinces, (province) => {
                              return openBlock(), createBlock("option", {
                                value: province.code
                              }, toDisplayString(province.code) + " - " + toDisplayString(province.province_name), 9, ["value"]);
                            }), 256))
                          ]),
                          _: 2
                        }, 1032, ["onChange", "class"]),
                        createVNode("label", {
                          for: "billing_province_code",
                          class: "form-label"
                        }, "Province"),
                        createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_province_code || ((_V = $data.form) == null ? void 0 : _V.errors.billing_province_code)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("div", { class: "form-floating" }, [
                        withDirectives(createVNode(_component_Field, {
                          type: "text",
                          class: ["form-control", (errors.billing_postal_code || ((_W = $data.form) == null ? void 0 : _W.errors.billing_postal_code)) && "is-invalid"],
                          name: "billing_postal_code",
                          id: "billing_postal_code",
                          placeholder: "Postal Code",
                          "data-maska": "@#@ #@#"
                        }, null, 8, ["class"]), [
                          [_directive_maska, $data.billing_postal_code]
                        ]),
                        createVNode("label", {
                          for: "billing_postal_code",
                          class: "form-label"
                        }, "Postal Code"),
                        createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_postal_code || ((_X = $data.form) == null ? void 0 : _X.errors.billing_postal_code)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("div", { class: "form-floating" }, [
                        createVNode(_component_Field, {
                          as: "select",
                          name: "billing_country",
                          id: "billing_country",
                          class: ["form-select h-100", (errors.billing_country || ((_Y = $data.form) == null ? void 0 : _Y.errors.billing_country)) && "is-invalid"]
                        }, {
                          default: withCtx(() => [
                            createVNode("option", { selected: "" }, "Canada")
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode("label", {
                          for: "billing_country",
                          class: "form-label"
                        }, "Country"),
                        createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_country || ((_Z = $data.form) == null ? void 0 : _Z.errors.billing_country)), 1)
                      ])
                    ])
                  ])
                ], 512), [
                  [vShow, $data.sameAddress === false]
                ]),
                createVNode("div", { class: "d-grid d-md-block" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "btn btn-primary btn-lg rounded-0 text-white mt-4 px-5"
                  }, " Place The Order * ")
                ]),
                createVNode("p", { class: "text-black-50 mt-3" }, " * Once you place the order, the items will be reserved for you. However, you must complete the payment within 3 hours or otherwise your order would be cancelled automatically. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "container-lg my-5" }, [
            createVNode("p", { class: "fs-4 text-center text-uppercase text-center" }, "Checkout"),
            createVNode("div", { class: "heading-line mb-5" }),
            createVNode("div", { class: "container-xl" }, [
              createVNode("div", { class: "row" }, [
                createVNode(_component_OrderSummary, {
                  cartItems: $props.cartItems,
                  total: $props.total,
                  shippingProvince: $data.shippingProvince
                }, null, 8, ["cartItems", "total", "shippingProvince"]),
                createVNode("div", { class: "col-md-7 col-lg-8 order-md-1" }, [
                  createVNode("div", { class: "border rounded p-4" }, [
                    createVNode(_component_Form, {
                      onSubmit: $options.handleSubmit,
                      "validation-schema": _ctx.schema,
                      "initial-values": _ctx.initialValues,
                      ref: "vform"
                    }, {
                      default: withCtx(({ errors }) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
                        return [
                          createVNode("p", { class: "fs-5 fw-semi-bold" }, "Shipping Details"),
                          createVNode("p", { class: "text-black-50" }, "Please ensure the following shipping address is correct."),
                          createVNode("div", { class: "form-floating mb-3" }, [
                            createVNode(_component_Field, {
                              type: "text",
                              class: ["form-control", (errors.shipping_name || ((_a = $data.form) == null ? void 0 : _a.errors.shipping_name)) && "is-invalid"],
                              name: "shipping_name",
                              id: "shipping_name",
                              placeholder: "Name"
                            }, null, 8, ["class"]),
                            createVNode("label", {
                              for: "shipping_name",
                              class: "form-label"
                            }, "Name"),
                            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_name || ((_b = $data.form) == null ? void 0 : _b.errors.shipping_name)), 1)
                          ]),
                          createVNode("div", { class: "form-floating mb-3" }, [
                            withDirectives(createVNode(_component_Field, {
                              type: "text",
                              class: ["form-control", (errors.shipping_phone || ((_c = $data.form) == null ? void 0 : _c.errors.shipping_phone)) && "is-invalid"],
                              placeholder: "Phone",
                              name: "shipping_phone",
                              id: "shipping_phone",
                              "aria-label": "Phone",
                              "aria-describedby": "phone",
                              "data-maska": "+1 (###) ###-####"
                            }, null, 8, ["class"]), [
                              [_directive_maska, $data.shipping_phone]
                            ]),
                            createVNode("label", {
                              for: "shipping_phone",
                              class: "form-label"
                            }, "Phone"),
                            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_phone || ((_d = $data.form) == null ? void 0 : _d.errors.shipping_phone)), 1)
                          ]),
                          createVNode("div", { class: "form-floating mb-3" }, [
                            createVNode(_component_Field, {
                              type: "text",
                              class: ["form-control", (errors.shipping_street_address || ((_e = $data.form) == null ? void 0 : _e.errors.shipping_street_address)) && "is-invalid"],
                              name: "shipping_street_address",
                              id: "shipping_street_address",
                              placeholder: "Street Address",
                              maxlength: "100"
                            }, null, 8, ["class"]),
                            createVNode("label", {
                              for: "shipping_street_address",
                              class: "form-label"
                            }, "Street Address"),
                            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_street_address || ((_f = $data.form) == null ? void 0 : _f.errors.shipping_street_address)), 1)
                          ]),
                          createVNode("div", { class: "row g-3 mb-3" }, [
                            createVNode("div", { class: "col-lg-6" }, [
                              createVNode("div", { class: "form-floating" }, [
                                createVNode(_component_Field, {
                                  type: "text",
                                  class: ["form-control", (errors.shipping_city || ((_g = $data.form) == null ? void 0 : _g.errors.shipping_city)) && "is-invalid"],
                                  name: "shipping_city",
                                  id: "shipping_city",
                                  placeholder: "City",
                                  max: "50"
                                }, null, 8, ["class"]),
                                createVNode("label", {
                                  for: "shipping_city",
                                  class: "form-label"
                                }, "City"),
                                createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_city || ((_h = $data.form) == null ? void 0 : _h.errors.shipping_city)), 1)
                              ])
                            ]),
                            createVNode("div", { class: "col-lg-6 h-100" }, [
                              createVNode("div", { class: "form-floating" }, [
                                createVNode(_component_Field, {
                                  as: "select",
                                  name: "shipping_province_code",
                                  id: "shipping_province_code",
                                  class: ["form-select h-100", (errors.shipping_province_code || ((_i = $data.form) == null ? void 0 : _i.errors.shipping_province_code)) && "is-invalid"],
                                  onChange: $options.changeShippingProvince
                                }, {
                                  default: withCtx(() => [
                                    createVNode("option", { disabled: "" }),
                                    (openBlock(true), createBlock(Fragment, null, renderList($props.provinces, (province) => {
                                      return openBlock(), createBlock("option", {
                                        value: province.code
                                      }, toDisplayString(province.code) + " - " + toDisplayString(province.province_name), 9, ["value"]);
                                    }), 256))
                                  ]),
                                  _: 2
                                }, 1032, ["onChange", "class"]),
                                createVNode("label", {
                                  for: "shipping_province_code",
                                  class: "form-label"
                                }, "Province"),
                                createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_province_code || ((_j = $data.form) == null ? void 0 : _j.errors.shipping_province_code)), 1)
                              ])
                            ]),
                            createVNode("div", { class: "col-lg-6" }, [
                              createVNode("div", { class: "form-floating" }, [
                                withDirectives(createVNode(_component_Field, {
                                  type: "text",
                                  class: ["form-control", (errors.shipping_postal_code || ((_k = $data.form) == null ? void 0 : _k.errors.shipping_postal_code)) && "is-invalid"],
                                  name: "shipping_postal_code",
                                  id: "shipping_postal_code",
                                  placeholder: "Postal Code",
                                  "data-maska": "@#@ #@#"
                                }, null, 8, ["class"]), [
                                  [_directive_maska, $data.shipping_postal_code]
                                ]),
                                createVNode("label", {
                                  for: "shipping_postal_code",
                                  class: "form-label"
                                }, "Postal Code"),
                                createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_postal_code || ((_l = $data.form) == null ? void 0 : _l.errors.shipping_postal_code)), 1)
                              ])
                            ]),
                            createVNode("div", { class: "col-lg-6" }, [
                              createVNode("div", { class: "form-floating" }, [
                                createVNode(_component_Field, {
                                  as: "select",
                                  name: "shipping_country",
                                  id: "shipping_country",
                                  class: ["form-select h-100", (errors.shipping_country || ((_m = $data.form) == null ? void 0 : _m.errors.shipping_country)) && "is-invalid"]
                                }, {
                                  default: withCtx(() => [
                                    createVNode("option", { selected: "" }, "Canada")
                                  ]),
                                  _: 2
                                }, 1032, ["class"]),
                                createVNode("label", {
                                  for: "shipping_country",
                                  class: "form-label"
                                }, "Country"),
                                createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.shipping_country || ((_n = $data.form) == null ? void 0 : _n.errors.shipping_country)), 1)
                              ])
                            ])
                          ]),
                          createVNode("p", { class: "fs-5 fw-semi-bold mt-5" }, "Billing Details"),
                          createVNode("p", { class: "text-black-50" }, "Please ensure the following billing address is correct."),
                          createVNode("div", { class: "form-check" }, [
                            createVNode(_component_Field, {
                              class: "form-check-input",
                              type: "radio",
                              name: "same_address",
                              id: "sameAddress1",
                              value: true,
                              onClick: $options.setSameAddress
                            }, null, 8, ["onClick"]),
                            createVNode("label", {
                              class: "form-check-label",
                              for: "sameAddress1"
                            }, " Same as shipping address ")
                          ]),
                          createVNode("div", { class: "form-check mt-2 mb-3" }, [
                            createVNode(_component_Field, {
                              class: "form-check-input",
                              type: "radio",
                              name: "same_address",
                              id: "sameAddress2",
                              value: false,
                              onClick: $options.setDifferentAddress
                            }, null, 8, ["onClick"]),
                            createVNode("label", {
                              class: "form-check-label",
                              for: "sameAddress2"
                            }, " Use another address ")
                          ]),
                          errors.same_address ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-danger mb-3"
                          }, toDisplayString(errors.same_address), 1)) : createCommentVNode("", true),
                          withDirectives(createVNode("div", null, [
                            createVNode("div", { class: "form-floating mb-3" }, [
                              createVNode(_component_Field, {
                                type: "text",
                                class: ["form-control", (errors.billing_name || ((_o = $data.form) == null ? void 0 : _o.errors.billing_name)) && "is-invalid"],
                                name: "billing_name",
                                id: "billing_name",
                                placeholder: "Name"
                              }, null, 8, ["class"]),
                              createVNode("label", {
                                for: "billing_name",
                                class: "form-label"
                              }, "Name"),
                              createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_name || ((_p = $data.form) == null ? void 0 : _p.errors.billing_name)), 1)
                            ]),
                            createVNode("div", { class: "form-floating mb-3" }, [
                              createVNode(_component_Field, {
                                type: "text",
                                class: ["form-control", (errors.billing_street_address || ((_q = $data.form) == null ? void 0 : _q.errors.billing_street_address)) && "is-invalid"],
                                name: "billing_street_address",
                                id: "billing_street_address",
                                placeholder: "Street Address",
                                maxlength: "100"
                              }, null, 8, ["class"]),
                              createVNode("label", {
                                for: "billing_street_address",
                                class: "form-label"
                              }, "Street Address"),
                              createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_street_address || ((_r = $data.form) == null ? void 0 : _r.errors.billing_street_address)), 1)
                            ]),
                            createVNode("div", { class: "row g-3 mb-3" }, [
                              createVNode("div", { class: "col-lg-6" }, [
                                createVNode("div", { class: "form-floating" }, [
                                  createVNode(_component_Field, {
                                    type: "text",
                                    class: ["form-control", (errors.billing_city || ((_s = $data.form) == null ? void 0 : _s.errors.billing_city)) && "is-invalid"],
                                    name: "billing_city",
                                    id: "billing_city",
                                    placeholder: "City",
                                    max: "50"
                                  }, null, 8, ["class"]),
                                  createVNode("label", {
                                    for: "billing_city",
                                    class: "form-label"
                                  }, "City"),
                                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_city || ((_t = $data.form) == null ? void 0 : _t.errors.billing_city)), 1)
                                ])
                              ]),
                              createVNode("div", { class: "col-lg-6 h-100" }, [
                                createVNode("div", { class: "form-floating" }, [
                                  createVNode(_component_Field, {
                                    as: "select",
                                    name: "billing_province_code",
                                    id: "billing_province_code",
                                    class: ["form-select h-100", (errors.billing_province_code || ((_u = $data.form) == null ? void 0 : _u.errors.billing_province_code)) && "is-invalid"],
                                    onChange: $options.changeShippingProvince
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("option", { disabled: "" }),
                                      (openBlock(true), createBlock(Fragment, null, renderList($props.provinces, (province) => {
                                        return openBlock(), createBlock("option", {
                                          value: province.code
                                        }, toDisplayString(province.code) + " - " + toDisplayString(province.province_name), 9, ["value"]);
                                      }), 256))
                                    ]),
                                    _: 2
                                  }, 1032, ["onChange", "class"]),
                                  createVNode("label", {
                                    for: "billing_province_code",
                                    class: "form-label"
                                  }, "Province"),
                                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_province_code || ((_v = $data.form) == null ? void 0 : _v.errors.billing_province_code)), 1)
                                ])
                              ]),
                              createVNode("div", { class: "col-lg-6" }, [
                                createVNode("div", { class: "form-floating" }, [
                                  withDirectives(createVNode(_component_Field, {
                                    type: "text",
                                    class: ["form-control", (errors.billing_postal_code || ((_w = $data.form) == null ? void 0 : _w.errors.billing_postal_code)) && "is-invalid"],
                                    name: "billing_postal_code",
                                    id: "billing_postal_code",
                                    placeholder: "Postal Code",
                                    "data-maska": "@#@ #@#"
                                  }, null, 8, ["class"]), [
                                    [_directive_maska, $data.billing_postal_code]
                                  ]),
                                  createVNode("label", {
                                    for: "billing_postal_code",
                                    class: "form-label"
                                  }, "Postal Code"),
                                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_postal_code || ((_x = $data.form) == null ? void 0 : _x.errors.billing_postal_code)), 1)
                                ])
                              ]),
                              createVNode("div", { class: "col-lg-6" }, [
                                createVNode("div", { class: "form-floating" }, [
                                  createVNode(_component_Field, {
                                    as: "select",
                                    name: "billing_country",
                                    id: "billing_country",
                                    class: ["form-select h-100", (errors.billing_country || ((_y = $data.form) == null ? void 0 : _y.errors.billing_country)) && "is-invalid"]
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("option", { selected: "" }, "Canada")
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]),
                                  createVNode("label", {
                                    for: "billing_country",
                                    class: "form-label"
                                  }, "Country"),
                                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.billing_country || ((_z = $data.form) == null ? void 0 : _z.errors.billing_country)), 1)
                                ])
                              ])
                            ])
                          ], 512), [
                            [vShow, $data.sameAddress === false]
                          ]),
                          createVNode("div", { class: "d-grid d-md-block" }, [
                            createVNode("button", {
                              type: "submit",
                              class: "btn btn-primary btn-lg rounded-0 text-white mt-4 px-5"
                            }, " Place The Order * ")
                          ]),
                          createVNode("p", { class: "text-black-50 mt-3" }, " * Once you place the order, the items will be reserved for you. However, you must complete the payment within 3 hours or otherwise your order would be cancelled automatically. ")
                        ];
                      }),
                      _: 1
                    }, 8, ["onSubmit", "validation-schema", "initial-values"])
                  ])
                ])
              ])
            ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Checkout as default
};
