<script>
import { Link } from '@inertiajs/vue3';
export default {
    name: "ProductAccordion",
    props: {
        description: String
    },
    components: {
        Link
    },
    mounted() {
        import('@popperjs/core/dist/umd/popper.min.js');
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    },
}
</script>

<template>
    <div class="accordion accordion-flush" id="product-accordion">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Description
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#product-accordion">
                <div class="accordion-body">
                    {{ description }}
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Size Chart
                </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#product-accordion">
                <div class="accordion-body text-center">
                    <img class="size-chart" src="../../../../public/images/size_chart.png" alt="size chart" />
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Delivery & Returns
                </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#product-accordion">
                <div class="accordion-body">
                    <p>
                        We offer free shipping within Canada on orders over $100.
                        Delivery times typically range from 3 to 7 business days after the order has been processed and
                        shipped.
                        If you're not completely satisfied with your purchase, we accept returns within 14 days.
                    </p>
                    <p>For more details, please visit the
                        <Link href="/shipping">Shipping</Link> or
                        <Link href="/return">Return</Link> page.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .size-chart {
        max-width: 400px;
        width: 100%;
        object-fit: contain;
    }
</style>