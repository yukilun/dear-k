import { T as TextContainer } from "./TextContainer-d7b1c3ec.js";
import { _ as _export_sfc, L as Layout } from "./Layout-ef8a87b0.js";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import "aos";
const _sfc_main = {
  name: "About",
  components: {
    Layout,
    TextContainer
  },
  created() {
    this.title = "About";
    this.image = { src: "/images/studio.jpg", alt: "studio photo" };
    this.paragraphs = [
      ` Welcome to Dear K., your go-to destination for simple and trendy Korean-style clothing for women in Canada.At Dear
            K., we believe that fashion should be accessible, effortless, and empowering.We curate a collection of
            carefully selected pieces that reflect the latest fashion trends while maintaining a timeless elegance.`,
      `Our mission is to inspire women to embrace their individuality and express their personal style with
            confidence. Each item in our collection is thoughtfully designed and crafted to ensure both quality and comfort, so you
            can look and feel your best in every outfit.`,
      `We understand that fashion is more than just clothing; it's a form of self-expression. That's why we are
            dedicated to offering a diverse range of styles, sizes, and fits to cater to every woman's unique taste and body type.
            Whether you're looking for a casual ensemble for a day out or a statement piece for a special occasion, we've got
            you covered.`,
      `Customer satisfaction is at the heart of everything we do. Our friendly and knowledgeable customer support team is
            always here to assist you with any questions or concerns you may have. We also strive to provide a seamless
            online shopping experience, from easy navigation to secure payment options and prompt delivery.`,
      `Thank you for choosing Dear K. as your fashion partner. Join us on this style journey and discover the
            perfect pieces that will elevate your wardrobe and bring out your inner confidence. Happy shopping!`
    ];
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_TextContainer = resolveComponent("TextContainer");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TextContainer, {
          title: _ctx.title,
          paragraphs: _ctx.paragraphs,
          image: _ctx.image
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TextContainer, {
            title: _ctx.title,
            paragraphs: _ctx.paragraphs,
            image: _ctx.image
          }, null, 8, ["title", "paragraphs", "image"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Support/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  About as default
};
