<script>
import { register } from 'swiper/element/bundle';
register();

export default {
    name: 'Carousel',
    props: {
        banners: Array
    }
}
</script>

<template>
    <div class="container-lg" data-aos="fade-right" data-aos-once="true" data-aos-duration="2500">
        <swiper-container navigation="true" :pagination="{clickable: true}" speed="500" loop="true" autoplay-delay="2000"
            autoplay-disable-on-interaction="false">
            <swiper-slide v-for="banner in banners">
                <img :src="`/storage/${banner.banner_url}`" class="d-block w-100" alt="...">
            </swiper-slide>
            <!-- <swiper-slide>
                <img src="https://placehold.co/1600x1600/E4D5B7/FFF?text=banner+1" class="d-block w-100" alt="...">
            </swiper-slide>
            <swiper-slide>
                <img src="https://placehold.co/1600x800/bac99a/FFF?text=banner+2" class="d-block w-100" alt="...">
            </swiper-slide>
            <swiper-slide>
                <img src="https://placehold.co/1600x800/CCCCCC/FFF?text=banner+3" class="d-block w-100" alt="...">
            </swiper-slide> -->
        </swiper-container>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/custom' as *;
swiper-container {
    --swiper-theme-color: white;
    --swiper-navigation-size: 0px;
    --swiper-pagination-bullet-size: 0px;

    @include media-breakpoint-up(lg) {
        --swiper-navigation-size: 30px;
        --swiper-pagination-bullet-size: 8px;
    }

    swiper-slide {
        aspect-ratio: 2 / 1;

        img {
            width: 100%;
            height: 100%;
            object-position: center center;
            object-fit: cover;
        }
    }
}


</style>