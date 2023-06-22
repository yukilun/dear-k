<script>
import Layout from '../../Layouts/Layout.vue';
import CustomerLayout from '../../Layouts/CustomerLayout.vue';
import UpdateProfileForm from '../../Components/Profile/UpdateProfileForm.vue';
import ResetPasswordForm from '../../Components/Profile/ResetPasswordForm.vue';
import DeleteUserForm from '../../Components/Profile/DeleteUserForm.vue';

export default {
    name: "ProfileEdit",
    components: {
    Layout,
    CustomerLayout,
    UpdateProfileForm,
    ResetPasswordForm,
    DeleteUserForm
},
    props: {
        user: Object,
        provinces: Array
    }
}
</script>

<template>
    <Layout>
        <CustomerLayout>
            <div class="profile-container d-flex flex-column gap-5">
                <p class="fs-4">Welcome back, <span class="text-primary">{{ user.name }}</span> !</p>
                <UpdateProfileForm :user="user" :provinces="provinces"/>
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