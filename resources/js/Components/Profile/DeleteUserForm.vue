<script>
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
import { useForm } from '@inertiajs/vue3';

export default {
    name: 'DeleteUserForm',
    components: {
        Field,
        Form,
    },
    data: () => ({
        form: null,
    }),
    methods: {
        handleSubmit(values) {
            this.form = useForm(values);
            this.form.delete('/profile', {
                preserveScroll: true,
            });
        }
    },
    created() {
        this.schema = yup.object({
            password: yup.string().required('current password is required'),
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
        <p class="fs-5 fw-semi-bold">Delete Account</p>
        <p>
            Please enter your password to confirm you would like to permanently delete your account.
            Once your account is deleted, all of its resources and data will be permanently deleted.
        </p>

        <div class="form-floating mb-3">
            <Field type="password" class="form-control"
                :class="(errors.password || form?.errors.password) && 'is-invalid'" name="password" id="password"
                placeholder="Password" />
            <label for="password" class="form-label">Password</label>
            <div class="invalid-feedback">{{ errors.password || form?.errors.password }}</div>
        </div>

        <p v-if="status === 'success'" class="mb-4 text-success">Password has been updated successfully!</p>

        <div class="d-flex gap-3 mt-4">
            <!-- <button type="reset" class="btn btn-secondary rounded-0 text-white" :class="form?.processing && 'opacity-25'"
                    :disabled="form?.processing">
                    Cancel
                </button> -->
            <button type="submit" class="btn btn-danger rounded-0 text-white" :class="form?.processing && 'opacity-25'"
                :disabled="form?.processing">
                Delete Account
            </button>
        </div>

    </Form>
</template>