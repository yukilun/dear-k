<script>
import OrderInfo from '../../Components/Order/OrderInfo.vue';
import OrderItemsTable from '../../Components/Order/OrderItemsTable.vue';
import PaymentInfo from '../../Components/Order/PaymentInfo.vue';
import ShippingAddress from '../../Components/Order/ShippingAddress.vue';
import BillingAddress from '../../Components/Order/BillingAddress.vue';
import CustomerLayout from '../../Layouts/CustomerLayout.vue';
import Layout from '../../Layouts/Layout.vue';
import { Link, router } from '@inertiajs/vue3';

export default {
    name: "Order",
    props: {
        order: Object,
        orderShippingDetail: Object,
        orderBillingDetail: Object,
        orderItems: Array,
        payment: Object,
        shipper: Object,
        payment_url: String,
    },
    components: {
        Layout,
        CustomerLayout,
        Link,
        OrderItemsTable,
        OrderInfo,
        PaymentInfo,
        ShippingAddress,
        BillingAddress
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
    <Layout>
        <CustomerLayout>
            <div class="mb-4">
                <Link href="/orders" class="link link-underline link-underline-opacity-0" preserve-scroll>
                &#10094; &nbsp;Back to All Orders
                </Link>
            </div>

            <p class="fs-4">Order Summary</p>

            <p v-if="order.status === 'unpaid'" class="text-danger d-flex flex-column flex-md-row align-items-md-center">
                * This order will be automatically cancelled if it remains unpaid for more than 3 hours. &nbsp;
                <button @click="checkoutOrder" class="my-3 my-md-0 btn btn-warning text-white rounded-0">
                    Pay now
                </button>
            </p>

            <div v-if="order.status === 'cancelled'" class="text-danger">
                <p class="mb-2">This order has been automatically cancelled as it remains unpaid for more than 3 hours.</p>
                <p>If you wish to order the items, please place the order again.</p>
            </div>


            <OrderItemsTable :order="order" :orderItems="orderItems" :class="order.status === 'cancelled' && `opacity-50`"/>

            <div class="container-xl px-3 pt-4 pt-md-5" :class="order.status === 'cancelled' && `opacity-50`">
                <div class="row row-cols-1 row-cols-md-2">
                    <OrderInfo :order="order" :shipper="shipper" />
                    <PaymentInfo :payment="payment" />
                    <ShippingAddress :orderShippingDetail="orderShippingDetail" />
                    <BillingAddress :orderBillingDetail="orderBillingDetail" />
                </div>
            </div>

        </CustomerLayout>
    </Layout>
</template>

