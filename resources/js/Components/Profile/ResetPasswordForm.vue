<script>
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
import { vMaska } from "maska";
import { useForm } from '@inertiajs/vue3';

export default {
    name: 'ResetPasswordForm',
    components: {
        Field,
        Form,
    },
    directives: {
        maska: vMaska
    },
    props: {
        user: Object
    },
    data: () => ({
        form: null,
        status: null
    }),
    methods: {
        handleSubmit(values, { resetForm }) {
            this.form = useForm(values);
            this.form.put('/password', {
                preserveScroll: true,
                onSuccess: () => {
                    resetForm();
                    this.status = 'success'
                }
            });
        }
    },
    created() {
        this.schema = yup.object({
            current_password: yup.string().required('current password is required'),
            password: yup.string().required('new password is required').min(8),
            password_confirmation: yup.string().required('confirm the password').oneOf([yup.ref('password')], 'passwords do not match'),
        });
    },
    mounted() {
        import('@popperjs/core/dist/umd/popper.min.js');
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
}
</script>

<template>
    <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
        <p class="fs-5 fw-semi-bold">Reset Password</p>
        <p>You can set a new password below.</p>

        <div class="form-floating mb-3">
            <Field type="password" class="form-control" :class="(errors.current_password || form?.errors.current_password) && 'is-invalid'"
                name="current_password" id="current_password" placeholder="Current Password" />
            <label for="current_password" class="form-label">Current Password</label>
            <div class="invalid-feedback">{{ errors.current_password || form?.errors.current_password }}</div>
        </div>


        <div class="form-floating mb-3">
            <Field type="password" class="form-control" :class="(errors.password || form?.errors.password) && 'is-invalid'"
                name="password" id="password" placeholder="New Password" />
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

        <p v-if="status === 'success'" class="mb-4 text-success">Password has been updated successfully!</p>

        <div class="d-flex gap-3 mt-4">
            <!-- <button type="reset" class="btn btn-secondary rounded-0 text-white" :class="form?.processing && 'opacity-25'"
                :disabled="form?.processing">
                Cancel
            </button> -->
            <button type="submit" class="btn btn-primary rounded-0 text-white" :class="form?.processing && 'opacity-25'"
                :disabled="form?.processing">
                Reset Password
            </button>
        </div>

    </Form>
</template>