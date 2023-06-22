<script>
import Layout from '../Layouts/Layout.vue';
import Carousel from '../Components/Carousel.vue';
import FeatureProducts from '../Components/FeatureProducts.vue';

export default {
    name: 'Home',
    components: {
        Layout,
        Carousel,
        FeatureProducts
    },
    props: {
        bestProducts: Array,
        newProducts: Array,
        banners: Array,
    }
}
</script>

<template>
    <Layout>
        <Carousel :banners="banners" />
        <FeatureProducts :products="newProducts" title="New Items" class="bg-light mt-4" />
        <FeatureProducts :products="bestProducts" title="Best Seller" />
    </Layout>
</template>