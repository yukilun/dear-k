<script>

export default {
    name: 'SortDropdown',
    props: {
        category: String,
        sortBy: String,
        orderBy: String,
        toggleReloading: Function
    },
    data() {
        return {
            options : [{
                name: 'New Arrivals',
                sortBy: 'created_at',
                orderBy: 'desc',
            },{
                name: 'Best Sellers',
                sortBy: 'inventories_sum_sold_quantity',
                orderBy: 'desc',
            },{
                name: 'Price: Low to High',
                sortBy: 'price',
                orderBy: 'asc',
            },{
                name: 'Price: High to Low',
                sortBy: 'price',
                orderBy: 'desc',
            }],
            activeOptionIndex: -1,
        }
    },
    methods: {
        handleClick(index) {
            this.activeOptionIndex = index;
            this.toggleReloading();
        }
    },
    created() {
        this.activeOptionIndex = this.options.findIndex(option=> option.sortBy === this.sortBy && option.orderBy === this.orderBy);
    },
    mounted() {
        import('@popperjs/core/dist/umd/popper.min.js');
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    },
}
</script>


<template>
    <div class="dropdown">
        <span class="text-uppercase">Sort By: </span>
        <button class="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{activeOptionIndex > -1 ? options[activeOptionIndex].name: options[0].name}}
        </button>
        <ul class="dropdown-menu">
            <li v-for="({name, sortBy, orderBy}, index) in options" @click="handleClick(index)">
                <a class="dropdown-item" :class="index === activeOptionIndex && 'active'"
                    :href="`/products?sort_by=${sortBy}&order_by=${orderBy}${category ? `&category=${category}`: ''}`">
                    {{name}}
                </a>
            </li>
        </ul>
    </div>
</template>
