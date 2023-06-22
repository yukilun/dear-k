<script>
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
import { vMaska } from "maska";
import { useForm } from '@inertiajs/vue3';

export default {
    name: 'UpdateProfileForm',
    components: {
        Field,
        Form,
    },
    directives: {
        maska: vMaska
    },
    props: {
        user: Object,
        provinces: Array
    },
    data: () => ({
        phone: {
            unmasked: ""
        },
        postal_code: {
            unmasked: ""
        },
        form: null,
        status: null,
    }),
    methods: {
        handleSubmit(values) {
            const unmaskedValues = { ...values, phone: this.phone.unmasked, postal_code: this.postal_code.unmasked.toUpperCase() };
            this.form = useForm(unmaskedValues);
            this.form.post('/profile', {
                preserveScroll: true,
                onSuccess: () => {
                    this.status = 'success'
                }
            });
        }
    },
    created() {
        this.schema = yup.object({
            name: yup.string().required('name is required').max(255),
            email: yup.string().required('email is required').email('invalid email').max(255),
            phone: yup.string().required().matches(/^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/, 'enter the 10-digit phone number'),
            street_address: yup.string().required('street address is required').max(100),
            city: yup.string().required('city is required').max(50),
            province_code: yup.string().required("province is required"),
            postal_code: yup.string().required('postal code is required').matches(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/, 'invalid postal code'),
            country: yup.string().required("country is required"),
        });
        this.initialValues = {
            name: this.user.name,
            email: this.user.email,
            phone: '1' + this.user.customer.phone,
            street_address: this.user.customer.street_address,
            city: this.user.customer.city,
            province_code: this.user.customer.province_code,
            postal_code: this.user.customer.postal_code,
            country: 'Canada'
        }
    },
    mounted() {
        import('@popperjs/core/dist/umd/popper.min.js');
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
}
</script>

<template>
    <Form @submit="handleSubmit" :validation-schema="schema" :initial-values="initialValues" v-slot="{ errors }">
        <p class="fs-5 fw-semi-bold">Profile Information</p>
        <p>You can update your profile information below.</p>

        <div class="form-floating mb-3">
            <Field type="text" class="form-control" :class="(errors.name || form?.errors.name) && 'is-invalid'" name="name"
                id="name" placeholder="Name" />
            <label for="name" class="form-label">Name</label>
            <div class="invalid-feedback">{{ errors.name || form?.errors.name }}</div>
        </div>

        <div class="form-floating mb-3">
            <Field type="email" class="form-control" :class="(errors.email || form?.errors.email) && 'is-invalid'"
                name="email" id="email" placeholder="Email" />
            <label for="email" class="form-label">Email</label>
            <div class="invalid-feedback">{{ errors.email || form?.errors.email }}</div>
        </div>

        <div class="form-floating mb-3">
            <Field type="text" class="form-control" :class="(errors.phone || form?.errors.phone) && 'is-invalid'"
                placeholder="Phone" name="phone" id="phone" aria-label="Phone" aria-describedby="phone" v-maska="phone"
                data-maska="+1 (###) ###-####" />
            <label for="phone" class="form-label">Phone</label>
            <div class="invalid-feedback">{{ errors.phone || form?.errors.phone }}</div>
        </div>

        <div class="form-floating mb-3">
            <Field type="text" class="form-control"
                :class="(errors.street_address || form?.errors.street_address) && 'is-invalid'" name="street_address"
                id="street_address" placeholder="Street Address" maxlength="100" />
            <label for="street_address" class="form-label">Street Address</label>
            <div class="invalid-feedback">{{ errors.street_address || form?.errors.street_address }}</div>
        </div>

        <div class="row g-3 mb-3">
            <div class="col-md-4">
                <div class="form-floating">
                    <Field type="text" class="form-control" :class="(errors.city || form?.errors.city) && 'is-invalid'"
                        name="city" id="city" placeholder="City" max="50" />
                    <label for="city" class="form-label">City</label>
                    <div class="invalid-feedback">{{ errors.city || form?.errors.city }}</div>
                </div>
            </div>

            <div class="col-md-4 h-100">
                <div class="form-floating">
                    <Field as="select" name="province_code" id="province_code" class="form-select h-100"
                        :class="(errors.province_code || form?.errors.province_code) && 'is-invalid'">
                        <option disabled></option>
                        <option v-for="{ code } in provinces" :value="code">{{ code }}</option>
                    </Field>
                    <label for="province_code" class="form-label">Province</label>
                    <div class="invalid-feedback">{{ errors.province_code || form?.errors.province_code }}</div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-floating">
                    <Field type="text" class="form-control"
                        :class="(errors.postal_code || form?.errors.postal_code) && 'is-invalid'" name="postal_code"
                        id="postal_code" placeholder="Postal Code" v-maska="postal_code" data-maska="@#@ #@#" />
                    <label for="postal_code" class="form-label">Postal Code</label>
                    <div class="invalid-feedback">{{ errors.postal_code || form?.errors.postal_code }}</div>
                </div>
            </div>
        </div>

        <div class="form-floating">
            <Field as="select" name="country" id="country" class="form-select h-100"
                :class="(errors.country || form?.errors.country) && 'is-invalid'">
                <option selected>Canada</option>
            </Field>
            <label for="country" class="form-label">Country</label>
            <div class="invalid-feedback">{{ errors.country || form?.errors.country }}</div>
        </div>

        <p v-if="status === 'success'" class="mb-4 text-success">Profile has been updated successfully!</p>

        <div class="d-flex gap-3 mt-4">
            <button type="reset" class="btn btn-secondary rounded-0 text-white" :class="form?.processing && 'opacity-25'"
                :disabled="form?.processing">
                Cancel
            </button>
            <button type="submit" class="btn btn-primary rounded-0 text-white" :class="form?.processing && 'opacity-25'"
                :disabled="form?.processing">
                Update
            </button>
        </div>
    </Form>
</template>