<script>
import { Link } from '@inertiajs/vue3';

export default {
    name: "MessageModal",
    props: {
        isOpenModal: Boolean,
        closeModal: Function,
        status: String
    },
    components: { 
        Link 
    }
}
</script>
<template>
    <div class="message-modal z-3 position-fixed top-0 start-0 w-100 h-100 bg-black" style="--bs-bg-opacity: .5;"
        :class="!isOpenModal && 'invisible'" @click.self="closeModal">

        <div class="message-modal-content position-absolute top-50 start-50 px-3 py-4 bg-light"
            :class="isOpenModal && 'active'">

            <div class="text-end">
                <button type="button" @click="closeModal" class="link-primary bg-light border-0 mb-4">
                    <font-awesome-icon :icon="['fas', 'x']" />
                </button>
            </div>

            <div class="px-3 py-3 text-center">

                <div v-if="status === 'error'">
                    <p class="fs-1 text-danger"><font-awesome-icon :icon="['fa', 'circle-xmark']" /></p>
                    <p class="fs-5 text-uppercase">Cannot add to cart</p>     
                </div>

                <div v-if="status === 'success'">
                    <p class="fs-1 text-success"><font-awesome-icon :icon="['fa', 'circle-check']" /></p>
                    <p class="fs-5 text-uppercase">Added to cart</p>     
                </div>

                <div class="d-grid gap-2 mt-5">
                    <Link v-if="status === 'success'" href="/cart" class="btn btn-primary py-2 text-white rounded-0 mb-2">View Cart and Checkout</Link>
                    <button type="button" @click="closeModal" class="btn btn-secondary py-2 text-white rounded-0">Continue Shopping</button>
                </div>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../../../scss/mixins' as *;

.message-modal-content {
    width: 90%;
    max-width: 450px;
    opacity: 0;
    transform: translateX(-50%) translateY(-300%);
    @include transitionProps;

    &.active {
        opacity: 100%;
        transform: translateX(-50%) translateY(-50%) !important;
    }
}
</style>
