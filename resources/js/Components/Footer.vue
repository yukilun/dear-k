<script>
import { Link } from '@inertiajs/vue3';
export default {
    name: 'Footer',
    components: {
        Link
    }
}
</script>

<template>
    <footer class="bg-primary text-white">
        <div class="container p-5">
            <div class="row row-cols-2 row-cols-lg-3">
                <div class="col logo-font d-none d-md-block">
                    <h3 class="text-nowrap">Dear K.</h3>
                    <p>Dress to impress with us.</p>
                </div>
                <div class="col text-uppercase d-flex flex-column">
                    <p class="fw-semibold">Support</p>
                    <Link href="/about"
                        class="link-light link-offset-2 link-opacity-75 link-opacity-100-hover link-underline-opacity-0 link-underline-opacity-75-hover mb-2">
                        About
                    </Link>
                    <Link href="/faq"
                        class="link-light link-offset-2 link-opacity-75 link-opacity-100-hover link-underline-opacity-0 link-underline-opacity-75-hover mb-2">
                        FAQ
                    </Link>
                    <Link href="/shipping"
                        class="link-light link-offset-2 link-opacity-75 link-opacity-100-hover link-underline-opacity-0 link-underline-opacity-75-hover mb-2">
                        Shipping
                    </Link>
                    <Link href="/return"
                        class="link-light link-offset-2 link-opacity-75 link-opacity-100-hover link-underline-opacity-0 link-underline-opacity-75-hover mb-2">
                        Return
                    </Link>
                </div>
                <div class="col text-uppercase">
                    <p class="fw-semibold">Contact us</p>
                    <div class="fs-3 d-flex gap-3">
                        <Link href="#" class="link-light link-opacity-75 link-opacity-100-hover">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                        </Link>
                        <Link href="#" class="link-light link-opacity-75 link-opacity-100-hover">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                        </Link>
                        <Link href="#" class="link-light link-opacity-75 link-opacity-100-hover">
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>