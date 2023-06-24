<script>
export default {
    name: 'Toast',
    props: {
        message: String,
        type: String
    },
    data() {
        return {
            isClose: false,
            isInitial: true,
            timer: null,
            remainTime: 3000,
        }
    },
    methods: {
        closeToast() {
            this.isClose = true;
        }
    },
    mounted() {
        this.isInitial = false;
        this.closeTimer = setInterval(() => {
            if (this.remainTime > 0) {
                this.remainTime -= 10;
            }
            else {
                this.closeToast();
                clearTimeout(this.closeTimer);
            }
        }, 10);
    },
    unmounted() {
        if (this.closeTimer) clearTimeout(this.closeTimer);
    }
}
</script>

<template>
    <div class="myToast" :class="`${isInitial && 'initial'} ${isClose && 'close'} ${type}`">
        <div class="myToast-container">
            <div class="myToast-content d-flex gap-3 align-items-center">
                <font-awesome-icon v-if="type === 'success'" class="fs-3" :icon="['fa', 'circle-check']" />
                <font-awesome-icon v-if="type === 'failure'" class="fs-3" :icon="['fa', 'circle-xmark']" />
                {{ message }}
            </div>
            <button @click="closeToast" class="border-0 bg-white link-primary link-underline-opacity-25">
                <font-awesome-icon :icon="['fas', 'x']" />
            </button>
        </div>
        <div class="myToast-timer">
            <div class="myToast-timer-bar" :style="`width: ${remainTime/3000 * 100}% ;`">&nbsp;</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/custom' as *;
@use '../../scss/mixins' as *;

.myToast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    width: 80%;
    max-width: 400px;
    transform: translate(-50%, 0);
    background-color: white;
    opacity: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    border-left: 20px solid white;
    z-index: 99;
    @include transitionProps;

    &.initial,
    &.close {
        transform: translate(-50%, 200%);
        opacity: 0;
    }

    &-container {
        padding: 20px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    &-timer {
        height: 5px;
        &-bar {
            height: 100%;
            background-color: $info;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }

    &.success {
        border-color: $success;

        .myToast-content svg {
            color: $success;
        }
    }

    &.failure {
        border-color: $danger;

        .myToast-content svg {
            color: $danger;
        }
    }

}
</style>