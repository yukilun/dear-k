<script>
import Announcement from '../Components/Announcement.vue';
import Navbar from '../Components/Navbar.vue';
import AOS from "aos";
import Footer from '../Components/Footer.vue';

export default {
    name: 'Layout',
    components: {
        Announcement,
        Navbar,
        Footer,
    },
    mounted() {
        AOS.init();
    }
}
</script>

<template>
    <Announcement />
    <Navbar />
    <div class="flex-grow-1 d-flex flex-column">
        <slot />
    </div>
    <Footer />
</template>