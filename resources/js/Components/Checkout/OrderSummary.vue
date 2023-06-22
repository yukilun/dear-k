<script>
import OrderSummaryItem from './OrderSummaryItem.vue';

export default {
    name: "OrderSummary",
    components: { 
        OrderSummaryItem 
    },
    props: {
        cartItems: Array,
        total: String,
        shippingProvince: Object
    },
    mounted() {
        import("@popperjs/core/dist/umd/popper.min.js");
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    },
    computed: {
        isFreeShipping() {
            const totalAmount = parseFloat(this.total);
            return totalAmount >= 100;
        },
        getSalesTax() {
            if(!this.shippingProvince) return 'TBD';
            return Math.round((parseFloat(this.total) * this.shippingProvince.sales_tax_rate)*100)/100;
        },
        getTotal() {
            const salesTax = this.getSalesTax;
            if(salesTax === 'TBD') return 'TBD';
            return parseFloat(this.total) + salesTax + (this.isFreeShipping ? 0 : 15);  
        }
    }
}
</script>

<template>
    <div class="col-md-5 col-lg-4 order-md-2 accordion mb-4" id="checkout_accordion">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fs-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Order Summary
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#checkout_accordion">
                <div class="accordion-body">
                    <div class="items">
                        <OrderSummaryItem v-for="cartItem in cartItems" :cartItem="cartItem" />
                    </div>
                    <div class="container pt-4">
                        <div class="row text-black-50">
                            <div class="col-6">Subtotal</div>
                            <div class="col-6 text-end">${{ total }}</div>
                        </div>
                        <div class="row text-black-50">
                            <div class="col-6">Shipping</div>
                            <div class="col-6 text-end">{{ isFreeShipping ? 'FREE' : '$15.00' }}</div>
                        </div>
                        <div class="row text-black-50 mb-2">
                            <div class="col-6">Sales Tax</div>
                            <div class="col-6 text-end">{{getSalesTax == 'TBD' ? 'TBD': '$' + getSalesTax.toFixed(2)}}</div>
                        </div>
                        <div class="row fw-bold border-top py-2 text-uppercase">
                            <div class="col-6">Total</div>
                            <div class="col-6 text-end fs-5">{{getTotal == 'TBD' ? 'TBD': '$' + getTotal.toFixed(2)}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>