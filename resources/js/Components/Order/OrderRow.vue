<script>
import { router, Link } from '@inertiajs/vue3';
import OrderStatus from './OrderStatus.vue';

export default {
    name: "OrderRow",
    props: {
        order: Object,
        payment_url: String  
    },
    components: {
    Link,
    OrderStatus
},
    methods: {
        checkoutOrder() {
            router.post('/checkout/' + this.order.id, {}, {
                onSuccess: () => {
                    window.location.href = this.payment_url;
                }
            });
        }
    }
}
</script>

<template>
    <div class="row border-bottom text-md-center align-items-center p-2 p-md-0">
        <div class="col-md-2 py-1"><span class="d-md-none text-black-50">Order # </span>{{ String(order.id).padStart(10, '0') }}</div>
        <div class="col-md-3 py-1"><span class="d-md-none text-black-50">Created at &nbsp;</span>{{ new
            Date(order.created_at).toString().slice(4, 15) }}</div>
        <div class="col-md-2 py-1"><span class="d-md-none text-black-50">Total Amount: &nbsp;</span>${{ order.total }}</div>
        <div class="col-md-2 py-1 d-flex justify-content-md-center gap-2">
            <span class="d-md-none text-black-50">Status: </span>
            <OrderStatus :status="order.status"/>
        </div>
        <div class="col-md-3 py-2 d-flex gap-2 justify-content-md-center">
            <Link :href="`/orders/${order.id}`" class="btn btn-secondary text-white rounded-0">
            View
            </Link>
            <button @click="checkoutOrder" v-if="order.status === 'unpaid'"
                class="btn btn-warning text-white rounded-0">
                Pay
            </button>
        </div>
    </div>
</template>