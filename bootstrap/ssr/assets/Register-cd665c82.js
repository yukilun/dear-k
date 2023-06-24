import { _ as _export_sfc, L as Layout } from "./Layout-ef8a87b0.js";
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { vMaska } from "maska";
import { Link, useForm } from "@inertiajs/vue3";
import { resolveComponent, resolveDirective, withCtx, mergeProps, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "aos";
const _sfc_main = {
  name: "Register",
  components: {
    Layout,
    Field,
    Form,
    Link
  },
  props: {
    provinces: Array
  },
  directives: {
    maska: vMaska
  },
  data: () => ({
    phone: {
      unmasked: ""
    },
    postal_code: {
      unmasked: ""
    },
    form: null
  }),
  methods: {
    handleSubmit(values) {
      const unmaskedValues = { ...values, phone: this.phone.unmasked, postal_code: this.postal_code.unmasked.toUpperCase() };
      this.form = useForm(unmaskedValues);
      this.form.post("/register");
    }
  },
  created() {
    this.schema = yup.object({
      name: yup.string().required("name is required").max(255),
      email: yup.string().required("email is required").email("invalid email").max(255),
      password: yup.string().required("password is required").min(8),
      password_confirmation: yup.string().required("confirm the password").oneOf([yup.ref("password")], "passwords do not match"),
      phone: yup.string().required().matches(/^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/, "enter the 10-digit phone number"),
      street_address: yup.string().required("street address is required").max(100),
      city: yup.string().required("city is required").max(50),
      province_code: yup.string().required("province is required"),
      postal_code: yup.string().required("postal code is required").matches(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/, "invalid postal code"),
      country: yup.string().required("country is required")
    });
    this.initialValues = {
      country: "Canada"
    };
  },
  mounted() {
    import("@popperjs/core/dist/umd/popper.min.js");
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Form = resolveComponent("Form");
  const _component_Field = resolveComponent("Field");
  const _component_Link = resolveComponent("Link");
  const _directive_maska = resolveDirective("maska");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="form-container pb-2"${_scopeId}><p class="fs-4 text-center text-uppercase text-center"${_scopeId}>Register</p><div class="heading-line mb-4"${_scopeId}></div>`);
        _push2(ssrRenderComponent(_component_Form, {
          onSubmit: $options.handleSubmit,
          "validation-schema": _ctx.schema,
          "initial-values": _ctx.initialValues
        }, {
          default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R;
            if (_push3) {
              _push3(`<div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "text",
                class: ["form-control", (errors.name || ((_a = _ctx.form) == null ? void 0 : _a.errors.name)) && "is-invalid"],
                name: "name",
                id: "name",
                placeholder: "Name"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="name" class="form-label"${_scopeId2}>Name</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.name || ((_b = _ctx.form) == null ? void 0 : _b.errors.name))}</div></div><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "email",
                class: ["form-control", (errors.email || ((_c = _ctx.form) == null ? void 0 : _c.errors.email)) && "is-invalid"],
                name: "email",
                id: "email",
                placeholder: "Email",
                autocomplete: "email"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="email" class="form-label"${_scopeId2}>Email</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.email || ((_d = _ctx.form) == null ? void 0 : _d.errors.email))}</div></div><div class="row mb-3 g-3"${_scopeId2}><div class="col-md-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "password",
                class: ["form-control", (errors.password || ((_e = _ctx.form) == null ? void 0 : _e.errors.password)) && "is-invalid"],
                name: "password",
                id: "password",
                placeholder: "Password",
                autocomplete: "new-password"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="password" class="form-label"${_scopeId2}>Password</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.password || ((_f = _ctx.form) == null ? void 0 : _f.errors.password))}</div></div></div><div class="col-md-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "password",
                class: ["form-control", (errors.password_confirmation || ((_g = _ctx.form) == null ? void 0 : _g.errors.password_confirmation)) && "is-invalid"],
                name: "password_confirmation",
                id: "password_confirmation",
                placeholder: "Confirm Password",
                autocomplete: "new-password"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="password_confirmation" class="form-label"${_scopeId2}>Confirm Password</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.password_confirmation || ((_h = _ctx.form) == null ? void 0 : _h.errors.password_confirmation))}</div></div></div></div><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, mergeProps({
                type: "text",
                class: ["form-control", (errors.phone || ((_i = _ctx.form) == null ? void 0 : _i.errors.phone)) && "is-invalid"],
                placeholder: "Phone",
                name: "phone",
                id: "phone",
                "aria-label": "Phone",
                "aria-describedby": "phone",
                "data-maska": "+1 (###) ###-####"
              }, ssrGetDirectiveProps(_ctx, _directive_maska, _ctx.phone)), null, _parent3, _scopeId2));
              _push3(`<label for="phone" class="form-label"${_scopeId2}>Phone</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.phone || ((_j = _ctx.form) == null ? void 0 : _j.errors.phone))}</div></div><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "text",
                class: ["form-control", (errors.street_address || ((_k = _ctx.form) == null ? void 0 : _k.errors.street_address)) && "is-invalid"],
                name: "street_address",
                id: "street_address",
                placeholder: "Street Address",
                maxlength: "100"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="street_address" class="form-label"${_scopeId2}>Street Address</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.street_address || ((_l = _ctx.form) == null ? void 0 : _l.errors.street_address))}</div></div><div class="row g-3 mb-3"${_scopeId2}><div class="col-md-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "text",
                class: ["form-control", (errors.city || ((_m = _ctx.form) == null ? void 0 : _m.errors.city)) && "is-invalid"],
                name: "city",
                id: "city",
                placeholder: "City",
                max: "50"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="city" class="form-label"${_scopeId2}>City</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.city || ((_n = _ctx.form) == null ? void 0 : _n.errors.city))}</div></div></div><div class="col-md-6 h-100"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                as: "select",
                name: "province_code",
                id: "province_code",
                class: ["form-select h-100", (errors.province_code || ((_o = _ctx.form) == null ? void 0 : _o.errors.province_code)) && "is-invalid"]
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<option disabled${_scopeId3}></option><!--[-->`);
                    ssrRenderList($props.provinces, ({ code, province_name }) => {
                      _push4(`<option${ssrRenderAttr("value", code)}${_scopeId3}>${ssrInterpolate(code)} - ${ssrInterpolate(province_name)}</option>`);
                    });
                    _push4(`<!--]-->`);
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
              }, _parent3, _scopeId2));
              _push3(`<label for="province_code" class="form-label"${_scopeId2}>Province</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.province_code || ((_p = _ctx.form) == null ? void 0 : _p.errors.province_code))}</div></div></div><div class="col-md-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, mergeProps({
                type: "text",
                class: ["form-control", (errors.postal_code || ((_q = _ctx.form) == null ? void 0 : _q.errors.postal_code)) && "is-invalid"],
                name: "postal_code",
                id: "postal_code",
                placeholder: "Postal Code",
                "data-maska": "@#@ #@#"
              }, ssrGetDirectiveProps(_ctx, _directive_maska, _ctx.postal_code)), null, _parent3, _scopeId2));
              _push3(`<label for="postal_code" class="form-label"${_scopeId2}>Postal Code</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.postal_code || ((_r = _ctx.form) == null ? void 0 : _r.errors.postal_code))}</div></div></div><div class="col-md-6"${_scopeId2}><div class="form-floating"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                as: "select",
                name: "country",
                id: "country",
                class: ["form-select h-100", (errors.country || ((_s = _ctx.form) == null ? void 0 : _s.errors.country)) && "is-invalid"]
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
              _push3(`<label for="country" class="form-label"${_scopeId2}>Country</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.country || ((_t = _ctx.form) == null ? void 0 : _t.errors.country))}</div></div></div></div><div class="d-grid mt-5"${_scopeId2}><button type="submit" class="${ssrRenderClass([((_u = _ctx.form) == null ? void 0 : _u.processing) && "opacity-25", "btn btn-primary btn-lg rounded-0 text-white"])}"${ssrIncludeBooleanAttr((_v = _ctx.form) == null ? void 0 : _v.processing) ? " disabled" : ""}${_scopeId2}> Register </button></div>`);
            } else {
              return [
                createVNode("div", { class: "form-floating mb-3" }, [
                  createVNode(_component_Field, {
                    type: "text",
                    class: ["form-control", (errors.name || ((_w = _ctx.form) == null ? void 0 : _w.errors.name)) && "is-invalid"],
                    name: "name",
                    id: "name",
                    placeholder: "Name"
                  }, null, 8, ["class"]),
                  createVNode("label", {
                    for: "name",
                    class: "form-label"
                  }, "Name"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.name || ((_x = _ctx.form) == null ? void 0 : _x.errors.name)), 1)
                ]),
                createVNode("div", { class: "form-floating mb-3" }, [
                  createVNode(_component_Field, {
                    type: "email",
                    class: ["form-control", (errors.email || ((_y = _ctx.form) == null ? void 0 : _y.errors.email)) && "is-invalid"],
                    name: "email",
                    id: "email",
                    placeholder: "Email",
                    autocomplete: "email"
                  }, null, 8, ["class"]),
                  createVNode("label", {
                    for: "email",
                    class: "form-label"
                  }, "Email"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.email || ((_z = _ctx.form) == null ? void 0 : _z.errors.email)), 1)
                ]),
                createVNode("div", { class: "row mb-3 g-3" }, [
                  createVNode("div", { class: "col-md-6" }, [
                    createVNode("div", { class: "form-floating" }, [
                      createVNode(_component_Field, {
                        type: "password",
                        class: ["form-control", (errors.password || ((_A = _ctx.form) == null ? void 0 : _A.errors.password)) && "is-invalid"],
                        name: "password",
                        id: "password",
                        placeholder: "Password",
                        autocomplete: "new-password"
                      }, null, 8, ["class"]),
                      createVNode("label", {
                        for: "password",
                        class: "form-label"
                      }, "Password"),
                      createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password || ((_B = _ctx.form) == null ? void 0 : _B.errors.password)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-md-6" }, [
                    createVNode("div", { class: "form-floating" }, [
                      createVNode(_component_Field, {
                        type: "password",
                        class: ["form-control", (errors.password_confirmation || ((_C = _ctx.form) == null ? void 0 : _C.errors.password_confirmation)) && "is-invalid"],
                        name: "password_confirmation",
                        id: "password_confirmation",
                        placeholder: "Confirm Password",
                        autocomplete: "new-password"
                      }, null, 8, ["class"]),
                      createVNode("label", {
                        for: "password_confirmation",
                        class: "form-label"
                      }, "Confirm Password"),
                      createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password_confirmation || ((_D = _ctx.form) == null ? void 0 : _D.errors.password_confirmation)), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "form-floating mb-3" }, [
                  withDirectives(createVNode(_component_Field, {
                    type: "text",
                    class: ["form-control", (errors.phone || ((_E = _ctx.form) == null ? void 0 : _E.errors.phone)) && "is-invalid"],
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
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.phone || ((_F = _ctx.form) == null ? void 0 : _F.errors.phone)), 1)
                ]),
                createVNode("div", { class: "form-floating mb-3" }, [
                  createVNode(_component_Field, {
                    type: "text",
                    class: ["form-control", (errors.street_address || ((_G = _ctx.form) == null ? void 0 : _G.errors.street_address)) && "is-invalid"],
                    name: "street_address",
                    id: "street_address",
                    placeholder: "Street Address",
                    maxlength: "100"
                  }, null, 8, ["class"]),
                  createVNode("label", {
                    for: "street_address",
                    class: "form-label"
                  }, "Street Address"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.street_address || ((_H = _ctx.form) == null ? void 0 : _H.errors.street_address)), 1)
                ]),
                createVNode("div", { class: "row g-3 mb-3" }, [
                  createVNode("div", { class: "col-md-6" }, [
                    createVNode("div", { class: "form-floating" }, [
                      createVNode(_component_Field, {
                        type: "text",
                        class: ["form-control", (errors.city || ((_I = _ctx.form) == null ? void 0 : _I.errors.city)) && "is-invalid"],
                        name: "city",
                        id: "city",
                        placeholder: "City",
                        max: "50"
                      }, null, 8, ["class"]),
                      createVNode("label", {
                        for: "city",
                        class: "form-label"
                      }, "City"),
                      createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.city || ((_J = _ctx.form) == null ? void 0 : _J.errors.city)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-md-6 h-100" }, [
                    createVNode("div", { class: "form-floating" }, [
                      createVNode(_component_Field, {
                        as: "select",
                        name: "province_code",
                        id: "province_code",
                        class: ["form-select h-100", (errors.province_code || ((_K = _ctx.form) == null ? void 0 : _K.errors.province_code)) && "is-invalid"]
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
                      createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.province_code || ((_L = _ctx.form) == null ? void 0 : _L.errors.province_code)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-md-6" }, [
                    createVNode("div", { class: "form-floating" }, [
                      withDirectives(createVNode(_component_Field, {
                        type: "text",
                        class: ["form-control", (errors.postal_code || ((_M = _ctx.form) == null ? void 0 : _M.errors.postal_code)) && "is-invalid"],
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
                      createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.postal_code || ((_N = _ctx.form) == null ? void 0 : _N.errors.postal_code)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-md-6" }, [
                    createVNode("div", { class: "form-floating" }, [
                      createVNode(_component_Field, {
                        as: "select",
                        name: "country",
                        id: "country",
                        class: ["form-select h-100", (errors.country || ((_O = _ctx.form) == null ? void 0 : _O.errors.country)) && "is-invalid"]
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
                      createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.country || ((_P = _ctx.form) == null ? void 0 : _P.errors.country)), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "d-grid mt-5" }, [
                  createVNode("button", {
                    type: "submit",
                    class: ["btn btn-primary btn-lg rounded-0 text-white", ((_Q = _ctx.form) == null ? void 0 : _Q.processing) && "opacity-25"],
                    disabled: (_R = _ctx.form) == null ? void 0 : _R.processing
                  }, " Register ", 10, ["disabled"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p class="text-center mt-4 mb-5"${_scopeId}>Already have an account?   `);
        _push2(ssrRenderComponent(_component_Link, { href: "/login" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Sign In`);
            } else {
              return [
                createTextVNode("Sign In")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p></div>`);
      } else {
        return [
          createVNode("div", { class: "form-container pb-2" }, [
            createVNode("p", { class: "fs-4 text-center text-uppercase text-center" }, "Register"),
            createVNode("div", { class: "heading-line mb-4" }),
            createVNode(_component_Form, {
              onSubmit: $options.handleSubmit,
              "validation-schema": _ctx.schema,
              "initial-values": _ctx.initialValues
            }, {
              default: withCtx(({ errors }) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
                return [
                  createVNode("div", { class: "form-floating mb-3" }, [
                    createVNode(_component_Field, {
                      type: "text",
                      class: ["form-control", (errors.name || ((_a = _ctx.form) == null ? void 0 : _a.errors.name)) && "is-invalid"],
                      name: "name",
                      id: "name",
                      placeholder: "Name"
                    }, null, 8, ["class"]),
                    createVNode("label", {
                      for: "name",
                      class: "form-label"
                    }, "Name"),
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.name || ((_b = _ctx.form) == null ? void 0 : _b.errors.name)), 1)
                  ]),
                  createVNode("div", { class: "form-floating mb-3" }, [
                    createVNode(_component_Field, {
                      type: "email",
                      class: ["form-control", (errors.email || ((_c = _ctx.form) == null ? void 0 : _c.errors.email)) && "is-invalid"],
                      name: "email",
                      id: "email",
                      placeholder: "Email",
                      autocomplete: "email"
                    }, null, 8, ["class"]),
                    createVNode("label", {
                      for: "email",
                      class: "form-label"
                    }, "Email"),
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.email || ((_d = _ctx.form) == null ? void 0 : _d.errors.email)), 1)
                  ]),
                  createVNode("div", { class: "row mb-3 g-3" }, [
                    createVNode("div", { class: "col-md-6" }, [
                      createVNode("div", { class: "form-floating" }, [
                        createVNode(_component_Field, {
                          type: "password",
                          class: ["form-control", (errors.password || ((_e = _ctx.form) == null ? void 0 : _e.errors.password)) && "is-invalid"],
                          name: "password",
                          id: "password",
                          placeholder: "Password",
                          autocomplete: "new-password"
                        }, null, 8, ["class"]),
                        createVNode("label", {
                          for: "password",
                          class: "form-label"
                        }, "Password"),
                        createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password || ((_f = _ctx.form) == null ? void 0 : _f.errors.password)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "col-md-6" }, [
                      createVNode("div", { class: "form-floating" }, [
                        createVNode(_component_Field, {
                          type: "password",
                          class: ["form-control", (errors.password_confirmation || ((_g = _ctx.form) == null ? void 0 : _g.errors.password_confirmation)) && "is-invalid"],
                          name: "password_confirmation",
                          id: "password_confirmation",
                          placeholder: "Confirm Password",
                          autocomplete: "new-password"
                        }, null, 8, ["class"]),
                        createVNode("label", {
                          for: "password_confirmation",
                          class: "form-label"
                        }, "Confirm Password"),
                        createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password_confirmation || ((_h = _ctx.form) == null ? void 0 : _h.errors.password_confirmation)), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "form-floating mb-3" }, [
                    withDirectives(createVNode(_component_Field, {
                      type: "text",
                      class: ["form-control", (errors.phone || ((_i = _ctx.form) == null ? void 0 : _i.errors.phone)) && "is-invalid"],
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
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.phone || ((_j = _ctx.form) == null ? void 0 : _j.errors.phone)), 1)
                  ]),
                  createVNode("div", { class: "form-floating mb-3" }, [
                    createVNode(_component_Field, {
                      type: "text",
                      class: ["form-control", (errors.street_address || ((_k = _ctx.form) == null ? void 0 : _k.errors.street_address)) && "is-invalid"],
                      name: "street_address",
                      id: "street_address",
                      placeholder: "Street Address",
                      maxlength: "100"
                    }, null, 8, ["class"]),
                    createVNode("label", {
                      for: "street_address",
                      class: "form-label"
                    }, "Street Address"),
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.street_address || ((_l = _ctx.form) == null ? void 0 : _l.errors.street_address)), 1)
                  ]),
                  createVNode("div", { class: "row g-3 mb-3" }, [
                    createVNode("div", { class: "col-md-6" }, [
                      createVNode("div", { class: "form-floating" }, [
                        createVNode(_component_Field, {
                          type: "text",
                          class: ["form-control", (errors.city || ((_m = _ctx.form) == null ? void 0 : _m.errors.city)) && "is-invalid"],
                          name: "city",
                          id: "city",
                          placeholder: "City",
                          max: "50"
                        }, null, 8, ["class"]),
                        createVNode("label", {
                          for: "city",
                          class: "form-label"
                        }, "City"),
                        createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.city || ((_n = _ctx.form) == null ? void 0 : _n.errors.city)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "col-md-6 h-100" }, [
                      createVNode("div", { class: "form-floating" }, [
                        createVNode(_component_Field, {
                          as: "select",
                          name: "province_code",
                          id: "province_code",
                          class: ["form-select h-100", (errors.province_code || ((_o = _ctx.form) == null ? void 0 : _o.errors.province_code)) && "is-invalid"]
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
                        createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.province_code || ((_p = _ctx.form) == null ? void 0 : _p.errors.province_code)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "col-md-6" }, [
                      createVNode("div", { class: "form-floating" }, [
                        withDirectives(createVNode(_component_Field, {
                          type: "text",
                          class: ["form-control", (errors.postal_code || ((_q = _ctx.form) == null ? void 0 : _q.errors.postal_code)) && "is-invalid"],
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
                        createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.postal_code || ((_r = _ctx.form) == null ? void 0 : _r.errors.postal_code)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "col-md-6" }, [
                      createVNode("div", { class: "form-floating" }, [
                        createVNode(_component_Field, {
                          as: "select",
                          name: "country",
                          id: "country",
                          class: ["form-select h-100", (errors.country || ((_s = _ctx.form) == null ? void 0 : _s.errors.country)) && "is-invalid"]
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
                        createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.country || ((_t = _ctx.form) == null ? void 0 : _t.errors.country)), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "d-grid mt-5" }, [
                    createVNode("button", {
                      type: "submit",
                      class: ["btn btn-primary btn-lg rounded-0 text-white", ((_u = _ctx.form) == null ? void 0 : _u.processing) && "opacity-25"],
                      disabled: (_v = _ctx.form) == null ? void 0 : _v.processing
                    }, " Register ", 10, ["disabled"])
                  ])
                ];
              }),
              _: 1
            }, 8, ["onSubmit", "validation-schema", "initial-values"]),
            createVNode("p", { class: "text-center mt-4 mb-5" }, [
              createTextVNode("Already have an account?   "),
              createVNode(_component_Link, { href: "/login" }, {
                default: withCtx(() => [
                  createTextVNode("Sign In")
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Register as default
};
