<script>
import ProductCard from './ProductCard.vue'
export default {
    name: "FeatureProducts",
    components: {
        ProductCard,
    },
    props: {
        products: Array,
        title: String
    }
}
</script>

<template>
    <div class="border-box">
        <div class="container px-2 py-5">
            <p class="fs-4 text-uppercase text-center">{{ title }}</p>
            <div class="heading-line mb-5"></div>
            <div v-if="products.length < 1" class="text-center p-5">
                <p class="fs-1 text-secondary"><font-awesome-icon :icon="['fas', 'x']" /></p>
                <p>No product found</p>
            </div>
            <div v-else class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                <div class="col" v-for="(product, idx) in products">
                    <ProductCard :data-aos-delay="idx * 50" :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>