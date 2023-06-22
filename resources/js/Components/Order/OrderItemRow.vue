<script>
import { Link } from '@inertiajs/vue3';

export default {
    name: "OrderItemRow",
    props: {
        orderItem: Object,
    },
    components: {
        Link
    }
}
</script>

<template>
    <div class="row border-bottom text-center py-2">
        <div class="col-md-6 d-flex gap-2 my-2">
            <div class="p-0">
                <Link :href="`/products/${orderItem.inventory.product_id}`">
                <img :src="`/storage/${orderItem.inventory.product.images[0].image_url}`" class="product_image" alt="">
                </Link>
            </div>
            <div class="flex-grow-1 text-start p-0">
                <Link :href="`/products/${orderItem.inventory.product_id}`"
                    class="link-dark link-underline link-underline-opacity-0">
                <p class="mb-1"><small>{{ orderItem.inventory.product.product_name }}</small></p>
                </Link>
                <p class="text-black-50 mb-1"><small>Color: {{ orderItem.inventory.color.color_name }}</small>
                </p>
                <p class="text-black-50"><small>Size: {{ orderItem.inventory.size.size_name }}</small></p>
            </div>
        </div>
        <div class="col-3 col-md-2 my-2 text-black-50">${{ orderItem.unit_price }}</div>
        <div class="col-1 d-md-none my-2 text-black-50">x</div>
        <div class="col-3 col-md-2 my-2 text-black-50">{{ orderItem.quantity }}</div>
        <div class="col-1 d-md-none my-2 text-black-50">=</div>
        <div class="col-4 col-md-2 my-2">${{ orderItem.subtotal }}</div>
    </div>
</template>

<style lang="scss" scoped>
.product_image {
    width: 75px;
    height: 100px;
    object-fit: cover;
}
</style>