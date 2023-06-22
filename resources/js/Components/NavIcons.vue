<script>
import { Link, usePage } from '@inertiajs/vue3';

export default {
    name: "NavIcons",
    props: {
        openSideMenu: Function,
    },
    components: { 
        Link 
    },
    created() {
        this.page = usePage();
    }
}
</script>

<template>
    <ul class="nav-icons nav justify-content-end text-uppercase fs-5">
        <li class="nav-item">
            <Link class="nav-link" href="/profile"><font-awesome-icon :icon="['fas', 'user']" /></Link>
        </li>
        <li class="nav-item position-relative">
            <Link class="nav-link" href="/cart"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></Link>
            <div v-if="page.props.cart_total_quantity > 0" class="cart-count">{{ page.props.cart_total_quantity }}</div>
        </li>
        <li class="nav-item d-lg-none">
            <button class="nav-link" @click="openSideMenu"><font-awesome-icon :icon="['fas', 'bars']" /></button>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../../scss/custom' as *;
    .cart-count {
        width: 22px;
        height: 22px;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        background: $danger;
        color: white;
        border-radius: 100%;
        position: absolute;
        top: 0;
        right: 0;
        
    }
</style>
