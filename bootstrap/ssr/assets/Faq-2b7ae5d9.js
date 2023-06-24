import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, L as Layout } from "./Layout-cbfb21e4.js";
import "@inertiajs/vue3";
import "aos";
const FaqContainer_vue_vue_type_style_index_0_scoped_a7412228_lang = "";
const _sfc_main$1 = {
  name: "FaqContainer",
  props: {
    title: String,
    questions: Array
  },
  mounted() {
    import("@popperjs/core/dist/umd/popper.min.js");
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "faq-container",
    "data-aos": "fade-left",
    "data-aos-once": "true",
    "data-aos-duration": "1500"
  }, _attrs))} data-v-a7412228><h3 data-v-a7412228>${ssrInterpolate($props.title)}</h3><div class="accordion accordion-flush" id="faq-accordion" data-v-a7412228><!--[-->`);
  ssrRenderList($props.questions, ({ question, answer }, index) => {
    _push(`<div class="accordion-item" data-v-a7412228><h2 class="accordion-header" data-v-a7412228><button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#flush-collapse-${index}`)} aria-expanded="false"${ssrRenderAttr("aria-controls", `flush-collapse-${index}`)} data-v-a7412228>${ssrInterpolate(question)}</button></h2><div${ssrRenderAttr("id", `flush-collapse-${index}`)} class="accordion-collapse collapse" data-bs-parent="#faq-accordion" data-v-a7412228><div class="accordion-body" data-v-a7412228>${ssrInterpolate(answer)}</div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Support/FaqContainer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FaqContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a7412228"]]);
const _sfc_main = {
  name: "Faq",
  components: {
    Layout,
    FaqContainer
  },
  created() {
    this.title = "Frequently Asked Questions";
    this.questions = [
      {
        question: `Do you offer international shipping? `,
        answer: `No, currently we only ship within Canada.`
      },
      {
        question: `How long does it take to process and ship an order?`,
        answer: `We strive to process and ship all orders within 1-2 business days.`
      },
      {
        question: `What are the payment options available? `,
        answer: `We accept major credit cards (Visa, Mastercard, American Express) for secure online payments.`
      },
      {
        question: `Do you have a physical store where I can try on the clothes? `,
        answer: `We are an online-only store, but we offer detailed size charts and measurements for each product to help you make the right choice.`
      },
      {
        question: `How can I track my order?`,
        answer: `Once your order is shipped, we will provide you with a tracking number via email. You can use this tracking number to monitor the status of your shipment.`
      },
      {
        question: `What if I receive a damaged or incorrect item?`,
        answer: `We apologize for any inconvenience. Please contact our customer support within 48 hours of receiving the package, and we will assist you with the return or exchange process.`
      }
    ];
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_FaqContainer = resolveComponent("FaqContainer");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FaqContainer, {
          title: _ctx.title,
          questions: _ctx.questions
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FaqContainer, {
            title: _ctx.title,
            questions: _ctx.questions
          }, null, 8, ["title", "questions"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Support/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Faq as default
};
