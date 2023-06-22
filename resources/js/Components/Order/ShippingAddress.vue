<script>
export default {
    name: "ShippingAddress",
    props: {
        orderShippingDetail: Object,
    }
}
</script>

<template>
    <div class="col mb-4 p-2">
        <p class="fs-5 mb-3">Shipping Address</p>
        <div class="row text-black-50 mb-1">
            <div class="col-5 col-sm-3 col-md-5">Name:</div>
            <div class="col-7 col-sm-9 col-md-7">{{ orderShippingDetail.name }}</div>
        </div>
        <div class="row text-black-50 mb-1">
            <div class="col-5 col-sm-3 col-md-5">Phone:</div>
            <div class="col-7 col-sm-9 col-md-7">{{orderShippingDetail.phone.replace(/(\d{3})(\d{3})(\d{4})/, '+1 ($1) $2-$3') }}</div>
        </div>
        <div class="row text-black-50 mb-1">
            <div class="col-5 col-sm-3 col-md-5">Address:</div>
            <div class="col-7 col-sm-9 col-md-7">
                <p class="mb-0">{{ orderShippingDetail.street_address }}</p>
                <p class="mb-0">
                    {{ orderShippingDetail.city }} 
                    {{ orderShippingDetail.province_code }} 
                    {{ orderShippingDetail.postal_code.slice(0, 3) + ' ' + orderShippingDetail.postal_code.slice(3, 6) }}
                </p>
            </div>
        </div>
    </div>
</template>