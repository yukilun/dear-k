import { Link, useForm } from "@inertiajs/vue3";
import { _ as _export_sfc, L as Layout } from "./Layout-e4e7b742.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "aos";
const _sfc_main = {
  name: "VerifyEmail",
  components: {
    Layout,
    Link
  },
  props: {
    status: String
  },
  data() {
    return {
      form: useForm({})
    };
  },
  methods: {
    handleSubmit() {
      this.form.post("/email/verification-notification");
    }
  },
  computed: {
    verificationLinkSent() {
      return this.status === "verification-link-sent";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="form-container mb-5"${_scopeId}><p class="fs-4 text-center text-uppercase text-center"${_scopeId}>Email Verification</p><div class="heading-line mb-4"${_scopeId}></div><div class="mb-4"${_scopeId}> Please verify your email address by clicking on the link we emailed to you. If you didn&#39;t receive the email, click on the &quot;Resend Verification Email&quot; button below. </div>`);
        if ($options.verificationLinkSent) {
          _push2(`<div class="mb-4 text-success"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<form${_scopeId}><div class="d-grid"${_scopeId}><button type="submit" class="${ssrRenderClass([{ "opacity-25": $data.form.processing }, "btn btn-primary btn-lg rounded-0 text-white mb-3"])}"${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}${_scopeId}> Resend Verification Email </button>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/logout",
          method: "post",
          as: "button",
          class: "link-primary text-center text-decoration-underline border-0 bg-transparent"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Log Out `);
            } else {
              return [
                createTextVNode(" Log Out ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form></div>`);
      } else {
        return [
          createVNode("div", { class: "form-container mb-5" }, [
            createVNode("p", { class: "fs-4 text-center text-uppercase text-center" }, "Email Verification"),
            createVNode("div", { class: "heading-line mb-4" }),
            createVNode("div", { class: "mb-4" }, ` Please verify your email address by clicking on the link we emailed to you. If you didn't receive the email, click on the "Resend Verification Email" button below. `),
            $options.verificationLinkSent ? (openBlock(), createBlock("div", {
              key: 0,
              class: "mb-4 text-success"
            }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
            createVNode("form", {
              onSubmit: withModifiers($options.handleSubmit, ["prevent"])
            }, [
              createVNode("div", { class: "d-grid" }, [
                createVNode("button", {
                  type: "submit",
                  class: ["btn btn-primary btn-lg rounded-0 text-white mb-3", { "opacity-25": $data.form.processing }],
                  disabled: $data.form.processing
                }, " Resend Verification Email ", 10, ["disabled"]),
                createVNode(_component_Link, {
                  href: "/logout",
                  method: "post",
                  as: "button",
                  class: "link-primary text-center text-decoration-underline border-0 bg-transparent"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out ")
                  ]),
                  _: 1
                })
              ])
            ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VerifyEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  VerifyEmail as default
};
