<script>
export default {
    name: "TextContainer",
    props: {
        title: String,
        image: Object,
        paragraphs: Array,
    }
}
</script>

<template>
    <div class="text-container" data-aos="fade-left" data-aos-once="true" data-aos-duration="1500">
        <h3>{{ title }}</h3>
        <div v-if="image" class="img-container">
            <img :src="`${image?.src}`" :alt="image?.alt">
        </div>
        <p v-for="paragraph in paragraphs">
            {{ paragraph }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../scss/custom' as *;

.text-container {
    width: 90%;
    max-width: 800px;
    margin: 50px auto;
    line-height: 1.75rem;

    h3 {
        text-transform: uppercase;
        margin-bottom: 30px;
        position: relative;

        &::after {
            content: "";
            width: 3rem;
            height: 0.15rem;
            position: absolute;
            left: 0;
            bottom: -10px;
            display: block;
            background-color: $secondary;
        }
    }

    .img-container {
        position: relative;
        max-width: 400px;
        width: 100%;
        padding: 20px;
        margin: auto;

        img {
            width: 100%;
            object-fit: contain;
        }

        @include media-breakpoint-up(sm) {
            float: right;

            &::before {
                content: "";
                width: 50px;
                height: 50px;
                position: absolute;
                top: 0;
                right: 0;
                border-right: 3px solid $primary;
                border-top: 3px solid $primary;
            }
        }
    }
}
</style>