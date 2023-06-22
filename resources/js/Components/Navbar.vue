<script>
import { Link } from '@inertiajs/vue3'
import NavIcons from './NavIcons.vue';
import NavMenu from './NavMenu.vue';
import NavSideMenu from './NavSideMenu.vue';
export default {
    name: 'Navbar',
    components: {
    Link,
    NavIcons,
    NavMenu,
    NavSideMenu,
},
    data() {
        return {
            fixedNavbar: false,
            isOpenedSideMenu: false
        }
    },
    methods: {
        onscroll() {
            const navY = this.$refs.navmenu.offsetTop || 100;
            if (window.scrollY > navY) {
                this.fixedNavbar = true;
            }
            else {
                this.fixedNavbar = false;
            }
        },
        openSideMenu() {
            this.isOpenedSideMenu = true;
        },
        closeSideMenu() {
            this.isOpenedSideMenu = false;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onscroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.onscroll);
    }
}
</script>

<template>
    <div class="container-lg d-flex justify-content-between align-items-center mb-4 mb-lg-0">
        <div class="logo w-25">
            <Link href="/"><img src="../../../public/images/logo.png" class="img-fluid" alt="Dear K." /></Link>
        </div>
        <NavIcons :openSideMenu="openSideMenu" v-show="!fixedNavbar" />
    </div>
    <nav ref="navmenu" class="bg-white py-2 z-2" :class="fixedNavbar ? 'fixed-top z-3' : 'd-none d-lg-block'">
        <div class="container-lg position-relative">
            <NavMenu class="position-absolute top-50 start-50 translate-middle d-none d-lg-flex" />
            <NavIcons :openSideMenu="openSideMenu" :class="!fixedNavbar && 'invisible'" />
        </div>
    </nav>
    <NavSideMenu :isOpenedSideMenu='isOpenedSideMenu' :closeSideMenu="closeSideMenu"/>
</template>

<style lang="scss" scoped>
.logo {
    width: 0;
    max-height: 125px;
    max-width: 125px;
}
</style>