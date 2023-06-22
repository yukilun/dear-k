<script>
export default {
    name: "BillingAddress",
    props: {
        orderBillingDetail: Object,
    }
}
</script>

<template>
    <div class="col p-2">
        <p class="fs-5 mb-3">Billing Address</p>
        <div class="row text-black-50 mb-1">
            <div class="col-5 col-sm-3 col-md-5">Name:</div>
            <div class="col-7 col-sm-9 col-md-7">{{ orderBillingDetail.name }}</div>
        </div>
        <div class="row text-black-50 mb-1">
            <div class="col-5 col-sm-3 col-md-5">Address:</div>
            <div class="col-7 col-sm-9 col-md-7">
                <p class="mb-0">{{ orderBillingDetail.street_address }}</p>
                <p class="mb-0">
                    {{ orderBillingDetail.city }} 
                    {{ orderBillingDetail.province_code }} 
                    {{ orderBillingDetail.postal_code.slice(0, 3) + ' ' + orderBillingDetail.postal_code.slice(3, 6) }}
                </p>
            </div>
        </div>
    </div>
</template>