<script>
import OrderRow from '../../Components/Order/OrderRow.vue';
import CustomerLayout from '../../Layouts/CustomerLayout.vue';
import Layout from '../../Layouts/Layout.vue';
import { Link } from '@inertiajs/vue3';

export default {
    name: "Orders",
    props: {
        orders: Array,
        payment_url: String
    },
    components: {
        Layout,
        CustomerLayout,
        Link,
        OrderRow
    },
    data() {
        return {
            hasUnpaidOrder: this.orders.findIndex((order) => order.status === 'unpaid') > -1
        }
    }
}
</script>

<template>
    <Layout>
        <CustomerLayout>
            <p class="fs-4">Your Orders</p>
            <p v-if="hasUnpaidOrder" class="text-danger">
                * Orders that remain unpaid for more than 3 hours will be
                automatically cancelled.
            </p>
            <div class="container-xl border border-bottom-0">
                <div class="row border-bottom py-3 bg-light text-center d-none d-md-flex">
                    <div class="col-md-2">Order #</div>
                    <div class="col-md-3">Created Date</div>
                    <div class="col-md-2">Total</div>
                    <div class="col-md-2">Status</div>
                    <div class="col-md-3">Action</div>
                </div>
                <div v-if="orders.length === 0" class="row border-bottom text-center p-3">
                    <p class="fs-1 text-primary pt-2"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></p>
                    <p>No order found.</p>
                </div>
                <OrderRow v-for="order in orders" :order="order" :payment_url="payment_url" />
            </div>
        </CustomerLayout>
    </Layout>
</template>