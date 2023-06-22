<script>
import TextContainer from '../../Components/Support/TextContainer.vue';
import Layout from '../../Layouts/Layout.vue';
export default {
    name: "Return",
    components: {
        Layout,
        TextContainer
    },
    created() {
        this.title = "Return";
        this.paragraphs = [
            `If you are not satisfied with your purchase, you can return the item(s) within 14 days of receiving them.`,
            `The item(s) must be unworn, in their original condition, and with all tags attached.`,
            `To initiate a return, please contact our customer support team with your order details. They will guide you through the return process.`,
            `Once we receive the returned item(s), we will process the refund within 5-7 business days to your original payment method.`,
            `Please note that shipping costs for returns are the responsibility of the customer, unless the return is due to a damaged or incorrect item.`
        ];
    }
}
</script>

<template>
    <Layout>
        <TextContainer :title="title" :paragraphs="paragraphs" :image="image" />
    </Layout>
</template>