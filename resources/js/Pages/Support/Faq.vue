<script>
import FaqContainer from '../../Components/Support/FaqContainer.vue';
import Layout from '../../Layouts/Layout.vue';
export default {
    name: "Faq",
    components: {
        Layout,
        FaqContainer
    },
    created() {
        this.title = "Frequently Asked Questions";
        this.questions = [
            {
                question: `Do you offer international shipping? `,
                answer: `No, currently we only ship within Canada.`,
            },
            {
                question: `How long does it take to process and ship an order?`,
                answer: `We strive to process and ship all orders within 1-2 business days.`,
            },
            {
                question: `What are the payment options available? `,
                answer: `We accept major credit cards (Visa, Mastercard, American Express) for secure online payments.`,
            },
            {
                question: `Do you have a physical store where I can try on the clothes? `,
                answer: `We are an online-only store, but we offer detailed size charts and measurements for each product to help you make the right choice.`,
            },
            {
                question: `How can I track my order?`,
                answer: `Once your order is shipped, we will provide you with a tracking number via email. You can use this tracking number to monitor the status of your shipment.`,
            },
            {
                question: `What if I receive a damaged or incorrect item?`,
                answer: `We apologize for any inconvenience. Please contact our customer support within 48 hours of receiving the package, and we will assist you with the return or exchange process.`,
            }
        ];
    }
}
</script>

<template>
    <Layout>
        <FaqContainer :title="title" :questions="questions" />
    </Layout>
</template>