<script>
import { useForm, usePage } from '@inertiajs/vue3';
import MessageModal from './MessageModal.vue';

export default {
    name: 'ProductOptions',
    components: {
        MessageModal
    },
    props: {
        inventories: Array,
    },
    data() {
        return {
            colors: [],
            sizes: [],
            selection: { color_id: -1, size_id: -1, quantity: 1 },
            form: null,
            status: null,
            isOpenModal: false
        }
    },
    methods: {
        disableSize(id) {
            if (this.selection.color_id != -1) {
                return this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === id).stock_quantity <= 0;
            }
            return false;
        },
        resetQuantity() {
            this.selection.quantity = 1;
        },
        handleSubmit() {
            const inventory = this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === this.selection.size_id);
            if (inventory) {
                this.form = useForm({
                    inventory_id: inventory.id,
                    quantity: this.selection.quantity,
                });
                this.form.post('/cart/add', {
                    preserveScroll: true,
                    onError: () => {
                        this.status = 'error';
                        this.isOpenModal = true;
                    },
                    onSuccess: () => {
                        this.status = 'success';
                        this.isOpenModal = true;
                    },
                });
            }
        },
        closeModal() {
            this.isOpenModal = false;
        }
    },
    created() {
        this.page = usePage();
    },
    mounted() {
        // populate the colors and sizes arrays
        const colorIds = [...new Set(this.inventories.map(inventory => inventory.color_id))];
        const colors = colorIds.map(id => this.inventories.find(inventory => inventory.color_id === id).color);
        colors.sort((a, b)=> {
                const sumA = parseInt(a.color_hex.slice(0, 2), 16) + parseInt(a.color_hex.slice(2, 4), 16) + parseInt(a.color_hex.slice(4, 6), 16);
                const sumB = parseInt(b.color_hex.slice(0, 2), 16) + parseInt(b.color_hex.slice(2, 4), 16) + parseInt(b.color_hex.slice(4, 6), 16);
                return sumB - sumA;
        });
        this.colors = colors;

        const sizeIds = [...new Set(this.inventories.map(inventory => inventory.size_id))];
        this.sizes = sizeIds.map(id => this.inventories.find(inventory => inventory.size_id === id).size);
        
        // set the default selection to the first instock item
        const firstInstock = this.inventories.find(inventory => inventory.stock_quantity > 0);
        this.selection.color_id = firstInstock.color_id;
        this.selection.size_id = firstInstock.size_id;
    },
    computed: {
        getSelectionColorName() {
            return this.colors.find(color => color.id === this.selection.color_id)?.color_name;
        },
        getSelectionSizeName() {
            return this.sizes.find(size => size.id === this.selection.size_id)?.size_name;
        },
        soldOut() {
            if (this.selection.color_id > -1 && this.selection.size_id > -1) {
                return this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === this.selection.size_id)?.stock_quantity <= 0;
            }
            return false;
        },
        disableReduceQuantity() {
            return this.selection.quantity <= 1;
        },
        disableAddQuantity() {
            if (this.selection.color_id > -1 && this.selection.size_id > -1) {
                return this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === this.selection.size_id)?.stock_quantity <= this.selection.quantity;
            }
            return false;
        },
        getStockStatus() {
            if (this.selection.color_id > -1 && this.selection.size_id > -1) {
                const stockQuantity = this.inventories.find(({ color_id, size_id }) => color_id === this.selection.color_id && size_id === this.selection.size_id)?.stock_quantity;
                if (stockQuantity > 10) {
                    return "In stock"
                }
                else if (stockQuantity > 0) {
                    return "Low stock - " + stockQuantity + " avaliable"
                }
            }
            return null;
        }
    }
}
</script>

<template>
    <form method="get" @submit.prevent="handleSubmit">

        <MessageModal :isOpenModal='isOpenModal' :closeModal="closeModal" :status="status" />

        <div class="color-options mb-4">
            <div class="mb-2 fw-semibold">Color: &nbsp;{{ getSelectionColorName }}</div>
            <div class="d-flex gap-2 flex-wrap">
                <div class="color-option" v-for="{ id, color_hex } in colors">
                    <input class="d-none" type="radio" name="color_id" v-model="selection.color_id" :value="id"
                        :id="`color-${id}`">
                    <label :for="`color-${id}`" class="radio-color" :class="id === selection.color_id && 'active'"
                        :style="`background: #${color_hex}`" @click="resetQuantity">
                    </label>
                </div>
            </div>
        </div>

        <div class="size-options mb-4">
            <div class="mb-2 fw-semibold">Size: &nbsp;{{ getSelectionSizeName }}</div>
            <div class="d-flex gap-2 flex-wrap">
                <div class="size-option" v-for="{ id, size_name } in sizes">
                    <input class="d-none" type="radio" name="size_id" v-model="selection.size_id" :value="id"
                        :id="`size-${id}`">
                    <label :for="`size-${id}`" class="radio-size"
                        :class="[id === selection.size_id && 'active', disableSize(id) && 'disable']"
                        @click="resetQuantity">
                        {{ size_name }}
                    </label>
                </div>
            </div>
        </div>

        <div v-show="!soldOut" class="quantity">
            <div class="mb-2 fw-semibold">Quantity: </div>
            <div class="d-flex">
                <input class="d-none" type="number" name="quantity" v-model="selection.quantity" />
                <button type="button" class="quantity-btn btn btn-outline-primary rounded-0 border px-3" :disabled="disableReduceQuantity"
                    @click="this.selection.quantity--"
                    :style="`--bs-btn-hover-color: white; --bs-btn-active-color: white;`">
                    -
                </button>
                <div class="flex-grow-1 h-full py-1 text-center border-top border-bottom">
                    {{ selection.quantity }}
                </div>
                <button type="button" class="quantity-btn btn btn-outline-primary rounded-0 border px-3" :disabled="disableAddQuantity"
                    @click="this.selection.quantity++" :style="`--bs-btn-hover-color: white`">
                    +
                </button>
            </div>
            <div class="stockStatus mt-2">
                <small class="text-black-50">{{ getStockStatus }}</small>
            </div>
        </div>

        <div class="addToCart d-grid mt-5">
            <button type="submit" :disabled="soldOut" class="btn btn-primary btn-lg rounded-0 text-white fw-semibold">
                {{ soldOut ? 'Sold Out' : 'Add To Cart' }}
            </button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
@use '../../../scss/custom' as *;

.radio {

    &-color,
    &-size {
        border: 2px solid $gray-200;
        cursor: pointer;

        &:hover,
        &.active {
            box-shadow: 0 0 0 1px $primary;
        }
    }

    &-color {
        height: 50px;
        width: 50px;
    }

    &-size {
        padding: 5px 15px;

        &.disable {
            opacity: 50%;
        }
    }

}
.quantity-btn {
    --bs-btn-hover-color: white;
    --bs-btn-active-color: white;
}
</style>