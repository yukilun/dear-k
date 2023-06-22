<script>
import { Link } from '@inertiajs/vue3'
export default {
    name: 'NavMenu',
    components: {
        Link
    }
}
</script>

<template>
    <ul class="nav-menu nav justify-content-center text-uppercase flex-nowrap">
        <li class="nav-item">
            <Link class="nav-link" href="/products">All</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" href="/products?category=top">Top</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" href="/products?category=pants">Pants</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" href="/products?category=skirts">Skirts</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" href="/products?category=outer">Outer</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" href="/products?category=dress">Dress</Link>
        </li>
    </ul>
</template>
 
<style lang="scss" scoped>
@use '../../scss/custom' as *;
@use '../../scss/mixins' as *;
.nav-menu {
    white-space: nowrap;
    .nav-item {
        position: relative;
        cursor: pointer;

        ::after {
            content: ' ';
            position: absolute;
            width: 0;
            height: 1px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: $primary;
            @include transitionProps;
        }

        :hover::after {
            width: 80%;
        }
    }
}
</style>
