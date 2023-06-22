<script>
import Layout from '../../Layouts/Layout.vue';
import { Link, useForm } from '@inertiajs/vue3';
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

export default {
    name: 'Login',
    components: {
        Layout,
        Field,
        Form,
        Link
    },
    props: {
        canResetPassword: Boolean,
        status: String,
    },
    data() {
        return {
            form: null
        }
    },
    methods: {
        handleSubmit(values) {
            this.form = useForm(values);
            this.form.post('/login');
        }
    },
    created() {
        this.schema = yup.object({
            email: yup.string().required('email is required').email('invalid email').max(255),
            password: yup.string().required('password is required'),
        });
    }
}
</script>

<template>
    <Layout>
        <div class="form-container pb-2">
            <p class="fs-4 text-center text-uppercase text-center">Login</p>
            <div class="heading-line mb-4"></div>

            <p class="mb-3 text-success"><small>{{ status }}</small></p>

            <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
                <p class="mb-3 text-danger"><small>{{ form?.errors.email }}</small></p>
                <div class="form-floating mb-3">
                    <Field type="email" class="form-control" :class="errors.email && 'is-invalid'" name="email" id="email"
                        placeholder="Email" />
                    <label for="email" class="form-label">Email</label>
                    <div class="invalid-feedback">{{ errors.email }}</div>
                </div>

                <div class="form-floating mb-3">
                    <Field type="password" class="form-control" :class="errors.password && 'is-invalid'" name="password"
                        id="password" placeholder="Password" />
                    <label for="password" class="form-label">Password</label>
                    <div class="invalid-feedback">{{ errors.password }}</div>
                    <p class="text-end mt-2" v-if="canResetPassword">
                        <Link href="/forgot-password">Forgot password?</Link>
                    </p>
                </div>

                <div class="d-grid mt-5">
                    <button type="submit" class="btn btn-primary btn-lg rounded-0 text-white"
                        :class="form?.processing && 'opacity-25'" :disabled="form?.processing">
                        Login
                    </button>
                </div>
            </Form>

            <p class="text-center mt-4 mb-5">Don't have an account? &nbsp;
                <Link href="/register">Sign Up</Link>
            </p>
        </div>
    </Layout>
</template>