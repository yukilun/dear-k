<script>
import { Link } from '@inertiajs/vue3';
export default {
    name: "Pagination",
    components: {
        Link
    },
    props: {
        pagination: Object
    },
    data() {
        return {
            pages: []
        }
    },
    created() {
        if (this.pagination.last_page < 5) {
            for (var p = 1; p <= this.pagination.last_page; p++) {
                this.pages.push(this.pagination.links[p]);
            }
        }
        else if (this.pagination.current_page <= 3) {
            for (var p = 1; p <= 5; p++) {
                this.pages.push(this.pagination.links[p]);
            }
        }
        else if (this.pagination.current_page >= this.pagination.last_page - 2) {
            for (var p = this.pagination.last_page; p >= this.pagination.last_page - 4; p--) {
                this.pages.unshift(this.pagination.links[p]);
            }
        }
        else {
            for (var p = this.pagination.current_page - 2; p <= this.pagination.last_page + 2; p++) {
                this.pages.push(this.pagination.links[p]);
            }
        }
    }
}
</script>

<template>
    <nav class="container d-flex justify-content-center my-4">
        <ul class="pagination pagination-sm">
            <li class="page-item">
                <Link class="page-link" :href="pagination.first_page_url" aria-label="First"
                    :class="pagination.current_page === 1 && 'disabled'">
                    <span aria-hidden="true">&laquo;</span>
                </Link>
            </li>
            <li class="page-item">
                <Link class="page-link" :href="pagination.prev_page_url" aria-label="Prev"
                    :class="pagination.current_page === 1 && 'disabled'">
                    <span aria-hidden="true">&lsaquo;</span>
                </Link>
            </li>
            <li class="page-item" v-for="page in pages" :class="page.active && 'active'">
                <Link class="page-link" :href="page.url">{{ page.label }}</Link>
            </li>
            <li class="page-item">
                <Link class="page-link" :href="pagination.next_page_url" aria-label="Next"
                    :class="pagination.current_page === pagination.last_page && 'disabled'">
                    <span aria-hidden="true">&rsaquo;</span>
                </Link>
            </li>
            <li class="page-item">
                <Link class="page-link" :href="pagination.last_page_url" aria-label="Last"
                    :class="pagination.current_page === pagination.last_page && 'disabled'">
                    <span aria-hidden="true">&raquo;</span>
                </Link>
            </li>
        </ul>
    </nav>
</template>