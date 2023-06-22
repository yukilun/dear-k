<script>
export default {
    name: "FaqContainer",
    props: {
        title: String,
        questions: Array
    },
    mounted() {
        import('@popperjs/core/dist/umd/popper.min.js');
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    },
}
</script>

<template>
    <div class="faq-container" data-aos="fade-left" data-aos-once="true" data-aos-duration="1500">
        <h3>{{ title }}</h3>
        <div class="accordion accordion-flush" id="faq-accordion">
            <div v-for="({question, answer}, index) in questions" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#flush-collapse-${index}`" aria-expanded="false" :aria-controls="`flush-collapse-${index}`">
                        {{question}}
                    </button>
                </h2>
                <div :id="`flush-collapse-${index}`" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        {{answer}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../scss/custom' as *;

.faq-container {
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
}
</style>