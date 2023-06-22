<script>
import { Link, router } from '@inertiajs/vue3';
export default {
    name: "CartItem",
    components: {
        Link
    },
    props: {
        cartItem: Object,
    },
    data() {
        return {
            quantity: this.cartItem.quantity
        }
    },
    methods: {
        addQuantity() {
            this.quantity = this.quantity + 1;
            router.post('/cart/update-quantity', {
                inventory_id: this.cartItem.inventory_id,
                quantity: this.quantity
            }, {
                preserveScroll: true,
            });
        },
        reduceQuantity() {
            this.quantity = this.quantity - 1;
            router.post('/cart/update-quantity', {
                inventory_id: this.cartItem.inventory_id,
                quantity: this.quantity
            }, {
                preserveScroll: true,
            });
        },
        removeCartItem() {
            router.post('/cart/remove', {
                inventory_id: this.cartItem.inventory_id
            }, {
                preserveScroll: true,
            });
        }
    },
    computed: {
        isAvailable() {
            return this.cartItem.availability === 'available';
        },
        disableReduceQuantity() {
            return this.quantity <= 1;
        },
        disableAddQuantity() {
            return this.quantity >= this.cartItem.inventory.stock_quantity;
        },
    }
}
</script>

<template>
    <div class="table-row row py-3 pt-5 pt-md-3 border-bottom position-relative">
        <div class="col-md-6 d-flex gap-2">
            <div class="p-0">
                <Link :href="`/products/${cartItem.inventory.product_id}`">
                <img :src="`/storage/${cartItem.inventory.product.images[0].image_url}`" class="product_image" alt="">
                </Link>
            </div>
            <div class="flex-grow-1 text-start p-0" :class="!isAvailable && 'opacity-50'">
                <Link :href="`/products/${cartItem.inventory.product_id}`"
                    class="link-dark link-underline link-underline-opacity-0">
                <p class="fw-semibold mb-1">{{ cartItem.inventory.product.product_name }}</p>
                </Link>
                <p class="text-black-50 mb-1"><small>Color: {{ cartItem.inventory.color.color_name }}</small></p>
                <p class="text-black-50"><small>Size: {{ cartItem.inventory.size.size_name }}</small></p>
            </div>
        </div>
        <div class="col-md-1 mb-3 text-md-center" :class="!isAvailable && 'opacity-50'">
            <span class="d-md-none">Price:</span>
            ${{ cartItem.inventory.product.price }}
        </div>
        <div class="col-md-3 mb-3 text-md-center d-flex align-items-center d-md-block">
            <span class="d-md-none">Quantity:</span>
            <div class="flex-grow-1 d-flex justify-content-md-center py-0">
                <button class="quantity-btn px-3 btn btn-primary text-white rounded-0" @click="reduceQuantity"
                    :disabled="disableReduceQuantity">
                    -
                </button>
                <div class="border w-50 py-1 text-center">{{ cartItem.quantity }}</div>
                <button class="quantity-btn px-3 btn btn-primary text-white rounded-0" @click="addQuantity"
                    :disabled="disableAddQuantity">
                    +
                </button>
            </div>
        </div>
        <div class="col-md-1 mb-3 text-md-center fw-semibold" :class="!isAvailable && 'opacity-50'">
            <span class="d-md-none">Subtotal:</span>
            ${{ cartItem.subtotal }}
        </div>
        <div class="col-md-1 text-md-center">
            <button @click="removeCartItem" class="link link-danger border-0 p-3 position-absolute top-0 end-0">
                <font-awesome-icon :icon="['fas', 'x']" />
            </button>
        </div>
        <div v-if="!isAvailable" class="my-3 my-md-1 text-danger">
            * {{ cartItem.availability }}, please update quantity or remove this item
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product_image {
    width: 60px;
    height: 80px;
    object-fit: cover;
}
</style>