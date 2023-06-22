<script>
import { Link } from '@inertiajs/vue3';
import CustomerTabs from "../Components/CustomerTabs.vue";

export default {
    name: "CustomerLayout",
    components: {
        Link,
        CustomerTabs
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
    <div class="container-lg mb-5">
        <div class="text-end mb-4">
            <Link href="/logout" method="post" as="button" class="btn btn-primary rounded-0 text-white">
            Logout
            </Link>
        </div>
        <div>
            <CustomerTabs />
            <div class="content px-3 px-md-5 py-5">
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/custom' as *;
.content {
    border: 1px solid $gray-200;
    border-top: 0px;
}
</style>