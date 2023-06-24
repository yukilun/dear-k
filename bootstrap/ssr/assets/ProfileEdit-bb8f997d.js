import { _ as _export_sfc, L as Layout } from "./Layout-ef8a87b0.js";
import { C as CustomerLayout } from "./CustomerLayout-803aabe9.js";
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { vMaska } from "maska";
import { useForm } from "@inertiajs/vue3";
import { resolveComponent, resolveDirective, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, useSSRContext, createTextVNode, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import "aos";
const _sfc_main$4 = {
  name: "UpdateProfileForm",
  components: {
    Field,
    Form
  },
  directives: {
    maska: vMaska
  },
  props: {
    user: Object,
    provinces: Array
  },
  data: () => ({
    phone: {
      unmasked: ""
    },
    postal_code: {
      unmasked: ""
    },
    form: null,
    status: null
  }),
  methods: {
    handleSubmit(values) {
      const unmaskedValues = { ...values, phone: this.phone.unmasked, postal_code: this.postal_code.unmasked.toUpperCase() };
      this.form = useForm(unmaskedValues);
      this.form.put("/profile", {
        preserveScroll: true
      });
    },
    customResetForm() {
      this.$refs.myForm.setValues({
        name: this.user.name,
        email: this.user.email,
        phone: "1" + this.user.customer.phone,
        street_address: this.user.customer.street_address,
        city: this.user.customer.city,
        province_code: this.user.customer.province_code,
        postal_code: this.user.customer.postal_code,
        country: "Canada"
      });
    }
  },
  created() {
    this.schema = yup.object({
      name: yup.string().required("name is required").max(255),
      email: yup.string().required("email is required").email("invalid email").max(255),
      phone: yup.string().required().matches(/^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/, "enter the 10-digit phone number"),
      street_address: yup.string().required("street address is required").max(100),
      city: yup.string().required("city is required").max(50),
      province_code: yup.string().required("province is required"),
      postal_code: yup.string().required("postal code is required").matches(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/, "invalid postal code"),
      country: yup.string().required("country is required")
    });
    this.initialValues = {
      name: this.user.name,
      email: this.user.email,
      phone: "1" + this.user.customer.phone,
      street_address: this.user.customer.street_address,
      city: this.user.customer.city,
      province_code: this.user.customer.province_code,
      postal_code: this.user.customer.postal_code,
      country: "Canada"
    };
  },
  mounted() {
    import("@popperjs/core/dist/umd/popper.min.js");
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Form = resolveComponent("Form");
  const _component_Field = resolveComponent("Field");
  const _directive_maska = resolveDirective("maska");
  _push(ssrRenderComponent(_component_Form, mergeProps({
    onSubmit: $options.handleSubmit,
    "validation-schema": _ctx.schema,
    "initial-values": _ctx.initialValues,
    ref: "myForm"
  }, _attrs), {
    default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
      if (_push2) {
        _push2(`<p class="fs-5 fw-semi-bold"${_scopeId}>Profile Information</p><p${_scopeId}>You can update your profile information below.</p><div class="form-floating mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          type: "text",
          class: ["form-control", (errors.name || ((_a = _ctx.form) == null ? void 0 : _a.errors.name)) && "is-invalid"],
          name: "name",
          id: "name",
          placeholder: "Name"
        }, null, _parent2, _scopeId));
        _push2(`<label for="name" class="form-label"${_scopeId}>Name</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.name || ((_b = _ctx.form) == null ? void 0 : _b.errors.name))}</div></div><div class="form-floating mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          type: "email",
          class: ["form-control", (errors.email || ((_c = _ctx.form) == null ? void 0 : _c.errors.email)) && "is-invalid"],
          name: "email",
          id: "email",
          placeholder: "Email",
          autocomplete: "email"
        }, null, _parent2, _scopeId));
        _push2(`<label for="email" class="form-label"${_scopeId}>Email</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.email || ((_d = _ctx.form) == null ? void 0 : _d.errors.email))}</div></div><div class="form-floating mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, mergeProps({
          type: "text",
          class: ["form-control", (errors.phone || ((_e = _ctx.form) == null ? void 0 : _e.errors.phone)) && "is-invalid"],
          placeholder: "Phone",
          name: "phone",
          id: "phone",
          "aria-label": "Phone",
          "aria-describedby": "phone",
          "data-maska": "+1 (###) ###-####"
        }, ssrGetDirectiveProps(_ctx, _directive_maska, _ctx.phone)), null, _parent2, _scopeId));
        _push2(`<label for="phone" class="form-label"${_scopeId}>Phone</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.phone || ((_f = _ctx.form) == null ? void 0 : _f.errors.phone))}</div></div><div class="form-floating mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          type: "text",
          class: ["form-control", (errors.street_address || ((_g = _ctx.form) == null ? void 0 : _g.errors.street_address)) && "is-invalid"],
          name: "street_address",
          id: "street_address",
          placeholder: "Street Address",
          maxlength: "100"
        }, null, _parent2, _scopeId));
        _push2(`<label for="street_address" class="form-label"${_scopeId}>Street Address</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.street_address || ((_h = _ctx.form) == null ? void 0 : _h.errors.street_address))}</div></div><div class="row g-3 mb-3"${_scopeId}><div class="col-md-6"${_scopeId}><div class="form-floating"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          type: "text",
          class: ["form-control", (errors.city || ((_i = _ctx.form) == null ? void 0 : _i.errors.city)) && "is-invalid"],
          name: "city",
          id: "city",
          placeholder: "City",
          max: "50"
        }, null, _parent2, _scopeId));
        _push2(`<label for="city" class="form-label"${_scopeId}>City</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.city || ((_j = _ctx.form) == null ? void 0 : _j.errors.city))}</div></div></div><div class="col-md-6 h-100"${_scopeId}><div class="form-floating"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          as: "select",
          name: "province_code",
          id: "province_code",
          class: ["form-select h-100", (errors.province_code || ((_k = _ctx.form) == null ? void 0 : _k.errors.province_code)) && "is-invalid"]
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<option disabled${_scopeId2}></option><!--[-->`);
              ssrRenderList($props.provinces, ({ code, province_name }) => {
                _push3(`<option${ssrRenderAttr("value", code)}${_scopeId2}>${ssrInterpolate(code)} - ${ssrInterpolate(province_name)}</option>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("option", { disabled: "" }),
                (openBlock(true), createBlock(Fragment, null, renderList($props.provinces, ({ code, province_name }) => {
                  return openBlock(), createBlock("option", { value: code }, toDisplayString(code) + " - " + toDisplayString(province_name), 9, ["value"]);
                }), 256))
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`<label for="province_code" class="form-label"${_scopeId}>Province</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.province_code || ((_l = _ctx.form) == null ? void 0 : _l.errors.province_code))}</div></div></div><div class="col-md-6"${_scopeId}><div class="form-floating"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, mergeProps({
          type: "text",
          class: ["form-control", (errors.postal_code || ((_m = _ctx.form) == null ? void 0 : _m.errors.postal_code)) && "is-invalid"],
          name: "postal_code",
          id: "postal_code",
          placeholder: "Postal Code",
          "data-maska": "@#@ #@#"
        }, ssrGetDirectiveProps(_ctx, _directive_maska, _ctx.postal_code)), null, _parent2, _scopeId));
        _push2(`<label for="postal_code" class="form-label"${_scopeId}>Postal Code</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.postal_code || ((_n = _ctx.form) == null ? void 0 : _n.errors.postal_code))}</div></div></div><div class="col-md-6"${_scopeId}><div class="form-floating"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          as: "select",
          name: "country",
          id: "country",
          class: ["form-select h-100", (errors.country || ((_o = _ctx.form) == null ? void 0 : _o.errors.country)) && "is-invalid"]
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<option selected${_scopeId2}>Canada</option>`);
            } else {
              return [
                createVNode("option", { selected: "" }, "Canada")
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`<label for="country" class="form-label"${_scopeId}>Country</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.country || ((_p = _ctx.form) == null ? void 0 : _p.errors.country))}</div></div></div></div><div class="d-flex gap-3 mt-4"${_scopeId}><button type="button" class="${ssrRenderClass([((_q = _ctx.form) == null ? void 0 : _q.processing) && "opacity-25", "btn btn-secondary rounded-0 text-white"])}"${ssrIncludeBooleanAttr((_r = _ctx.form) == null ? void 0 : _r.processing) ? " disabled" : ""}${_scopeId}> Cancel </button><button type="submit" class="${ssrRenderClass([((_s = _ctx.form) == null ? void 0 : _s.processing) && "opacity-25", "btn btn-primary rounded-0 text-white"])}"${ssrIncludeBooleanAttr((_t = _ctx.form) == null ? void 0 : _t.processing) ? " disabled" : ""}${_scopeId}> Update </button></div>`);
      } else {
        return [
          createVNode("p", { class: "fs-5 fw-semi-bold" }, "Profile Information"),
          createVNode("p", null, "You can update your profile information below."),
          createVNode("div", { class: "form-floating mb-3" }, [
            createVNode(_component_Field, {
              type: "text",
              class: ["form-control", (errors.name || ((_u = _ctx.form) == null ? void 0 : _u.errors.name)) && "is-invalid"],
              name: "name",
              id: "name",
              placeholder: "Name"
            }, null, 8, ["class"]),
            createVNode("label", {
              for: "name",
              class: "form-label"
            }, "Name"),
            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.name || ((_v = _ctx.form) == null ? void 0 : _v.errors.name)), 1)
          ]),
          createVNode("div", { class: "form-floating mb-3" }, [
            createVNode(_component_Field, {
              type: "email",
              class: ["form-control", (errors.email || ((_w = _ctx.form) == null ? void 0 : _w.errors.email)) && "is-invalid"],
              name: "email",
              id: "email",
              placeholder: "Email",
              autocomplete: "email"
            }, null, 8, ["class"]),
            createVNode("label", {
              for: "email",
              class: "form-label"
            }, "Email"),
            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.email || ((_x = _ctx.form) == null ? void 0 : _x.errors.email)), 1)
          ]),
          createVNode("div", { class: "form-floating mb-3" }, [
            withDirectives(createVNode(_component_Field, {
              type: "text",
              class: ["form-control", (errors.phone || ((_y = _ctx.form) == null ? void 0 : _y.errors.phone)) && "is-invalid"],
              placeholder: "Phone",
              name: "phone",
              id: "phone",
              "aria-label": "Phone",
              "aria-describedby": "phone",
              "data-maska": "+1 (###) ###-####"
            }, null, 8, ["class"]), [
              [_directive_maska, _ctx.phone]
            ]),
            createVNode("label", {
              for: "phone",
              class: "form-label"
            }, "Phone"),
            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.phone || ((_z = _ctx.form) == null ? void 0 : _z.errors.phone)), 1)
          ]),
          createVNode("div", { class: "form-floating mb-3" }, [
            createVNode(_component_Field, {
              type: "text",
              class: ["form-control", (errors.street_address || ((_A = _ctx.form) == null ? void 0 : _A.errors.street_address)) && "is-invalid"],
              name: "street_address",
              id: "street_address",
              placeholder: "Street Address",
              maxlength: "100"
            }, null, 8, ["class"]),
            createVNode("label", {
              for: "street_address",
              class: "form-label"
            }, "Street Address"),
            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.street_address || ((_B = _ctx.form) == null ? void 0 : _B.errors.street_address)), 1)
          ]),
          createVNode("div", { class: "row g-3 mb-3" }, [
            createVNode("div", { class: "col-md-6" }, [
              createVNode("div", { class: "form-floating" }, [
                createVNode(_component_Field, {
                  type: "text",
                  class: ["form-control", (errors.city || ((_C = _ctx.form) == null ? void 0 : _C.errors.city)) && "is-invalid"],
                  name: "city",
                  id: "city",
                  placeholder: "City",
                  max: "50"
                }, null, 8, ["class"]),
                createVNode("label", {
                  for: "city",
                  class: "form-label"
                }, "City"),
                createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.city || ((_D = _ctx.form) == null ? void 0 : _D.errors.city)), 1)
              ])
            ]),
            createVNode("div", { class: "col-md-6 h-100" }, [
              createVNode("div", { class: "form-floating" }, [
                createVNode(_component_Field, {
                  as: "select",
                  name: "province_code",
                  id: "province_code",
                  class: ["form-select h-100", (errors.province_code || ((_E = _ctx.form) == null ? void 0 : _E.errors.province_code)) && "is-invalid"]
                }, {
                  default: withCtx(() => [
                    createVNode("option", { disabled: "" }),
                    (openBlock(true), createBlock(Fragment, null, renderList($props.provinces, ({ code, province_name }) => {
                      return openBlock(), createBlock("option", { value: code }, toDisplayString(code) + " - " + toDisplayString(province_name), 9, ["value"]);
                    }), 256))
                  ]),
                  _: 2
                }, 1032, ["class"]),
                createVNode("label", {
                  for: "province_code",
                  class: "form-label"
                }, "Province"),
                createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.province_code || ((_F = _ctx.form) == null ? void 0 : _F.errors.province_code)), 1)
              ])
            ]),
            createVNode("div", { class: "col-md-6" }, [
              createVNode("div", { class: "form-floating" }, [
                withDirectives(createVNode(_component_Field, {
                  type: "text",
                  class: ["form-control", (errors.postal_code || ((_G = _ctx.form) == null ? void 0 : _G.errors.postal_code)) && "is-invalid"],
                  name: "postal_code",
                  id: "postal_code",
                  placeholder: "Postal Code",
                  "data-maska": "@#@ #@#"
                }, null, 8, ["class"]), [
                  [_directive_maska, _ctx.postal_code]
                ]),
                createVNode("label", {
                  for: "postal_code",
                  class: "form-label"
                }, "Postal Code"),
                createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.postal_code || ((_H = _ctx.form) == null ? void 0 : _H.errors.postal_code)), 1)
              ])
            ]),
            createVNode("div", { class: "col-md-6" }, [
              createVNode("div", { class: "form-floating" }, [
                createVNode(_component_Field, {
                  as: "select",
                  name: "country",
                  id: "country",
                  class: ["form-select h-100", (errors.country || ((_I = _ctx.form) == null ? void 0 : _I.errors.country)) && "is-invalid"]
                }, {
                  default: withCtx(() => [
                    createVNode("option", { selected: "" }, "Canada")
                  ]),
                  _: 2
                }, 1032, ["class"]),
                createVNode("label", {
                  for: "country",
                  class: "form-label"
                }, "Country"),
                createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.country || ((_J = _ctx.form) == null ? void 0 : _J.errors.country)), 1)
              ])
            ])
          ]),
          createVNode("div", { class: "d-flex gap-3 mt-4" }, [
            createVNode("button", {
              type: "button",
              onClick: $options.customResetForm,
              class: ["btn btn-secondary rounded-0 text-white", ((_K = _ctx.form) == null ? void 0 : _K.processing) && "opacity-25"],
              disabled: (_L = _ctx.form) == null ? void 0 : _L.processing
            }, " Cancel ", 10, ["onClick", "disabled"]),
            createVNode("button", {
              type: "submit",
              class: ["btn btn-primary rounded-0 text-white", ((_M = _ctx.form) == null ? void 0 : _M.processing) && "opacity-25"],
              disabled: (_N = _ctx.form) == null ? void 0 : _N.processing
            }, " Update ", 10, ["disabled"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Profile/UpdateProfileForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const UpdateProfileForm = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  name: "ResetPasswordForm",
  components: {
    Field,
    Form
  },
  directives: {
    maska: vMaska
  },
  props: {
    user: Object
  },
  data: () => ({
    form: null
  }),
  methods: {
    handleSubmit(values, { resetForm }) {
      this.form = useForm(values);
      this.form.put("/password", {
        preserveScroll: true,
        onSuccess: () => {
          resetForm();
          this.status = "success";
        }
      });
    }
  },
  created() {
    this.schema = yup.object({
      current_password: yup.string().required("current password is required"),
      password: yup.string().required("new password is required").min(8),
      password_confirmation: yup.string().required("confirm the password").oneOf([yup.ref("password")], "passwords do not match")
    });
  },
  mounted() {
    import("@popperjs/core/dist/umd/popper.min.js");
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Form = resolveComponent("Form");
  const _component_Field = resolveComponent("Field");
  _push(ssrRenderComponent(_component_Form, mergeProps({
    onSubmit: $options.handleSubmit,
    "validation-schema": _ctx.schema
  }, _attrs), {
    default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      if (_push2) {
        _push2(`<p class="fs-5 fw-semi-bold"${_scopeId}>Reset Password</p><p${_scopeId}>You can set a new password below.</p><div class="form-floating mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          type: "password",
          class: ["form-control", (errors.current_password || ((_a = _ctx.form) == null ? void 0 : _a.errors.current_password)) && "is-invalid"],
          name: "current_password",
          id: "current_password",
          placeholder: "Current Password",
          autocomplete: "current-password"
        }, null, _parent2, _scopeId));
        _push2(`<label for="current_password" class="form-label"${_scopeId}>Current Password</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.current_password || ((_b = _ctx.form) == null ? void 0 : _b.errors.current_password))}</div></div><div class="form-floating mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          type: "password",
          class: ["form-control", (errors.password || ((_c = _ctx.form) == null ? void 0 : _c.errors.password)) && "is-invalid"],
          name: "password",
          id: "password",
          placeholder: "New Password",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(`<label for="password" class="form-label"${_scopeId}>New Password</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.password || ((_d = _ctx.form) == null ? void 0 : _d.errors.password))}</div></div><div class="form-floating mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          type: "password",
          class: ["form-control", (errors.password_confirmation || ((_e = _ctx.form) == null ? void 0 : _e.errors.password_confirmation)) && "is-invalid"],
          name: "password_confirmation",
          id: "password_confirmation",
          placeholder: "Confirm Password",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(`<label for="password_confirmation" class="form-label"${_scopeId}>Confirm Password</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.password_confirmation || ((_f = _ctx.form) == null ? void 0 : _f.errors.password_confirmation))}</div></div><div class="d-flex gap-3 mt-4"${_scopeId}><button type="submit" class="${ssrRenderClass([((_g = _ctx.form) == null ? void 0 : _g.processing) && "opacity-25", "btn btn-primary rounded-0 text-white"])}"${ssrIncludeBooleanAttr((_h = _ctx.form) == null ? void 0 : _h.processing) ? " disabled" : ""}${_scopeId}> Reset Password </button></div>`);
      } else {
        return [
          createVNode("p", { class: "fs-5 fw-semi-bold" }, "Reset Password"),
          createVNode("p", null, "You can set a new password below."),
          createVNode("div", { class: "form-floating mb-3" }, [
            createVNode(_component_Field, {
              type: "password",
              class: ["form-control", (errors.current_password || ((_i = _ctx.form) == null ? void 0 : _i.errors.current_password)) && "is-invalid"],
              name: "current_password",
              id: "current_password",
              placeholder: "Current Password",
              autocomplete: "current-password"
            }, null, 8, ["class"]),
            createVNode("label", {
              for: "current_password",
              class: "form-label"
            }, "Current Password"),
            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.current_password || ((_j = _ctx.form) == null ? void 0 : _j.errors.current_password)), 1)
          ]),
          createVNode("div", { class: "form-floating mb-3" }, [
            createVNode(_component_Field, {
              type: "password",
              class: ["form-control", (errors.password || ((_k = _ctx.form) == null ? void 0 : _k.errors.password)) && "is-invalid"],
              name: "password",
              id: "password",
              placeholder: "New Password",
              autocomplete: "new-password"
            }, null, 8, ["class"]),
            createVNode("label", {
              for: "password",
              class: "form-label"
            }, "New Password"),
            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password || ((_l = _ctx.form) == null ? void 0 : _l.errors.password)), 1)
          ]),
          createVNode("div", { class: "form-floating mb-3" }, [
            createVNode(_component_Field, {
              type: "password",
              class: ["form-control", (errors.password_confirmation || ((_m = _ctx.form) == null ? void 0 : _m.errors.password_confirmation)) && "is-invalid"],
              name: "password_confirmation",
              id: "password_confirmation",
              placeholder: "Confirm Password",
              autocomplete: "new-password"
            }, null, 8, ["class"]),
            createVNode("label", {
              for: "password_confirmation",
              class: "form-label"
            }, "Confirm Password"),
            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password_confirmation || ((_n = _ctx.form) == null ? void 0 : _n.errors.password_confirmation)), 1)
          ]),
          createVNode("div", { class: "d-flex gap-3 mt-4" }, [
            createVNode("button", {
              type: "submit",
              class: ["btn btn-primary rounded-0 text-white", ((_o = _ctx.form) == null ? void 0 : _o.processing) && "opacity-25"],
              disabled: (_p = _ctx.form) == null ? void 0 : _p.processing
            }, " Reset Password ", 10, ["disabled"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Profile/ResetPasswordForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ResetPasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "DeleteUserForm",
  components: {
    Field,
    Form
  },
  data: () => ({
    form: null
  }),
  methods: {
    handleSubmit(values) {
      this.form = useForm(values);
      this.form.delete("/profile", {
        preserveScroll: true
      });
    }
  },
  created() {
    this.schema = yup.object({
      password: yup.string().required("current password is required")
    });
  },
  mounted() {
    import("@popperjs/core/dist/umd/popper.min.js");
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Form = resolveComponent("Form");
  const _component_Field = resolveComponent("Field");
  _push(ssrRenderComponent(_component_Form, mergeProps({
    onSubmit: $options.handleSubmit,
    "validation-schema": _ctx.schema
  }, _attrs), {
    default: withCtx(({ errors }, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (_push2) {
        _push2(`<p class="fs-5 fw-semi-bold"${_scopeId}>Delete Account</p><p${_scopeId}> Please enter your password to confirm you would like to permanently delete your account. Once your account is deleted, all of its resources and data will be permanently deleted. </p><div class="form-floating mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          type: "password",
          class: ["form-control", (errors.password || ((_a = _ctx.form) == null ? void 0 : _a.errors.password)) && "is-invalid"],
          name: "password",
          id: "password-delete",
          placeholder: "Password",
          autocomplete: "current-password"
        }, null, _parent2, _scopeId));
        _push2(`<label for="password-delete" class="form-label"${_scopeId}>Password</label><div class="invalid-feedback"${_scopeId}>${ssrInterpolate(errors.password || ((_b = _ctx.form) == null ? void 0 : _b.errors.password))}</div></div><div class="d-flex gap-3 mt-4"${_scopeId}><button type="submit" class="${ssrRenderClass([((_c = _ctx.form) == null ? void 0 : _c.processing) && "opacity-25", "btn btn-danger rounded-0 text-white"])}"${ssrIncludeBooleanAttr((_d = _ctx.form) == null ? void 0 : _d.processing) ? " disabled" : ""}${_scopeId}> Delete Account </button></div>`);
      } else {
        return [
          createVNode("p", { class: "fs-5 fw-semi-bold" }, "Delete Account"),
          createVNode("p", null, " Please enter your password to confirm you would like to permanently delete your account. Once your account is deleted, all of its resources and data will be permanently deleted. "),
          createVNode("div", { class: "form-floating mb-3" }, [
            createVNode(_component_Field, {
              type: "password",
              class: ["form-control", (errors.password || ((_e = _ctx.form) == null ? void 0 : _e.errors.password)) && "is-invalid"],
              name: "password",
              id: "password-delete",
              placeholder: "Password",
              autocomplete: "current-password"
            }, null, 8, ["class"]),
            createVNode("label", {
              for: "password-delete",
              class: "form-label"
            }, "Password"),
            createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password || ((_f = _ctx.form) == null ? void 0 : _f.errors.password)), 1)
          ]),
          createVNode("div", { class: "d-flex gap-3 mt-4" }, [
            createVNode("button", {
              type: "submit",
              class: ["btn btn-danger rounded-0 text-white", ((_g = _ctx.form) == null ? void 0 : _g.processing) && "opacity-25"],
              disabled: (_h = _ctx.form) == null ? void 0 : _h.processing
            }, " Delete Account ", 10, ["disabled"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Profile/DeleteUserForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DeleteUserForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const Toast_vue_vue_type_style_index_0_scoped_b86026f6_lang = "";
const _sfc_main$1 = {
  name: "Toast",
  props: {
    message: String,
    type: String
  },
  data() {
    return {
      isClose: false,
      isInitial: true,
      timer: null,
      remainTime: 3e3
    };
  },
  methods: {
    closeToast() {
      this.isClose = true;
    }
  },
  mounted() {
    this.isInitial = false;
    this.closeTimer = setInterval(() => {
      if (this.remainTime > 0) {
        this.remainTime -= 10;
      } else {
        this.closeToast();
        clearTimeout(this.closeTimer);
      }
    }, 10);
  },
  unmounted() {
    if (this.closeTimer)
      clearTimeout(this.closeTimer);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["myToast", `${$data.isInitial && "initial"} ${$data.isClose && "close"} ${$props.type}`]
  }, _attrs))} data-v-b86026f6><div class="myToast-container" data-v-b86026f6><div class="myToast-content d-flex gap-3 align-items-center" data-v-b86026f6>`);
  if ($props.type === "success") {
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      class: "fs-3",
      icon: ["fa", "circle-check"]
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.type === "failure") {
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      class: "fs-3",
      icon: ["fa", "circle-xmark"]
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(` ${ssrInterpolate($props.message)}</div><button class="border-0 bg-white link-primary link-underline-opacity-25" data-v-b86026f6>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "x"] }, null, _parent));
  _push(`</button></div><div class="myToast-timer" data-v-b86026f6><div class="myToast-timer-bar" style="${ssrRenderStyle(`width: ${$data.remainTime / 3e3 * 100}% ;`)}" data-v-b86026f6> </div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Toast.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Toast = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b86026f6"]]);
const ProfileEdit_vue_vue_type_style_index_0_scoped_76cf4cdb_lang = "";
const _sfc_main = {
  name: "ProfileEdit",
  components: {
    Layout,
    CustomerLayout,
    UpdateProfileForm,
    ResetPasswordForm,
    DeleteUserForm,
    Toast
  },
  props: {
    user: Object,
    provinces: Array,
    message: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Toast = resolveComponent("Toast");
  const _component_CustomerLayout = resolveComponent("CustomerLayout");
  const _component_UpdateProfileForm = resolveComponent("UpdateProfileForm");
  const _component_ResetPasswordForm = resolveComponent("ResetPasswordForm");
  const _component_DeleteUserForm = resolveComponent("DeleteUserForm");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.message) {
          _push2(ssrRenderComponent(_component_Toast, {
            key: (/* @__PURE__ */ new Date()).toISOString(),
            type: $props.message.type,
            message: $props.message.message
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_CustomerLayout, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="profile-container d-flex flex-column gap-5" data-v-76cf4cdb${_scopeId2}><p class="fs-4" data-v-76cf4cdb${_scopeId2}>Welcome back, <span class="text-primary" data-v-76cf4cdb${_scopeId2}>${ssrInterpolate($props.user.name)}</span> !</p>`);
              _push3(ssrRenderComponent(_component_UpdateProfileForm, {
                user: $props.user,
                provinces: $props.provinces
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ResetPasswordForm, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DeleteUserForm, null, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "profile-container d-flex flex-column gap-5" }, [
                  createVNode("p", { class: "fs-4" }, [
                    createTextVNode("Welcome back, "),
                    createVNode("span", { class: "text-primary" }, toDisplayString($props.user.name), 1),
                    createTextVNode(" !")
                  ]),
                  createVNode(_component_UpdateProfileForm, {
                    user: $props.user,
                    provinces: $props.provinces
                  }, null, 8, ["user", "provinces"]),
                  createVNode(_component_ResetPasswordForm),
                  createVNode(_component_DeleteUserForm)
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          $props.message ? (openBlock(), createBlock(_component_Toast, {
            key: (/* @__PURE__ */ new Date()).toISOString(),
            type: $props.message.type,
            message: $props.message.message
          }, null, 8, ["type", "message"])) : createCommentVNode("", true),
          createVNode(_component_CustomerLayout, null, {
            default: withCtx(() => [
              createVNode("div", { class: "profile-container d-flex flex-column gap-5" }, [
                createVNode("p", { class: "fs-4" }, [
                  createTextVNode("Welcome back, "),
                  createVNode("span", { class: "text-primary" }, toDisplayString($props.user.name), 1),
                  createTextVNode(" !")
                ]),
                createVNode(_component_UpdateProfileForm, {
                  user: $props.user,
                  provinces: $props.provinces
                }, null, 8, ["user", "provinces"]),
                createVNode(_component_ResetPasswordForm),
                createVNode(_component_DeleteUserForm)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/ProfileEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProfileEdit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-76cf4cdb"]]);
export {
  ProfileEdit as default
};
