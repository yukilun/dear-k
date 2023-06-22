<script>
import { Link } from '@inertiajs/vue3';
export default {
    name: 'Breadcrumb',
    components: {
        Link
    },
    props: {
        category: String,
    },
}
</script>


<template>
    <nav style="--bs-breadcrumb-divider: '>';">
        <ol class="breadcrumb text-uppercase">
            <li class="breadcrumb-item">
                <Link class="link-secondary" href="/">HOME</Link>
            </li>
            <li class="breadcrumb-item" v-if="!category">ALL</li>
            <li class="breadcrumb-item" v-else>
                <Link class="link-secondary" href="/products">ALL</Link>
            </li>
            <li class="breadcrumb-item" v-if="category">{{ category }}</li>
        </ol>
    </nav>
</template>