<script>
import { useForm, Link } from '@inertiajs/vue3';
import Layout from '../../Layouts/Layout.vue';

export default {
    name: "VerifyEmail",
    components: {
        Layout,
        Link
    },
    props: {
        status: String,
    },
    data() {
        return {
            form: useForm({})
        }
    },
    methods: {
        handleSubmit() {
            this.form.post('/email/verification-notification');
        }
    },
    computed: {
        verificationLinkSent() {
            return this.status === "verification-link-sent";
        }
    }
}
</script>

<template>
    <Layout>
        <div class="form-container mb-5">
            <p class="fs-4 text-center text-uppercase text-center">Email Verification</p>
            <div class="heading-line mb-4"></div>
            <div class="mb-4">
                Please verify your email address by clicking on the link we emailed to you. 
                If you didn't receive the email, click on the "Resend Verification Email" button below.
            </div>
            <div class="mb-4 text-success" v-if="verificationLinkSent">
                A new verification link has been sent to the email address you provided during registration.
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="d-grid">
                    <button type="submit" class="btn btn-primary btn-lg rounded-0 text-white mb-3"
                        :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Resend Verification Email
                    </button>
                    <Link href="/logout" method="post" as="button" class="link-primary text-center text-decoration-underline border-0 bg-transparent">
                        Log Out
                    </Link>
                </div>
            </form>
        </div>
    </Layout>
</template>