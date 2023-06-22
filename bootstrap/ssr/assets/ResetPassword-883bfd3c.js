import { _ as _export_sfc, L as Layout } from "./Layout-0dd77213.js";
import { Link, useForm } from "@inertiajs/vue3";
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "aos";
const _sfc_main = {
  name: "ForgotPassword",
  components: {
    Layout,
    Field,
    Form,
    Link
  },
  props: {
    email: String,
    token: String
  },
  data() {
    return {
      form: null
    };
  },
  methods: {
    handleSubmit(values) {
      this.form = useForm({
        ...values,
        email: this.email,
        token: this.token
      });
      this.form.post("/reset-password");
    }
  },
  created() {
    this.schema = yup.object({
      password: yup.string().required("password is required").min(8),
      password_confirmation: yup.string().required("confirm the password").oneOf([yup.ref("password")], "passwords do not match")
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Form = resolveComponent("Form");
  const _component_Field = resolveComponent("Field");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="form-container pb-2"${_scopeId}><p class="fs-4 text-center text-uppercase text-center"${_scopeId}>Reset Password</p><div class="heading-line mb-4"${_scopeId}></div><div class="mb-4"${_scopeId}> Enter the new password for your account. </div>`);
        _push2(ssrRenderComponent(_component_Form, {
          onSubmit: $options.handleSubmit,
          "validation-schema": _ctx.schema
        }, {
          default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
            if (_push3) {
              _push3(`<p class="mb-3 text-danger"${_scopeId2}><small${_scopeId2}>${ssrInterpolate((_a = $data.form) == null ? void 0 : _a.errors.email)}</small></p><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "password",
                class: ["form-control", (errors.password || ((_b = $data.form) == null ? void 0 : _b.errors.password)) && "is-invalid"],
                name: "password",
                id: "password",
                placeholder: "Password"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="password" class="form-label"${_scopeId2}>New Password</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.password || ((_c = $data.form) == null ? void 0 : _c.errors.password))}</div></div><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "password",
                class: ["form-control", (errors.password_confirmation || ((_d = $data.form) == null ? void 0 : _d.errors.password_confirmation)) && "is-invalid"],
                name: "password_confirmation",
                id: "password_confirmation",
                placeholder: "Confirm Password"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="password_confirmation" class="form-label"${_scopeId2}>Confirm Password</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.password_confirmation || ((_e = $data.form) == null ? void 0 : _e.errors.password_confirmation))}</div></div><div class="d-grid mt-5"${_scopeId2}><button type="submit" class="${ssrRenderClass([((_f = $data.form) == null ? void 0 : _f.processing) && "opacity-25", "btn btn-primary btn-lg rounded-0 text-white"])}"${ssrIncludeBooleanAttr((_g = $data.form) == null ? void 0 : _g.processing) ? " disabled" : ""}${_scopeId2}> Reset Password </button></div>`);
            } else {
              return [
                createVNode("p", { class: "mb-3 text-danger" }, [
                  createVNode("small", null, toDisplayString((_h = $data.form) == null ? void 0 : _h.errors.email), 1)
                ]),
                createVNode("div", { class: "form-floating mb-3" }, [
                  createVNode(_component_Field, {
                    type: "password",
                    class: ["form-control", (errors.password || ((_i = $data.form) == null ? void 0 : _i.errors.password)) && "is-invalid"],
                    name: "password",
                    id: "password",
                    placeholder: "Password"
                  }, null, 8, ["class"]),
                  createVNode("label", {
                    for: "password",
                    class: "form-label"
                  }, "New Password"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password || ((_j = $data.form) == null ? void 0 : _j.errors.password)), 1)
                ]),
                createVNode("div", { class: "form-floating mb-3" }, [
                  createVNode(_component_Field, {
                    type: "password",
                    class: ["form-control", (errors.password_confirmation || ((_k = $data.form) == null ? void 0 : _k.errors.password_confirmation)) && "is-invalid"],
                    name: "password_confirmation",
                    id: "password_confirmation",
                    placeholder: "Confirm Password"
                  }, null, 8, ["class"]),
                  createVNode("label", {
                    for: "password_confirmation",
                    class: "form-label"
                  }, "Confirm Password"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password_confirmation || ((_l = $data.form) == null ? void 0 : _l.errors.password_confirmation)), 1)
                ]),
                createVNode("div", { class: "d-grid mt-5" }, [
                  createVNode("button", {
                    type: "submit",
                    class: ["btn btn-primary btn-lg rounded-0 text-white", ((_m = $data.form) == null ? void 0 : _m.processing) && "opacity-25"],
                    disabled: (_n = $data.form) == null ? void 0 : _n.processing
                  }, " Reset Password ", 10, ["disabled"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "form-container pb-2" }, [
            createVNode("p", { class: "fs-4 text-center text-uppercase text-center" }, "Reset Password"),
            createVNode("div", { class: "heading-line mb-4" }),
            createVNode("div", { class: "mb-4" }, " Enter the new password for your account. "),
            createVNode(_component_Form, {
              onSubmit: $options.handleSubmit,
              "validation-schema": _ctx.schema
            }, {
              default: withCtx(({ errors }) => {
                var _a, _b, _c, _d, _e, _f, _g;
                return [
                  createVNode("p", { class: "mb-3 text-danger" }, [
                    createVNode("small", null, toDisplayString((_a = $data.form) == null ? void 0 : _a.errors.email), 1)
                  ]),
                  createVNode("div", { class: "form-floating mb-3" }, [
                    createVNode(_component_Field, {
                      type: "password",
                      class: ["form-control", (errors.password || ((_b = $data.form) == null ? void 0 : _b.errors.password)) && "is-invalid"],
                      name: "password",
                      id: "password",
                      placeholder: "Password"
                    }, null, 8, ["class"]),
                    createVNode("label", {
                      for: "password",
                      class: "form-label"
                    }, "New Password"),
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password || ((_c = $data.form) == null ? void 0 : _c.errors.password)), 1)
                  ]),
                  createVNode("div", { class: "form-floating mb-3" }, [
                    createVNode(_component_Field, {
                      type: "password",
                      class: ["form-control", (errors.password_confirmation || ((_d = $data.form) == null ? void 0 : _d.errors.password_confirmation)) && "is-invalid"],
                      name: "password_confirmation",
                      id: "password_confirmation",
                      placeholder: "Confirm Password"
                    }, null, 8, ["class"]),
                    createVNode("label", {
                      for: "password_confirmation",
                      class: "form-label"
                    }, "Confirm Password"),
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password_confirmation || ((_e = $data.form) == null ? void 0 : _e.errors.password_confirmation)), 1)
                  ]),
                  createVNode("div", { class: "d-grid mt-5" }, [
                    createVNode("button", {
                      type: "submit",
                      class: ["btn btn-primary btn-lg rounded-0 text-white", ((_f = $data.form) == null ? void 0 : _f.processing) && "opacity-25"],
                      disabled: (_g = $data.form) == null ? void 0 : _g.processing
                    }, " Reset Password ", 10, ["disabled"])
                  ])
                ];
              }),
              _: 1
            }, 8, ["onSubmit", "validation-schema"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ResetPassword as default
};
