<script>
export default {
    name: 'PaymentStatus',
    props: {
        status: String
    },
    computed: {
        getPaymentStatusClass() {
            switch (this.status) {
                case 'paid':
                    return 'bg-success';
                case 'pending': 
                    return 'bg-warning';
                case 'failed':
                    return 'bg-danger';
                default:
                    return 'bg-body-secondary';
            }
        }
    }
}
</script>

<template>
    <div class="payment-status d-flex align-items-center gap-2">
        <div class="payment-status-dot" :class="getPaymentStatusClass"> </div>
        {{ status }}
    </div>
</template>

<style lang="scss" scoped>
.payment-status-dot {
    width: 10px;
    height: 10px;
    border-radius: 100%;
}
</style>