<script>
import OrderSummary from '../../Components/Checkout/OrderSummary.vue';
import Layout from '../../Layouts/Layout.vue';
import { Field, Form, configure } from 'vee-validate';
import * as yup from 'yup';
import { vMaska } from "maska";
import { useForm } from '@inertiajs/vue3';

export default {
    name: "Checkout",
    components: {
        Layout,
        OrderSummary,
        Field,
        Form
    },
    directives: {
        maska: vMaska
    },
    props: {
        cartItems: Array,
        canCheckout: Boolean,
        total: String,
        user: Object,
        provinces: Array,
        payment_url: String
    },
    data() {
        return {
            shippingProvince: null,
            shipping_phone: {
                unmasked: ""
            },
            shipping_postal_code: {
                unmasked: ""
            },
            billing_postal_code: {
                unmasked: ""
            },
            sameAddress: null,
            form: null
        }
    },
    methods: {
        changeShippingProvince() {
            const code = this.$refs.vform.getValues().shipping_province_code;
            this.shippingProvince = this.provinces.find(province => province.code == code);
        },
        setSameAddress() {
            if (!this.sameAddress) {
                this.sameAddress = true;
                const formValues = this.$refs.vform.getValues();
                this.$refs.vform.setValues({
                    ...formValues,
                    billing_name: formValues.shipping_name,
                    billing_street_address: formValues.shipping_street_address,
                    billing_city: formValues.shipping_city,
                    billing_province_code: formValues.shipping_province_code,
                    billing_postal_code: formValues.shipping_postal_code,
                    billing_country: formValues.shipping_country,
                    same_address: true
                });
            }
        },
        setDifferentAddress() {
            if (this.sameAddress !== false) {
                this.sameAddress = false;
                this.$refs.vform.setValues({
                    billing_name: "",
                    billing_street_address: "",
                    billing_city: "",
                    billing_province_code: "",
                    billing_postal_code: "",
                    billing_country: 'Canada',
                    same_address: false
                });
            }
        },
        handleSubmit(values) {
            var unmaskedValues = {
                ...values,
                shipping_phone: this.shipping_phone.unmasked,
                shipping_postal_code: this.shipping_postal_code.unmasked.toUpperCase(),
                billing_postal_code: this.billing_postal_code.unmasked.toUpperCase(),
            };
            if (this.sameAddress) {
                unmaskedValues = {
                    ...unmaskedValues,
                    billing_name: unmaskedValues.shipping_name,
                    billing_street_address: unmaskedValues.shipping_street_address,
                    billing_city: unmaskedValues.shipping_city,
                    billing_province_code: unmaskedValues.shipping_province_code,
                    billing_postal_code: unmaskedValues.shipping_postal_code,
                    billing_country: unmaskedValues.shipping_country
                }
            };
            this.form = useForm(unmaskedValues);
            this.form.post('/checkout', {
                onSuccess: () => {
                    window.location.href = this.payment_url;
                }
            });
        }
    },
    created() {
        this.schema = yup.object({
            shipping_name: yup.string().required('name is required').max(255),
            shipping_phone: yup.string().required('phone is required').matches(/^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/, 'enter the 10-digit phone number'),
            shipping_street_address: yup.string().required('street address is required').max(100),
            shipping_city: yup.string().required('city is required').max(50),
            shipping_province_code: yup.string().required("province is required"),
            shipping_postal_code: yup.string().required('postal code is required').matches(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/, 'invalid postal code'),
            shipping_country: yup.string().required("country is required"),
            billing_name: yup.string().required('name is required').max(255),
            billing_street_address: yup.string().required('street address is required').max(100),
            billing_city: yup.string().required('city is required').max(50),
            billing_province_code: yup.string().required("province is required"),
            billing_postal_code: yup.string().required('postal code is required').matches(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/, 'invalid postal code'),
            billing_country: yup.string().required("country is required"),
            same_address: yup.boolean().required('you must specify your billing address.')
        });

        this.initialValues = {
            shipping_name: this.user.name,
            shipping_phone: '1' + this.user.customer.phone,
            shipping_street_address: this.user.customer.street_address,
            shipping_city: this.user.customer.city,
            shipping_province_code: this.user.customer.province_code,
            shipping_postal_code: this.user.customer.postal_code,
            shipping_country: 'Canada',
            billing_country: 'Canada',
            same_address: null
        }

        this.shippingProvince = this.provinces.find(province => province.code == this.user.customer.province_code);

        configure({
            validateOnBlur: false,
            validateOnChange: false,
            validateOnInput: false,
            validateOnModelUpdate: true,
        });
    }
}
</script>

<template>
    <Layout>
        <div class="container-lg my-5">
            <p class="fs-4 text-center text-uppercase text-center">Checkout</p>
            <div class="heading-line mb-5"></div>
            <div class="container-xl">
                <div class="row">
                    <OrderSummary :cartItems="cartItems" :total="total" :shippingProvince="shippingProvince" />

                    <div class="col-md-7 col-lg-8 order-md-1">
                        <div class="border rounded p-4">

                            <Form @submit="handleSubmit" :validation-schema="schema" :initial-values="initialValues"
                                ref="vform" v-slot="{ errors }">

                                <!--------- SHIPPING DETAIL ------------>
                                <p class="fs-5 fw-semi-bold">Shipping Details</p>
                                <p class="text-black-50">Please ensure the following shipping address is correct.</p>

                                <div class="form-floating mb-3">
                                    <Field type="text" class="form-control"
                                        :class="(errors.shipping_name || form?.errors.shipping_name) && 'is-invalid'"
                                        name="shipping_name" id="shipping_name" placeholder="Name" />
                                    <label for="shipping_name" class="form-label">Name</label>
                                    <div class="invalid-feedback">{{ errors.shipping_name || form?.errors.shipping_name }}
                                    </div>
                                </div>

                                <div class="form-floating mb-3">
                                    <Field type="text" class="form-control"
                                        :class="(errors.shipping_phone || form?.errors.shipping_phone) && 'is-invalid'"
                                        placeholder="Phone" name="shipping_phone" id="shipping_phone" aria-label="Phone"
                                        aria-describedby="phone" v-maska="shipping_phone" data-maska="+1 (###) ###-####" />
                                    <label for="shipping_phone" class="form-label">Phone</label>
                                    <div class="invalid-feedback">{{ errors.shipping_phone || form?.errors.shipping_phone }}
                                    </div>
                                </div>

                                <div class="form-floating mb-3">
                                    <Field type="text" class="form-control"
                                        :class="(errors.shipping_street_address || form?.errors.shipping_street_address) && 'is-invalid'"
                                        name="shipping_street_address" id="shipping_street_address"
                                        placeholder="Street Address" maxlength="100" />
                                    <label for="shipping_street_address" class="form-label">Street Address</label>
                                    <div class="invalid-feedback">{{ errors.shipping_street_address ||
                                        form?.errors.shipping_street_address }}
                                    </div>
                                </div>

                                <div class="row g-3 mb-3">
                                    <div class="col-lg-4">
                                        <div class="form-floating">
                                            <Field type="text" class="form-control"
                                                :class="(errors.shipping_city || form?.errors.shipping_city) && 'is-invalid'"
                                                name="shipping_city" id="shipping_city" placeholder="City" max="50" />
                                            <label for="shipping_city" class="form-label">City</label>
                                            <div class="invalid-feedback">{{ errors.shipping_city ||
                                                form?.errors.shipping_city }}</div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 h-100">
                                        <div class="form-floating">
                                            <Field as="select" name="shipping_province_code" id="shipping_province_code"
                                                class="form-select h-100" @change="changeShippingProvince"
                                                :class="(errors.shipping_province_code || form?.errors.shipping_province_code) && 'is-invalid'">
                                                <option disabled></option>
                                                <option v-for="province in provinces" :value="province.code">{{
                                                    province.code }}</option>
                                            </Field>
                                            <label for="shipping_province_code" class="form-label">Province</label>
                                            <div class="invalid-feedback">{{ errors.shipping_province_code ||
                                                form?.errors.shipping_province_code }}</div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4">
                                        <div class="form-floating">
                                            <Field type="text" class="form-control"
                                                :class="(errors.shipping_postal_code || form?.errors.shipping_postal_code) && 'is-invalid'"
                                                name="shipping_postal_code" id="shipping_postal_code"
                                                placeholder="Postal Code" v-maska="shipping_postal_code"
                                                data-maska="@#@ #@#" />
                                            <label for="shipping_postal_code" class="form-label">Postal Code</label>
                                            <div class="invalid-feedback">{{ errors.shipping_postal_code ||
                                                form?.errors.shipping_postal_code
                                            }}</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-floating">
                                    <Field as="select" name="shipping_country" id="shipping_country"
                                        class="form-select h-100"
                                        :class="(errors.shipping_country || form?.errors.shipping_country) && 'is-invalid'">
                                        <option selected>Canada</option>
                                    </Field>
                                    <label for="shipping_country" class="form-label">Country</label>
                                    <div class="invalid-feedback">{{ errors.shipping_country ||
                                        form?.errors.shipping_country }}</div>
                                </div>

                                <!--------- BILLING DETAIL ------------>
                                <p class="fs-5 fw-semi-bold mt-5">Billing Details</p>
                                <p class="text-black-50">Please ensure the following billing address is correct.</p>

                                <div class="form-check">
                                    <Field class="form-check-input" type="radio" name="same_address" id="sameAddress1"
                                        :value="true" @click="setSameAddress" />
                                    <label class="form-check-label" for="sameAddress1">
                                        Same as shipping address
                                    </label>
                                </div>

                                <div class="form-check mt-2 mb-3">
                                    <Field class="form-check-input" type="radio" name="same_address" id="sameAddress2"
                                        :value="false" @click="setDifferentAddress" />
                                    <label class="form-check-label" for="sameAddress2">
                                        Use another address
                                    </label>
                                </div>

                                <div v-if="errors.same_address" class="text-danger mb-3">
                                    {{ errors.same_address }}
                                </div>

                                <div v-show="sameAddress === false">
                                    <div class="form-floating mb-3">
                                        <Field type="text" class="form-control"
                                            :class="(errors.billing_name || form?.errors.billing_name) && 'is-invalid'"
                                            name="billing_name" id="billing_name" placeholder="Name" />
                                        <label for="billing_name" class="form-label">Name</label>
                                        <div class="invalid-feedback">{{ errors.billing_name || form?.errors.billing_name }}
                                        </div>
                                    </div>


                                    <div class="form-floating mb-3">
                                        <Field type="text" class="form-control"
                                            :class="(errors.billing_street_address || form?.errors.billing_street_address) && 'is-invalid'"
                                            name="billing_street_address" id="billing_street_address"
                                            placeholder="Street Address" maxlength="100" />
                                        <label for="billing_street_address" class="form-label">Street Address</label>
                                        <div class="invalid-feedback">{{ errors.billing_street_address ||
                                            form?.errors.billing_street_address }}
                                        </div>
                                    </div>

                                    <div class="row g-3 mb-3">
                                        <div class="col-lg-4">
                                            <div class="form-floating">
                                                <Field type="text" class="form-control"
                                                    :class="(errors.billing_city || form?.errors.billing_city) && 'is-invalid'"
                                                    name="billing_city" id="billing_city" placeholder="City" max="50" />
                                                <label for="billing_city" class="form-label">City</label>
                                                <div class="invalid-feedback">{{ errors.billing_city ||
                                                    form?.errors.billing_city }}</div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 h-100">
                                            <div class="form-floating">
                                                <Field as="select" name="billing_province_code" id="billing_province_code"
                                                    class="form-select h-100" @change="changeShippingProvince"
                                                    :class="(errors.billing_province_code || form?.errors.billing_province_code) && 'is-invalid'">
                                                    <option disabled></option>
                                                    <option v-for="province in provinces" :value="province.code">{{
                                                        province.code }}</option>
                                                </Field>
                                                <label for="billing_province_code" class="form-label">Province</label>
                                                <div class="invalid-feedback">{{ errors.billing_province_code ||
                                                    form?.errors.billing_province_code }}</div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4">
                                            <div class="form-floating">
                                                <Field type="text" class="form-control"
                                                    :class="(errors.billing_postal_code || form?.errors.billing_postal_code) && 'is-invalid'"
                                                    name="billing_postal_code" id="billing_postal_code"
                                                    placeholder="Postal Code" v-maska="billing_postal_code"
                                                    data-maska="@#@ #@#" />
                                                <label for="billing_postal_code" class="form-label">Postal Code</label>
                                                <div class="invalid-feedback">{{ errors.billing_postal_code ||
                                                    form?.errors.billing_postal_code
                                                }}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-floating">
                                        <Field as="select" name="billing_country" id="billing_country"
                                            class="form-select h-100"
                                            :class="(errors.billing_country || form?.errors.billing_country) && 'is-invalid'">
                                            <option selected>Canada</option>
                                        </Field>
                                        <label for="billing_country" class="form-label">Country</label>
                                        <div class="invalid-feedback">{{ errors.billing_country ||
                                            form?.errors.billing_country }}</div>
                                    </div>

                                </div>

                                <div class="d-grid d-md-block">
                                    <button type="submit" class="btn btn-primary btn-lg rounded-0 text-white mt-4 px-5">
                                        Place The Order *
                                    </button>
                                </div>
                                <p class="text-black-50 mt-3">
                                    * Once you place the order, the items will be reserved for you.
                                    However, you must complete the payment within 3 hours or otherwise your order would be cancelled automatically.
                                </p>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>