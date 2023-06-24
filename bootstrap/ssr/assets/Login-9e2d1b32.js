import { _ as _export_sfc, L as Layout } from "./Layout-ef8a87b0.js";
import { Link, useForm } from "@inertiajs/vue3";
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "aos";
const _sfc_main = {
  name: "Login",
  components: {
    Layout,
    Field,
    Form,
    Link
  },
  props: {
    canResetPassword: Boolean,
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
      this.form.post("/login");
    }
  },
  created() {
    this.schema = yup.object({
      email: yup.string().required("email is required").email("invalid email").max(255),
      password: yup.string().required("password is required")
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Form = resolveComponent("Form");
  const _component_Field = resolveComponent("Field");
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="form-container pb-2"${_scopeId}><p class="fs-4 text-center text-uppercase text-center"${_scopeId}>Login</p><div class="heading-line mb-4"${_scopeId}></div><p class="mb-3 text-success"${_scopeId}><small${_scopeId}>${ssrInterpolate($props.status)}</small></p>`);
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
                placeholder: "Email",
                autocomplete: "username"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="email" class="form-label"${_scopeId2}>Email</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.email)}</div></div><div class="form-floating mb-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "password",
                class: ["form-control", errors.password && "is-invalid"],
                name: "password",
                id: "password",
                placeholder: "Password",
                autocomplete: "current-password"
              }, null, _parent3, _scopeId2));
              _push3(`<label for="password" class="form-label"${_scopeId2}>Password</label><div class="invalid-feedback"${_scopeId2}>${ssrInterpolate(errors.password)}</div>`);
              if ($props.canResetPassword) {
                _push3(`<p class="text-end mt-2"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_Link, { href: "/forgot-password" }, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Forgot password?`);
                    } else {
                      return [
                        createTextVNode("Forgot password?")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</p>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`</div><div class="d-grid mt-5"${_scopeId2}><button type="submit" class="${ssrRenderClass([((_b = $data.form) == null ? void 0 : _b.processing) && "opacity-25", "btn btn-primary btn-lg rounded-0 text-white"])}"${ssrIncludeBooleanAttr((_c = $data.form) == null ? void 0 : _c.processing) ? " disabled" : ""}${_scopeId2}> Login </button></div>`);
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
                    placeholder: "Email",
                    autocomplete: "username"
                  }, null, 8, ["class"]),
                  createVNode("label", {
                    for: "email",
                    class: "form-label"
                  }, "Email"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.email), 1)
                ]),
                createVNode("div", { class: "form-floating mb-3" }, [
                  createVNode(_component_Field, {
                    type: "password",
                    class: ["form-control", errors.password && "is-invalid"],
                    name: "password",
                    id: "password",
                    placeholder: "Password",
                    autocomplete: "current-password"
                  }, null, 8, ["class"]),
                  createVNode("label", {
                    for: "password",
                    class: "form-label"
                  }, "Password"),
                  createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password), 1),
                  $props.canResetPassword ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-end mt-2"
                  }, [
                    createVNode(_component_Link, { href: "/forgot-password" }, {
                      default: withCtx(() => [
                        createTextVNode("Forgot password?")
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "d-grid mt-5" }, [
                  createVNode("button", {
                    type: "submit",
                    class: ["btn btn-primary btn-lg rounded-0 text-white", ((_e = $data.form) == null ? void 0 : _e.processing) && "opacity-25"],
                    disabled: (_f = $data.form) == null ? void 0 : _f.processing
                  }, " Login ", 10, ["disabled"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p class="text-center mt-4 mb-5"${_scopeId}>Don&#39;t have an account?   `);
        _push2(ssrRenderComponent(_component_Link, { href: "/register" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Sign Up`);
            } else {
              return [
                createTextVNode("Sign Up")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p></div>`);
      } else {
        return [
          createVNode("div", { class: "form-container pb-2" }, [
            createVNode("p", { class: "fs-4 text-center text-uppercase text-center" }, "Login"),
            createVNode("div", { class: "heading-line mb-4" }),
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
                      placeholder: "Email",
                      autocomplete: "username"
                    }, null, 8, ["class"]),
                    createVNode("label", {
                      for: "email",
                      class: "form-label"
                    }, "Email"),
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.email), 1)
                  ]),
                  createVNode("div", { class: "form-floating mb-3" }, [
                    createVNode(_component_Field, {
                      type: "password",
                      class: ["form-control", errors.password && "is-invalid"],
                      name: "password",
                      id: "password",
                      placeholder: "Password",
                      autocomplete: "current-password"
                    }, null, 8, ["class"]),
                    createVNode("label", {
                      for: "password",
                      class: "form-label"
                    }, "Password"),
                    createVNode("div", { class: "invalid-feedback" }, toDisplayString(errors.password), 1),
                    $props.canResetPassword ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-end mt-2"
                    }, [
                      createVNode(_component_Link, { href: "/forgot-password" }, {
                        default: withCtx(() => [
                          createTextVNode("Forgot password?")
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "d-grid mt-5" }, [
                    createVNode("button", {
                      type: "submit",
                      class: ["btn btn-primary btn-lg rounded-0 text-white", ((_b = $data.form) == null ? void 0 : _b.processing) && "opacity-25"],
                      disabled: (_c = $data.form) == null ? void 0 : _c.processing
                    }, " Login ", 10, ["disabled"])
                  ])
                ];
              }),
              _: 1
            }, 8, ["onSubmit", "validation-schema"]),
            createVNode("p", { class: "text-center mt-4 mb-5" }, [
              createTextVNode("Don't have an account?   "),
              createVNode(_component_Link, { href: "/register" }, {
                default: withCtx(() => [
                  createTextVNode("Sign Up")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Login as default
};
