<script>
import { Link } from '@inertiajs/vue3';
export default {
    name: 'ProductCard',
    data() {
        return {
            imgUrls: ['https://placehold.co/600x800/E4D5B7/FFF?text=image+1', 'https://placehold.co/600x800/bac99a/FFF?text=image+2'],
            imgIndex: 0,
            timer: null
        }
    },
    props: {
        product: Object
    },
    components: {
        Link,
    },
    created() {
        this.imgUrls = this.product.images.reduce((acc, img) => {
            if (img.is_main_image === 1) {
                acc.push('/storage/' + img.image_url);
            }
            return acc;
        }, []);
        this.timer = setInterval(() => {
            if (this.imgIndex < this.imgUrls.length - 1) {
                this.imgIndex++;
            }
            else {
                this.imgIndex = 0;
            }
        }, 3000);
    },
    unmounted() {
        clearInterval(this.timer);
    },
    computed: {
        getUniqueColorHex() {
            const colors = [...new Set(this.product.inventories.map(inventory => inventory.color.color_hex))];
            colors.sort((a, b) => {
                const sumA = parseInt(a.slice(0, 2), 16) + parseInt(a.slice(2, 4), 16) + parseInt(a.slice(4, 6), 16);
                const sumB = parseInt(b.slice(0, 2), 16) + parseInt(b.slice(2, 4), 16) + parseInt(b.slice(4, 6), 16);
                return sumB - sumA;
            });
            return colors;
        }
    }
}
</script>

<template>
    <div class="productcard border-0 bg-transparent" data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
        <Link :href="`/products/${product.id}`">
        <div class="productcard-img mb-2" :style="`background-image: url(${imgUrls[imgIndex]})`">
        </div>
        <div class="productcard-colors d-flex mb-3">
            <div class="color" v-for="hex in getUniqueColorHex" :style="`background: #${hex}`"> </div>
        </div>
        <div class="productcard-info">
            <p class="name fs-6 mb-2 lh-normal">{{ product ? product.product_name : 'name' }}</p>
            <p class="price fs-5">${{ product ? product.price : '20' }}</p>
        </div>
        </Link>
        <div class="preload-images d-none">
            <img v-for="imgUrl in imgUrls" :src="imgUrl" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/custom' as *;
@use '../../scss/mixins' as *;

a {
    text-decoration: none;
    color: $gray-600;
}

.productcard {
    &:hover {
        .productcard-img {
            background-size: 110% 110%;
        }
    }

    &-img {
        aspect-ratio: 3 / 4;
        background-position: center center;
        background-size: 100% 100%;
        @include transitionProps;
    }

    &-colors {
        .color {
            height: 20px;
            width: 20px;
            border: 2px solid $gray-400;
            margin-right: 5px;
        }
    }
}
</style>
