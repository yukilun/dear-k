<script>
import { Link } from '@inertiajs/vue3';

export default {
    name: "CustomerTabs",
    components: {
        Link
    },
    created() {
        this.tabs = [{
            tabName: "Profile",
            href: "/profile"
        }, {
            tabName: "Orders",
            href: "/orders"
        }];
    }
}
</script>

<template>
    <div class="d-flex">
        <div v-for="({ tabName, href }, index) in tabs" class="tab" :class="$page.url.startsWith(href) && 'active'">
            <Link class="d-block py-3 text-decoration-none" :href="href">
            {{ tabName }}
            </Link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/custom' as *;
@use '../../scss/mixins' as *;

.tab {
    flex-grow: 1;
    text-align: center;
    border: 1px solid $gray-200;
    background-color: $gray-100;

    &.active {
        background-color: white;
        border-bottom: 0px;
    }
}
</style>