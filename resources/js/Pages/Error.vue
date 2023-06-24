<script>
import Layout from '../Layouts/Layout.vue';
import { Link } from '@inertiajs/vue3';
export default {
    name: "Error",
    props: {
        status: Number
    },
    computed: {
        title() {
            return {
                503: "503: Service Unavailable",
                500: "500: Server Error",
                404: "404: Page Not Found",
                403: "403: Forbidden",
            }[this.status];
        },
        description() {
            return {
                503: "Sorry, we are doing some maintenance. Please check back soon.",
                500: "Whoops, something went wrong on our servers.",
                404: "Sorry, the page you are looking for could not be found.",
                403: "Sorry, you are forbidden from accessing this page.",
            }[this.status];
        }
    },
    components: { Layout, Link }
}
</script>

<template>
    <Layout>
        <div class="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5 m-5">
            <h3>{{ title }}</h3>
            <p class="mt-3">{{ description }}</p>
            <Link href="/" class="btn btn-primary btn-lg text-white rounded-0 mt-4 px-4">Home</Link>
        </div>
    </Layout>
</template>
