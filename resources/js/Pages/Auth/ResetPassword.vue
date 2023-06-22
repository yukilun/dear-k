<script>
import Layout from '../../Layouts/Layout.vue';
import { Link, useForm } from '@inertiajs/vue3';
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

export default {
    name: 'ForgotPassword',
    components: {
        Layout,
        Field,
        Form,
        Link
    },
    props: {
        email: String,
        token: String,
    },
    data() {
        return {
            form: null
        }
    },
    methods: {
        handleSubmit(values) {
            this.form = useForm({
                ...values,
                email: this.email,
                token: this.token
            });
            this.form.post('/reset-password');
        }
    },
    created() {
        this.schema = yup.object({
            password: yup.string().required('password is required').min(8),
            password_confirmation: yup.string().required('confirm the password').oneOf([yup.ref('password')], 'passwords do not match'),
        });
    }
}
</script>

<template>
    <Layout>
        <div class="form-container pb-2">
            <p class="fs-4 text-center text-uppercase text-center">Reset Password</p>
            <div class="heading-line mb-4"></div>
            <div class="mb-4">
                Enter the new password for your account.
            </div>

            <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
                <p class="mb-3 text-danger"><small>{{ form?.errors.email }}</small></p>
                
                <div class="form-floating mb-3">
                    <Field type="password" class="form-control"
                        :class="(errors.password || form?.errors.password) && 'is-invalid'" name="password" id="password"
                        placeholder="Password" />
                    <label for="password" class="form-label">New Password</label>
                    <div class="invalid-feedback">{{ errors.password || form?.errors.password }}</div>
                </div>

                <div class="form-floating mb-3">
                    <Field type="password" class="form-control"
                        :class="(errors.password_confirmation || form?.errors.password_confirmation) && 'is-invalid'"
                        name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" />
                    <label for="password_confirmation" class="form-label">Confirm Password</label>
                    <div class="invalid-feedback">{{ errors.password_confirmation ||
                        form?.errors.password_confirmation }}</div>
                </div>

                <div class="d-grid mt-5">
                    <button type="submit" class="btn btn-primary btn-lg rounded-0 text-white"
                        :class="form?.processing && 'opacity-25'" :disabled="form?.processing">
                        Reset Password
                    </button>
                </div>
            </Form>

        </div>
    </Layout>
</template>