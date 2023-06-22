<script>
import { Link } from '@inertiajs/vue3';
import Layout from '../../Layouts/Layout.vue';

export default {
    name: "Failure",
    props: {
        message: String,
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
            <p class="failure-icon my-3 text-danger"><font-awesome-icon :icon="['fa', 'circle-xmark']" /></p>
            <p class="fs-4 text-capitalize">Failure to Pay</p>
            <p v-if="message">Message: {{message}}</p>
            <Link :href="`/orders`" class="mt-5 btn btn-primary btn-lg rounded-0 text-white mb-3">View My Orders</Link>
            <!-- <Link :href="`/`" class="btn btn-secondary btn-lg rounded-0 text-white mb-3">Return to Home</Link> -->
        </div>
    </Layout>
</template>

<style lang="scss" scoped>
 .failure-icon {
    font-size: 80px;
 }
</style>