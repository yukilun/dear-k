<script>
import ProductCard from '../ProductCard.vue'
export default {
    name: "ProductList",
    components: {
        ProductCard,
    },
    props: {
        products: Array,
    }
}
</script>

<template>
    <div class="container">
        <div v-if="products.length < 1" class="text-center my-5 p-5">
            <p class="fs-1 text-secondary"><font-awesome-icon :icon="['fas', 'x']" /></p>
            <p>No product found</p>
        </div>
        <div v-else class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
            <div class="col" v-for="(product, idx) in products">
                <ProductCard :data-aos-delay="idx * 50" :product="product" />
            </div>
        </div>
    </div>
</template>