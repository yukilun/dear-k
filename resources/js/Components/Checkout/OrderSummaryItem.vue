<script>
import { Link } from '@inertiajs/vue3';

export default {
    name: "OrderSummaryItem",
    props: {
        cartItem: Object
    },
    components: { Link }
}
</script>

<template>
    <div class="d-flex gap-2 mb-3">
        <div class="p-0">
            <Link :href="`/products/${cartItem.inventory.product_id}`">
                <img :src="`/storage/${cartItem.inventory.product.images[0].image_url}`" class="product_image" alt="">
            </Link>
        </div>
        <div class="flex-grow-1 text-start p-0">
            <Link :href="`/products/${cartItem.inventory.product_id}`"
                class="link-dark link-underline link-underline-opacity-0">
            <p class="fw-semibold lh-1 mb-2"><small>{{ cartItem.inventory.product.product_name }}</small></p>
            </Link>
            <p class="text-black-50 lh-1 mb-1"><small>Color: {{ cartItem.inventory.color.color_name }}</small></p>
            <p class="text-black-50 lh-1 mb-1"><small>Size: {{ cartItem.inventory.size.size_name }}</small></p>
            <p class="text-black-50 lh-1 mb-1"><small>Qty: {{ cartItem.quantity }}</small></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product_image {
    width: 75px;
    height: 100px;
    object-fit: cover;
}
</style>