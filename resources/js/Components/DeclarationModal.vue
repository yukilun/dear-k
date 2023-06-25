<script>
import { Link } from '@inertiajs/vue3';

export default {
    name: "DeclarationModal",
    data() {
        return {
            isOpenModal: false,
        }
    },
    components: {
        Link
    },
    methods: {
        closeModal() {
            this.isOpenModal = false;
            localStorage.setItem('hasReadDeclearationAt', new Date().toISOString());
        }
    },
    mounted() {
        // show open for first visit user or user visited our site more than 1 week ago
        this.isOpenModal = !localStorage.getItem('hasReadDeclearationAt') 
                            && new Date(localStorage.getItem('hasReadDeclearationAt')) < new Date() - (1 * 24 * 60 * 60 * 1000);
    }
}
</script>
<template>
    <div class="message-modal position-fixed top-0 start-0 w-100 h-100 bg-black" style="--bs-bg-opacity: .5;"
        :class="!isOpenModal && 'invisible'" @click.self="closeModal">

        <div class="message-modal-content position-absolute top-50 start-50 px-3 py-4 bg-light d-flex flex-column"
            :class="isOpenModal && 'active'">

            <div class="text-end">
                <button type="button" @click="closeModal" class="link-primary bg-light border-0 mb-4">
                    <font-awesome-icon :icon="['fas', 'x']" />
                </button>
            </div>

            <div class="message px-3 py-3 flex-grow overflow-y-auto">
                <p>Welcome to Dear K!</p>
                <p>
                    This website is a demonstration created solely for showcasing my skills as a web developer.
                    It is not a real online shop, and no actual purchases can be made.
                    The products and prices displayed are for illustrative purposes only.
                </p>
                <p class="mb-1">
                    Feel free to explore the website, create account, add items to your cart, and proceed to the checkout
                    to see the functionality in action. We suggest you entering random data for testing.
                    However, please provide a valid email address for verification purposes during the registration process.
                    You can use a disposable or temporary email address to ensure your privacy and security.
                    Also, please use the following card number for successful payment:
                </p>
                <p class="text-center fs-6 text-primary"><code>4242 4242 4242 4242</code></p>
                <p>
                    Some images used on this website may have been sourced from the internet for visual representation.
                    If you believe any content used here infringes upon copyright or contains inappropriate material,
                    kindly contact me so that I can address the concern promptly.
                </p>
                <p>
                    Thank you for visiting, and I hope you enjoy browsing my website!
                </p>
                <p>
                    Yuki
                </p>
            </div>
            <div class="d-grid gap-2 mt-5">
                <button type="button" @click="closeModal" class="btn btn-secondary py-2 text-white rounded-0">Start
                    Exploring</button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/mixins' as *;

.message-modal {
    z-index: 99;

    &-content {
        width: 90%;
        max-width: 700px;
        max-height: 90%;
        opacity: 0;
        transform: translateX(-50%) translateY(-300%);
        @include transitionProps;

        &.active {
            opacity: 100%;
            transform: translateX(-50%) translateY(-50%) !important;
        }

        .message {
            font-size: 14px;
        }
    }
}
</style>
