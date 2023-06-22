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
        status: String
    },
    data() {
        return {
            form: null
        }
    },
    methods: {
        handleSubmit(values) {
            this.form = useForm(values);
            this.form.post('/forgot-password');
        }
    },
    created() {
        this.schema = yup.object({
            email: yup.string().required('email is required').email('invalid email').max(255),
        });
    }
}
</script>

<template>
    <Layout>
        <div class="form-container pb-2">
            <p class="fs-4 text-center text-uppercase text-center">Forgot Password</p>
            <div class="heading-line mb-4"></div>
            <div class="mb-4">
                Please enter your email address used for registration below. 
                We will send you a password reset link for resetting your password.
            </div>
            <p class="mb-3 text-success"><small>{{ status }}</small></p>

            <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
                <p class="mb-3 text-danger"><small>{{ form?.errors.email }}</small></p>
                
                <div class="form-floating mb-3">
                    <Field type="email" class="form-control" :class="errors.email && 'is-invalid'" name="email" id="email"
                        placeholder="Email" />
                    <label for="email" class="form-label">Email</label>
                    <div class="invalid-feedback">{{ errors.email }}</div>
                </div>
                
                <div class="d-grid mt-5">
                    <button type="submit" class="btn btn-primary btn-lg rounded-0 text-white"
                        :class="form?.processing && 'opacity-25'" :disabled="form?.processing">
                        Send Password Reset Link
                    </button>
                </div>
            </Form>

        </div>
    </Layout>
</template>