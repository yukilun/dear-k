<script>
import Layout from '../../Layouts/Layout.vue';
import ProductCard from '../../Components/ProductCard.vue';
import Pagination from '../../Components/Product/Pagination.vue';
import ProductList from '../../Components/Product/ProductList.vue';
import SortDropdown from '../../Components/Product/SortDropdown.vue';
import Breadcrumb from '../../Components/Product/Breadcrumb.vue';

export default {
    name: 'Category',
    components: {
        Layout,
        ProductCard,
        Pagination,
        ProductList,
        SortDropdown,
        Breadcrumb
    },
    props: {
        productsPage: Object,
        category: String,
        sortBy: String,
        orderBy: String,
    },
    data() {
        return {
            pagination: {},
            isReloading: false
        }
    },
    methods: {
        toggleReloading() {
            this.isReloading = !this.isReloading;
        }
    },
    created() {
        const { data, ...pagination } = this.productsPage;
        this.pagination = pagination;
        console.log(this.productsPage);
    }
}
</script>

<template>
    <Layout>
        <div class="container-lg mb-3 d-md-flex justify-content-between align-items-center">
            <Breadcrumb :category="category" />
            <SortDropdown :category="category" :sortBy="sortBy" :orderBy="orderBy" :toggleReloading="toggleReloading" />
        </div>
        <div v-if="isReloading" class="text-center my-5 p-5">
            <p class="fs-1 text-secondary"><font-awesome-icon :icon="['fas', 'spinner']" spin /></p>
            <p>Loading</p>
        </div>
        <div v-else class="products flex-grow-1 d-flex flex-column">
            <ProductList :products="productsPage.data" class="flex-grow-1"/>
            <Pagination :pagination="pagination" v-if="productsPage.last_page > 1" />
        </div>
    </Layout>
</template>