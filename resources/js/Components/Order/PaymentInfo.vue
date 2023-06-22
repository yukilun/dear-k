<script>
import PaymentStatus from './PaymentStatus.vue';

export default {
    name: "PaymentInfo",
    props: {
        payment: Object,
    },
    components: {
        PaymentStatus
    }
}
</script>
<template>
    <div class="col mb-4 p-2">
        <p class="fs-5 mb-3">Payment Information</p>
        <div class="row text-black-50 mb-1">
            <div class="col-5 col-sm-3 col-md-5">Status:</div>
            <div class="col-7 col-sm-9 col-md-7">
                <PaymentStatus :status="payment.status" />
            </div>
        </div>
        <div class="row text-black-50 mb-1">
            <div class="col-5 col-sm-3 col-md-5">Amount:</div>
            <div class="col-7 col-sm-9 col-md-7">${{ payment.amount }}</div>
        </div>
    </div>
</template>