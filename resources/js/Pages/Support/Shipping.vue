<script>
import TextContainer from '../../Components/Support/TextContainer.vue';
import Layout from '../../Layouts/Layout.vue';
export default {
    name: "Shipping",
    components: {
        Layout,
        TextContainer
    },
    created() {
        this.title = "Shipping";
        this.paragraphs = [
            `We currently offer free shipping on all orders over $100 within Canada.`,
            `We use reliable shipping carriers to ensure prompt and secure delivery.`,
            `Delivery times may vary depending on the destination. Generally, it takes 3-7 business days for orders to arrive after they have been shipped.`,
            `Please note that any customs duties or taxes imposed by the destination country are the responsibility of the customer.`,
        ];
    }
}
</script>

<template>
    <Layout>
        <TextContainer :title="title" :paragraphs="paragraphs" :image="image" />
    </Layout>
</template>