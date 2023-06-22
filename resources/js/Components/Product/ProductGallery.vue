<script>
export default {
    name: 'ProductGallery',
    props: {
        images: Array,
    },
    data() {
        return {
            displayIndex: 0
        }
    },
    methods: {
        slidePrev() {
            this.$refs.navSwiper.swiper.slidePrev();
        },
        slideNext() {
            this.$refs.navSwiper.swiper.slideNext();
        },
        changeDisplayIndex(index) {
            this.$refs.displaySwiper.swiper.slideTo(index);
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-lg-3 d-none d-lg-block">
            <div class="d-grid gap-2">
                <button class="btn btn-light opacity-75 text-black-50 rounded-0 p-0 mb-2" @click="slidePrev">
                    <font-awesome-icon :icon="['fas', 'chevron-up']" />
                </button>
            </div>
            <swiper-container class="navSwiper" ref="navSwiper" direction="vertical" space-between="5"
                slides-per-view="auto">
                <swiper-slide v-for="{ image_url }, index in images" @click="changeDisplayIndex(index)">
                    <img :src="`/storage/${image_url}`" :alt="index">
                </swiper-slide>
            </swiper-container>
            <div class="d-grid gap-2">
                <button class="btn btn-light opacity-75 text-black-50 rounded-0 p-0 mt-2" @click="slideNext">
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                </button>
            </div>
        </div>
        <div class="col-12 col-lg-9">
            <swiper-container class="displaySwiper" ref="displaySwiper" :pagination="{ clickable: true }">
                <swiper-slide v-for="{ image_url }, index in images">
                    <img :src="`/storage/${image_url}`" :alt="index">
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
    object-position: center center;
    object-fit: cover;
}

.navSwiper {
    width: 100%;
    aspect-ratio: 1 / 3;

    swiper-slide {
        height: fit-content;
        cursor: pointer;
    }
}

.displaySwiper {
    width: 100%;
    aspect-ratio: 3 / 4;
    --swiper-theme-color: white;
}
</style>