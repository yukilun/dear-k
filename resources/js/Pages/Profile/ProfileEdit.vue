<script>
import Layout from '../../Layouts/Layout.vue';
import CustomerLayout from '../../Layouts/CustomerLayout.vue';
import UpdateProfileForm from '../../Components/Profile/UpdateProfileForm.vue';
import ResetPasswordForm from '../../Components/Profile/ResetPasswordForm.vue';
import DeleteUserForm from '../../Components/Profile/DeleteUserForm.vue';
import Toast from '../../Components/Toast.vue';

export default {
    name: "ProfileEdit",
    components: {
        Layout,
        CustomerLayout,
        UpdateProfileForm,
        ResetPasswordForm,
        DeleteUserForm,
        Toast
    },
    props: {
        user: Object,
        provinces: Array,
        message: Object
    },
    
}
</script>

<template>
    <Layout>
        <Toast v-if="message" :key="new Date().toISOString()" :type="message.type" :message="message.message" />
        <CustomerLayout>
            <div class="profile-container d-flex flex-column gap-5">
                <p class="fs-4">Welcome back, <span class="text-primary">{{ user.name }}</span> !</p>
                <UpdateProfileForm :user="user" :provinces="provinces" />
                <ResetPasswordForm />
                <DeleteUserForm />
            </div>
        </CustomerLayout>
    </Layout>
</template>

<style lang="scss" scoped>
.profile-container {
    max-width: 600px;
}
</style>