<script>
import { Link } from '@inertiajs/vue3';
import Layout from '../../Layouts/Layout.vue';

export default {
    name: "Success",
    props: {
        name: String,
        order_id: String,
    },
    components: {
    Layout,
    Link
}
}
</script>

<template>
    <Layout>
        <div class="m-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
            <p class="success-icon my-3 text-success"><font-awesome-icon :icon="['fa', 'circle-check']" /></p>
            <p class="fs-4 text-capitalize">{{ name }}, thank you for your order!</p>
            <p>You will recieve an order confirmation email from us.</p>
            <p class="mb-5">Your Order # : {{ String(order_id).padStart(10, '0') }} </p>
            <Link :href="`/orders/${order_id}`" class="btn btn-primary btn-lg rounded-0 text-white mb-3">View My Order</Link>
        </div>
    </Layout>
</template>

<style lang="scss" scoped>
 .success-icon {
    font-size: 80px;
 }
</style>