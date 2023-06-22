<script>
import { Link, router, usePage } from '@inertiajs/vue3';
import Layout from '../../Layouts/Layout.vue';
import CartItem from '../../Components/Cart/CartItem.vue';

export default {
    name: "Cart",
    props: {
        cartItems: Array,
        canCheckout: Boolean,
        total: String
    },
    components: {
        Layout,
        Link,
        CartItem
    },
    created() {
        console.log(this.cartItems);
        this.page = usePage();
    },
    methods: {
        checkout() {
            router.get('')
        }
    }
}
</script>

<template>
    <Layout>
        <div class="container-lg my-5">
            <p class="fs-4 text-center text-uppercase text-center">Shopping Cart</p>
            <div class="heading-line mb-5"></div>

            <div v-if="cartItems.length === 0" class="mb-4 text-center">
                <p class="fs-1"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></p>
                <p class="mb-5">Your cart is empty.</p>
                <Link href="/" class="btn btn-primary btn-lg px-5 text-white rounded-0 mb-4">Go Shopping</Link>
            </div>

            <div v-if="cartItems.length > 0" class="table container-lg">
                <div class="table-header row d-none d-md-flex text-center text-uppercase text-primary py-2 border-bottom">
                    <div class="col-md-6">Product</div>
                    <div class="col-md-1">Price</div>
                    <div class="col-md-3">Quantity</div>
                    <div class="col-md-1">Subtotal</div>
                    <div class="col-md-1"> </div>
                </div>
                <CartItem v-for="cartItem in cartItems" :cartItem="cartItem" />
            </div>

            <div v-if="cartItems.length > 0" class="row justify-content-end">
                <div class="col-md-6 col-lg-5 col-xl-4 py-2 px-4 px-md-2 " >
                    <div class="row mb-4 fs-5 fw-semibold text-uppercase">
                        <div class="col-6">
                            Subtotal 
                            <br/>
                            <span class="fw-normal fs-6 text-capitalize">
                                ({{ page.props.cart_total_quantity }} items)
                            </span> 
                        </div>
                        <div class="col-6">${{ total }}</div>
                    </div>
                    <div class="mb-4 text-black-50">
                        Shipping and taxes calculated at checkout.
                    </div>
                    <div class="d-grid">
                        <Link href="/checkout" v-if="canCheckout" class="btn btn-primary btn-lg rounded-0 text-white">
                                <small><font-awesome-icon :icon="['fas', 'lock']"/></small>
                                &nbsp; Process to Checkout
                        </Link>
                        <button v-else class="btn btn-primary btn-lg rounded-0 text-white" :disabled="true">
                            Unable to Checkout
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </Layout>
</template>