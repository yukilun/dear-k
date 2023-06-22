<script>
export default {
    name: 'OrderStatus',
    props: {
        status: String
    },
    computed: {
        getOrderStatusClass() {
            switch (this.status) {
                case 'paid':
                case 'shipped':
                case 'completed':
                    return 'bg-success';
                case 'unpaid':
                    return 'bg-danger';
                case 'cancelled':
                default:
                    return 'bg-body-secondary';
            }
        }
    }
}
</script>

<template>
    <div class="order-status d-flex align-items-center gap-2">
        <div class="order-status-dot" :class="getOrderStatusClass"> </div>
        {{ status }}
    </div>
</template>

<style lang="scss" scoped>
.order-status-dot {
    width: 10px;
    height: 10px;
    border-radius: 100%;
}
</style>