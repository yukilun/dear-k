<script>
import ProductOptions from '../../Components/Product/ProductOptions.vue';
import ProductGallery from '../../Components/Product/ProductGallery.vue';
import Layout from '../../Layouts/Layout.vue';
import { register } from 'swiper/element/bundle';
import ProductAccordion from '../../Components/Product/ProductAccordion.vue';
import ProductCard from '../../Components/ProductCard.vue';
import FeatureProducts from '../../Components/FeatureProducts.vue';
register();

export default {
    name: "Product",
    components: {
    Layout,
    ProductGallery,
    ProductOptions,
    ProductAccordion,
    ProductCard,
    FeatureProducts
},
    props: {
        product: Array,
        exploreProducts: Array
    }
}
</script>

<template>
    <Layout>
        <div class="container-lg my-md-5 ">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-5">
                    <ProductGallery :images="product[0].images" />
                </div>
                <div class="col-12 col-md-6 col-lg-7 py-3 px-md-5 py-md-0">
                    <p class="fs-4">{{ product[0].product_name }}</p>
                    <p class="fs-5 fw-semibold mb-4">${{ product[0].price }}</p>
                    <ProductOptions class="mb-5" :inventories="product[0].inventories" />
                    <ProductAccordion :description="product[0].description" />
                </div>
            </div>
        </div>
        <FeatureProducts class="bg-light mt-5" :products="exploreProducts" title="Explore More"/>
    </Layout>
</template>