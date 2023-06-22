<script>
import OrderStatus from './OrderStatus.vue';

export default {
    name: "OrderInfo",
    props: {
        order: Object,
        shipper: Object
    },
    components: { 
        OrderStatus 
    }
}
</script>

<template>
    <div class="col mb-4 p-2">
        <p class="fs-5 mb-3">Order Information</p>
        <div class="row text-black-50 mb-1">
            <div class="col-5 col-sm-3 col-md-5">Order No.:</div>
            <div class="col-7 col-sm-9 col-md-7">{{ String(order.id).padStart(10, '0') }}</div>
        </div>
        <div class="row text-black-50 mb-1">
            <div class="col-5 col-sm-3 col-md-5">Created Date:</div>
            <div class="col-7 col-sm-9 col-md-7">{{ Date(order.created_at).toString().slice(4, 15) }}</div>
        </div>
        <div class="row text-black-50 mb-1">
            <div class="col-5 col-sm-3 col-md-5">Status:</div>
            <div class="col-7 col-sm-9 col-md-7">
                <OrderStatus :status="order.status" />
            </div>
        </div>
        <template v-if="order.status === 'shipped' || order.status === 'completed'">
            <div v-if="order.shipped_at" class="row text-black-50 mb-1">
                <div class="col-5 col-sm-3 col-md-5">Ship Date:</div>
                <div class="col-7 col-sm-9 col-md-7">{{ Date(order.shipped_at).toString().slice(4, 15) }}</div>
            </div>
            <div v-if="shipper?.shipper_name" class="row text-black-50 mb-1">
                <div class="col-5 col-sm-3 col-md-5">Shipper Name:</div>
                <div class="col-7 col-sm-9 col-md-7">{{ shipper.shipper_name }}</div>
            </div>
            <div v-if="order?.tracking_number" class="row text-black-50 mb-1">
                <div class="col-5 col-sm-3 col-md-5">Tracking No.:</div>
                <div class="col-7 col-sm-9 col-md-7">
                    <a :href="`${shipper.tracking_url}${order.tracking_number}`" target="_blank">{{ order.tracking_number }}</a>
                </div>
            </div>
        </template>
    </div>
</template>