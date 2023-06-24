import { _ as _export_sfc, L as Layout } from "./Layout-cbfb21e4.js";
import { P as ProductCard } from "./ProductCard-8ff2b3a2.js";
import { Link } from "@inertiajs/vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "aos";
const _sfc_main$4 = {
  name: "Pagination",
  components: {
    Link
  },
  props: {
    pagination: Object
  },
  data() {
    return {
      pages: []
    };
  },
  created() {
    if (this.pagination.last_page < 5) {
      for (var p = 1; p <= this.pagination.last_page; p++) {
        this.pages.push(this.pagination.links[p]);
      }
    } else if (this.pagination.current_page <= 3) {
      for (var p = 1; p <= 5; p++) {
        this.pages.push(this.pagination.links[p]);
      }
    } else if (this.pagination.current_page >= this.pagination.last_page - 2) {
      for (var p = this.pagination.last_page; p >= this.pagination.last_page - 4; p--) {
        this.pages.unshift(this.pagination.links[p]);
      }
    } else {
      for (var p = this.pagination.current_page - 2; p <= this.pagination.last_page + 2; p++) {
        this.pages.push(this.pagination.links[p]);
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "container d-flex justify-content-center my-4" }, _attrs))}><ul class="pagination pagination-sm"><li class="page-item">`);
  _push(ssrRenderComponent(_component_Link, {
    class: ["page-link", $props.pagination.current_page === 1 && "disabled"],
    href: $props.pagination.first_page_url,
    "aria-label": "First"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span aria-hidden="true"${_scopeId}>«</span>`);
      } else {
        return [
          createVNode("span", { "aria-hidden": "true" }, "«")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="page-item">`);
  _push(ssrRenderComponent(_component_Link, {
    class: ["page-link", $props.pagination.current_page === 1 && "disabled"],
    href: $props.pagination.prev_page_url,
    "aria-label": "Prev"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span aria-hidden="true"${_scopeId}>‹</span>`);
      } else {
        return [
          createVNode("span", { "aria-hidden": "true" }, "‹")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><!--[-->`);
  ssrRenderList($data.pages, (page) => {
    _push(`<li class="${ssrRenderClass([page.active && "active", "page-item"])}">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "page-link",
      href: page.url
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(page.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(page.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--><li class="page-item">`);
  _push(ssrRenderComponent(_component_Link, {
    class: ["page-link", $props.pagination.current_page === $props.pagination.last_page && "disabled"],
    href: $props.pagination.next_page_url,
    "aria-label": "Next"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span aria-hidden="true"${_scopeId}>›</span>`);
      } else {
        return [
          createVNode("span", { "aria-hidden": "true" }, "›")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="page-item">`);
  _push(ssrRenderComponent(_component_Link, {
    class: ["page-link", $props.pagination.current_page === $props.pagination.last_page && "disabled"],
    href: $props.pagination.last_page_url,
    "aria-label": "Last"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span aria-hidden="true"${_scopeId}>»</span>`);
      } else {
        return [
          createVNode("span", { "aria-hidden": "true" }, "»")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Product/Pagination.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  name: "ProductList",
  components: {
    ProductCard
  },
  props: {
    products: Array
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_ProductCard = resolveComponent("ProductCard");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
  if ($props.products.length < 1) {
    _push(`<div class="text-center my-5 p-5"><p class="fs-1 text-secondary">`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "x"] }, null, _parent));
    _push(`</p><p>No product found</p></div>`);
  } else {
    _push(`<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4"><!--[-->`);
    ssrRenderList($props.products, (product, idx) => {
      _push(`<div class="col">`);
      _push(ssrRenderComponent(_component_ProductCard, {
        "data-aos-delay": idx * 50,
        product
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Product/ProductList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProductList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "SortDropdown",
  props: {
    category: String,
    sortBy: String,
    orderBy: String,
    toggleReloading: Function
  },
  data() {
    return {
      options: [{
        name: "New Arrivals",
        sortBy: "created_at",
        orderBy: "desc"
      }, {
        name: "Best Sellers",
        sortBy: "inventories_sum_sold_quantity",
        orderBy: "desc"
      }, {
        name: "Price: Low to High",
        sortBy: "price",
        orderBy: "asc"
      }, {
        name: "Price: High to Low",
        sortBy: "price",
        orderBy: "desc"
      }],
      activeOptionIndex: -1
    };
  },
  methods: {
    handleClick(index) {
      this.activeOptionIndex = index;
      this.toggleReloading();
    }
  },
  created() {
    this.activeOptionIndex = this.options.findIndex((option) => option.sortBy === this.sortBy && option.orderBy === this.orderBy);
  },
  mounted() {
    import("@popperjs/core/dist/umd/popper.min.js");
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown" }, _attrs))}><span class="text-uppercase">Sort By: </span><button class="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">${ssrInterpolate($data.activeOptionIndex > -1 ? $data.options[$data.activeOptionIndex].name : $data.options[0].name)}</button><ul class="dropdown-menu"><!--[-->`);
  ssrRenderList($data.options, ({ name, sortBy, orderBy }, index) => {
    _push(`<li><a class="${ssrRenderClass([index === $data.activeOptionIndex && "active", "dropdown-item"])}"${ssrRenderAttr("href", `/products?sort_by=${sortBy}&order_by=${orderBy}${$props.category ? `&category=${$props.category}` : ""}`)}>${ssrInterpolate(name)}</a></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Product/SortDropdown.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SortDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "Breadcrumb",
  components: {
    Link
  },
  props: {
    category: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<nav${ssrRenderAttrs(mergeProps({ style: { "--bs-breadcrumb-divider": "'>'" } }, _attrs))}><ol class="breadcrumb text-uppercase"><li class="breadcrumb-item">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "link-secondary",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`HOME`);
      } else {
        return [
          createTextVNode("HOME")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li>`);
  if (!$props.category) {
    _push(`<li class="breadcrumb-item">ALL</li>`);
  } else {
    _push(`<li class="breadcrumb-item">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "link-secondary",
      href: "/products"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`ALL`);
        } else {
          return [
            createTextVNode("ALL")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  }
  if ($props.category) {
    _push(`<li class="breadcrumb-item">${ssrInterpolate($props.category)}</li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ol></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Product/Breadcrumb.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Category",
  components: {
    Layout,
    ProductCard,
    Pagination,
    ProductList,
    SortDropdown,
    Breadcrumb
  },
  props: {
    productsPage: Object,
    category: String,
    sortBy: String,
    orderBy: String
  },
  data() {
    return {
      pagination: {},
      isReloading: false
    };
  },
  methods: {
    toggleReloading() {
      this.isReloading = !this.isReloading;
    }
  },
  created() {
    const { data, ...pagination } = this.productsPage;
    this.pagination = pagination;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Breadcrumb = resolveComponent("Breadcrumb");
  const _component_SortDropdown = resolveComponent("SortDropdown");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_ProductList = resolveComponent("ProductList");
  const _component_Pagination = resolveComponent("Pagination");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container-lg mb-3 d-md-flex justify-content-between align-items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Breadcrumb, { category: $props.category }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SortDropdown, {
          category: $props.category,
          sortBy: $props.sortBy,
          orderBy: $props.orderBy,
          toggleReloading: $options.toggleReloading
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if ($data.isReloading) {
          _push2(`<div class="text-center my-5 p-5"${_scopeId}><p class="fs-1 text-secondary"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_font_awesome_icon, {
            icon: ["fas", "spinner"],
            spin: ""
          }, null, _parent2, _scopeId));
          _push2(`</p><p${_scopeId}>Loading</p></div>`);
        } else {
          _push2(`<div class="products flex-grow-1 d-flex flex-column"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_ProductList, {
            products: $props.productsPage.data,
            class: "flex-grow-1"
          }, null, _parent2, _scopeId));
          if ($props.productsPage.last_page > 1) {
            _push2(ssrRenderComponent(_component_Pagination, { pagination: $data.pagination }, null, _parent2, _scopeId));
          } else {
            _push2(`<div class="custom-placeholder mb-5"${_scopeId}></div>`);
          }
          _push2(`</div>`);
        }
      } else {
        return [
          createVNode("div", { class: "container-lg mb-3 d-md-flex justify-content-between align-items-center" }, [
            createVNode(_component_Breadcrumb, { category: $props.category }, null, 8, ["category"]),
            createVNode(_component_SortDropdown, {
              category: $props.category,
              sortBy: $props.sortBy,
              orderBy: $props.orderBy,
              toggleReloading: $options.toggleReloading
            }, null, 8, ["category", "sortBy", "orderBy", "toggleReloading"])
          ]),
          $data.isReloading ? (openBlock(), createBlock("div", {
            key: 0,
            class: "text-center my-5 p-5"
          }, [
            createVNode("p", { class: "fs-1 text-secondary" }, [
              createVNode(_component_font_awesome_icon, {
                icon: ["fas", "spinner"],
                spin: ""
              })
            ]),
            createVNode("p", null, "Loading")
          ])) : (openBlock(), createBlock("div", {
            key: 1,
            class: "products flex-grow-1 d-flex flex-column"
          }, [
            createVNode(_component_ProductList, {
              products: $props.productsPage.data,
              class: "flex-grow-1"
            }, null, 8, ["products"]),
            $props.productsPage.last_page > 1 ? (openBlock(), createBlock(_component_Pagination, {
              key: 0,
              pagination: $data.pagination
            }, null, 8, ["pagination"])) : (openBlock(), createBlock("div", {
              key: 1,
              class: "custom-placeholder mb-5"
            }))
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Products = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Products as default
};
