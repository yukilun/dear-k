<script>
import TextContainer from '../../Components/Support/TextContainer.vue';
import Layout from '../../Layouts/Layout.vue';
export default {
    name: "About",
    components: {
        Layout,
        TextContainer
    },
    created() {
        this.title = "About";
        this.image = { src: "../../../../public/images/studio.jpg", alt: "studio photo" };
        this.paragraphs = [
            ` Welcome to Dear K., your go-to destination for simple and trendy Korean-style clothing for women in Canada.At Dear
            K., we believe that fashion should be accessible, effortless, and empowering.We curate a collection of
            carefully selected pieces that reflect the latest fashion trends while maintaining a timeless elegance.`,
            `Our mission is to inspire women to embrace their individuality and express their personal style with
            confidence. Each item in our collection is thoughtfully designed and crafted to ensure both quality and comfort, so you
            can look and feel your best in every outfit.`,
            `We understand that fashion is more than just clothing; it's a form of self-expression. That's why we are
            dedicated to offering a diverse range of styles, sizes, and fits to cater to every woman's unique taste and body type.
            Whether you're looking for a casual ensemble for a day out or a statement piece for a special occasion, we've got
            you covered.`,
            `Customer satisfaction is at the heart of everything we do. Our friendly and knowledgeable customer support team is
            always here to assist you with any questions or concerns you may have. We also strive to provide a seamless
            online shopping experience, from easy navigation to secure payment options and prompt delivery.`,
            `Thank you for choosing Dear K. as your fashion partner. Join us on this style journey and discover the
            perfect pieces that will elevate your wardrobe and bring out your inner confidence. Happy shopping!`
        ];
    }
}
</script>

<template>
    <Layout>
        <TextContainer :title="title" :paragraphs="paragraphs" :image="image" />
    </Layout>
</template>