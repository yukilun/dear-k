<script>
import { Link } from '@inertiajs/vue3';
import NavMenu from './NavMenu.vue';
export default {
    name: "NavSideMenu",
    props: {
        isOpenedSideMenu: Boolean,
        closeSideMenu: Function,
    },
    components: { 
        NavMenu,
        Link
    }
}
</script>

<template>
    <div class="sideMenu z-3 position-fixed top-0 end-0 w-100 h-100 d-lg-none bg-black" style="--bs-bg-opacity: .5;"
        :class="!isOpenedSideMenu && 'invisible'" @click.self="closeSideMenu">
        <div class="sideMenuContent position-absolute top-0 end-0 h-100 px-3 py-4 overflow-y-auto bg-light text-uppercase"
            :class="isOpenedSideMenu && 'active'">
            <button @click="closeSideMenu" class="link-primary bg-white border-0 mb-4"><font-awesome-icon
                    :icon="['fas', 'x']" /></button>
            <p class="fs-4 text-uppercase mb-3 text-center">Category</p>
            <div class="heading-line mb-4"></div>
            <NavMenu class="flex-column align-items-start" />
            <!-- <h4 class="px-3 mt-4 mb-3"><font-awesome-icon :icon="['fas', 'user']" />&nbsp; Account </h4> -->
            <!-- <ul class="nav flex-column">
                <li class="nav-item">
                    <Link class="nav-link" href="/login">Login</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="/register">Register</Link>
                </li>
            </ul> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/mixins' as *;
.sideMenuContent {
    width: 90%;
    max-width: 300px;
    transform: translateX(100%);
    @include transitionProps;

    &.active {
        transform: translateX(0%) !important;
    }
}
</style>
