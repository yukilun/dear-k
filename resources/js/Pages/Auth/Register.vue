<script>
import Layout from '../../Layouts/Layout.vue';
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
import { vMaska } from "maska";
import { Link, useForm } from '@inertiajs/vue3';

export default {
    name: 'Register',
    components: {
        Layout,
        Field,
        Form,
        Link
    },
    props: {
        provinces: Array,
    },
    directives: {
        maska: vMaska
    },
    data: () => ({
        phone: {
            unmasked: ""
        },
        postal_code: {
            unmasked: ""
        },
        form: null
    }),
    methods: {
        handleSubmit(values) {
            const unmaskedValues = { ...values, phone: this.phone.unmasked, postal_code: this.postal_code.unmasked.toUpperCase() };
            this.form = useForm(unmaskedValues);
            this.form.post('/register');
        }
    },
    created() {
        this.schema = yup.object({
            name: yup.string().required('name is required').max(255),
            email: yup.string().required('email is required').email('invalid email').max(255),
            password: yup.string().required('password is required').min(8),
            password_confirmation: yup.string().required('confirm the password').oneOf([yup.ref('password')], 'passwords do not match'),
            phone: yup.string().required().matches(/^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/, 'enter the 10-digit phone number'),
            street_address: yup.string().required('street address is required').max(100),
            city: yup.string().required('city is required').max(50),
            province_code: yup.string().required("province is required"),
            postal_code: yup.string().required('postal code is required').matches(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/, 'invalid postal code'),
            country: yup.string().required("country is required"),
        });
        this.initialValues = {
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
    <Layout>
        <div class="form-container pb-2">
            <p class="fs-4 text-center text-uppercase text-center">Register</p>
            <div class="heading-line mb-4"></div>
            <Form @submit="handleSubmit" :validation-schema="schema" :initial-values="initialValues" v-slot="{ errors }">

                <div class="form-floating mb-3">
                    <Field type="text" class="form-control" :class="(errors.name || form?.errors.name) && 'is-invalid'"
                        name="name" id="name" placeholder="Name" />
                    <label for="name" class="form-label">Name</label>
                    <div class="invalid-feedback">{{ errors.name || form?.errors.name }}</div>
                </div>

                <div class="form-floating mb-3">
                    <Field type="email" class="form-control" :class="(errors.email || form?.errors.email) && 'is-invalid'"
                        name="email" id="email" placeholder="Email" autocomplete="email" />
                    <label for="email" class="form-label">Email</label>
                    <div class="invalid-feedback">{{ errors.email || form?.errors.email }}</div>
                </div>

                <div class="row mb-3 g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <Field type="password" class="form-control"
                                :class="(errors.password || form?.errors.password) && 'is-invalid'" name="password"
                                id="password" placeholder="Password" autocomplete="new-password" />
                            <label for="password" class="form-label">Password</label>
                            <div class="invalid-feedback">{{ errors.password || form?.errors.password }}</div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-floating">
                            <Field type="password" class="form-control"
                                :class="(errors.password_confirmation || form?.errors.password_confirmation) && 'is-invalid'"
                                name="password_confirmation" id="password_confirmation" placeholder="Confirm Password"
                                autocomplete="new-password" />
                            <label for="password_confirmation" class="form-label">Confirm Password</label>
                            <div class="invalid-feedback">{{ errors.password_confirmation ||
                                form?.errors.password_confirmation }}</div>
                        </div>
                    </div>
                </div>

                <div class="form-floating mb-3">
                    <Field type="text" class="form-control" :class="(errors.phone || form?.errors.phone) && 'is-invalid'"
                        placeholder="Phone" name="phone" id="phone" aria-label="Phone" aria-describedby="phone"
                        v-maska="phone" data-maska="+1 (###) ###-####" />
                    <label for="phone" class="form-label">Phone</label>
                    <div class="invalid-feedback">{{ errors.phone || form?.errors.phone }}</div>
                </div>

                <div class="form-floating mb-3">
                    <Field type="text" class="form-control"
                        :class="(errors.street_address || form?.errors.street_address) && 'is-invalid'"
                        name="street_address" id="street_address" placeholder="Street Address" maxlength="100" />
                    <label for="street_address" class="form-label">Street Address</label>
                    <div class="invalid-feedback">{{ errors.street_address || form?.errors.street_address }}</div>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <Field type="text" class="form-control"
                                :class="(errors.city || form?.errors.city) && 'is-invalid'" name="city" id="city"
                                placeholder="City" max="50" />
                            <label for="city" class="form-label">City</label>
                            <div class="invalid-feedback">{{ errors.city || form?.errors.city }}</div>
                        </div>
                    </div>

                    <div class="col-md-6 h-100">
                        <div class="form-floating">
                            <Field as="select" name="province_code" id="province_code" class="form-select h-100"
                                :class="(errors.province_code || form?.errors.province_code) && 'is-invalid'">
                                <option disabled></option>
                                <option v-for="{ code, province_name } in provinces" :value="code">{{ code }} - {{ province_name }}</option>
                            </Field>
                            <label for="province_code" class="form-label">Province</label>
                            <div class="invalid-feedback">{{ errors.province_code || form?.errors.province_code }}</div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-floating">
                            <Field type="text" class="form-control"
                                :class="(errors.postal_code || form?.errors.postal_code) && 'is-invalid'" name="postal_code"
                                id="postal_code" placeholder="Postal Code" v-maska="postal_code" data-maska="@#@ #@#" />
                            <label for="postal_code" class="form-label">Postal Code</label>
                            <div class="invalid-feedback">{{ errors.postal_code || form?.errors.postal_code }}</div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-floating">
                            <Field as="select" name="country" id="country" class="form-select h-100"
                                :class="(errors.country || form?.errors.country) && 'is-invalid'">
                                <option selected>Canada</option>
                            </Field>
                            <label for="country" class="form-label">Country</label>
                            <div class="invalid-feedback">{{ errors.country || form?.errors.country }}</div>
                        </div>
                    </div>
                </div>

                <div class="d-grid mt-5">
                    <button type="submit" class="btn btn-primary btn-lg rounded-0 text-white"
                        :class="form?.processing && 'opacity-25'" :disabled="form?.processing">
                        Register
                    </button>
                </div>
            </Form>
            <p class="text-center mt-4 mb-5">Already have an account? &nbsp;
                <Link href="/login">Sign In</Link>
            </p>
        </div>
    </Layout>
</template>