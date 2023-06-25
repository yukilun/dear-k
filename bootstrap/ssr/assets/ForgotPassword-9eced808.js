import { _ as _export_sfc, L as Layout } from "./Layout-e4e7b742.js";
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
    status: String
  },
  data() {
    return {
      form: null
    };
  },
  methods: {
    handleSubmit(values) {
      this.form = useForm(values);
      this.form.post("/forgot-password");
    }
  },
  created() {
    this.schema = yup.object({
      email: yup.string().required("email is required").email("invalid email").max(255)
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
        _push2(`<div class="form-container pb-2"${_scopeId}><p class="fs-4 text-center text-uppercase text-center"${_scopeId}>Forgot Password</p><div class="heading-line mb-4"${_scopeId}></div><div class="mb-4"${_scopeId}> Please enter your email address used for registration below. We will send you a password reset link for resetting your password. </div><p class="mb-3 text-success"${_scopeId}><small${_scopeId}>${ssrInterpolate($props.status)}</small></p>`);
        _push2(ssrRenderComponent(_component_Form, {
          onSubmit: $options.handleSubmit,
          "validation-schema": _ctx.schema
        }, {
          default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
            var _a, _b, _c, _d, _e, _f;
            if (_push3) {
              _push3(`<p class="mb-3 text-danger"${_scopeId2}><small${_scopeId2}>${ssrInterpolate((_a = $data.form) == null ? void 0 : _a.errors.email)}</small></p><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "email",
                class: ["form-control", errors.email && "is-invalid"],
                name: "email",
                id: "email",
                placeholder: "Email"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="email" class="form-label"${_scopeId2}>Email</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.email)}</div></div><div class="d-grid mt-5"${_scopeId2}><button type="submit" class="${ssrRenderClass([((_b = $data.form) == null ? void 0 : _b.processing) && "opacity-25", "btn btn-primary btn-lg rounded-0 text-white"])}"${ssrIncludeBooleanAttr((_c = $data.form) == null ? void 0 : _c.processing) ? " disabled" : ""}${_scopeId2}> Send Password Reset Link </button></div>`);
            } else {
              return [
                createVNode("p", { class: "mb-3 text-danger" }, [
                  createVNode("small", null, toDisplayString((_d = $data.form) == null ? void 0 : _d.errors.email), 1)
                ]),
                createVNode("div", { class: "form-floating mb-3" }, [
                  createVNode(_component_Field, {
                    type: "email",
                    class: ["form-control", errors.email && "is-invalid"],
                    name: "email",
                    id: "email",
                    placeholder: "Email"
                  }, null, 8, ["class"]),
                  createVNode("label", {
                    for: "email",
                    class: "form-label"
                  }, "Email"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.email), 1)
                ]),
                createVNode("div", { class: "d-grid mt-5" }, [
                  createVNode("button", {
                    type: "submit",
                    class: ["btn btn-primary btn-lg rounded-0 text-white", ((_e = $data.form) == null ? void 0 : _e.processing) && "opacity-25"],
                    disabled: (_f = $data.form) == null ? void 0 : _f.processing
                  }, " Send Password Reset Link ", 10, ["disabled"])
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
            createVNode("p", { class: "fs-4 text-center text-uppercase text-center" }, "Forgot Password"),
            createVNode("div", { class: "heading-line mb-4" }),
            createVNode("div", { class: "mb-4" }, " Please enter your email address used for registration below. We will send you a password reset link for resetting your password. "),
            createVNode("p", { class: "mb-3 text-success" }, [
              createVNode("small", null, toDisplayString($props.status), 1)
            ]),
            createVNode(_component_Form, {
              onSubmit: $options.handleSubmit,
              "validation-schema": _ctx.schema
            }, {
              default: withCtx(({ errors }) => {
                var _a, _b, _c;
                return [
                  createVNode("p", { class: "mb-3 text-danger" }, [
                    createVNode("small", null, toDisplayString((_a = $data.form) == null ? void 0 : _a.errors.email), 1)
                  ]),
                  createVNode("div", { class: "form-floating mb-3" }, [
                    createVNode(_component_Field, {
                      type: "email",
                      class: ["form-control", errors.email && "is-invalid"],
                      name: "email",
                      id: "email",
                      placeholder: "Email"
                    }, null, 8, ["class"]),
                    createVNode("label", {
                      for: "email",
                      class: "form-label"
                    }, "Email"),
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.email), 1)
                  ]),
                  createVNode("div", { class: "d-grid mt-5" }, [
                    createVNode("button", {
                      type: "submit",
                      class: ["btn btn-primary btn-lg rounded-0 text-white", ((_b = $data.form) == null ? void 0 : _b.processing) && "opacity-25"],
                      disabled: (_c = $data.form) == null ? void 0 : _c.processing
                    }, " Send Password Reset Link ", 10, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ForgotPassword as default
};
