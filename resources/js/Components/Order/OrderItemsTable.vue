<script>
import OrderItemRow from './OrderItemRow.vue';
export default {
    name: 'OrderItemsTable',
    props: {
        order: Object,
        orderItems: Array
    },
    components: {
        OrderItemRow
    }
}
</script>

<template>
    <div class="order-items-table container-xl border border-bottom-0">
        <div class="row border-bottom py-3 bg-light text-center d-none d-md-flex">
            <div class="col-md-6">Product</div>
            <div class="col-md-2">Price</div>
            <div class="col-md-2">Quantity</div>
            <div class="col-md-2">Subtotal</div>
        </div>
        <div class="row border-bottom py-3 bg-light text-center d-flex d-md-none">
            <div>Ordered Items</div>
        </div>

        <OrderItemRow v-for="orderItem in orderItems" :orderItem="orderItem" />

        <div class="row border-bottom py-3 justify-content-end">
            <div class="col col-md-4 col-lg-3 mx-4 mx-lg-5">
                <div class="row text-black-50 mb-1">
                    <div class="col-6">Subtotal</div>
                    <div class="col-6 text-end">${{ order.subtotal }}</div>
                </div>
                <div class="row text-black-50 mb-1">
                    <div class="col-6">Shipping</div>
                    <div class="col-6 text-end">${{ order.shipping_fee }}</div>
                </div>
                <div class="row text-black-50 mb-2">
                    <div class="col-6">Sales Tax</div>
                    <div class="col-6 text-end">${{ order.sales_tax }}</div>
                </div>
                <div class="row fw-semibold fs-5 mb-1 text-uppercase py-2 border-top">
                    <div class="col-6">Total</div>
                    <div class="col-6 text-end">${{ order.total }}</div>
                </div>
            </div>
        </div>
    </div>
</template>