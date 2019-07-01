<template>
    <div>
        {{ user.name }}
        <router-link :to="routeToUser">
            <button type="button" class="btn btn-primary btn-md">Go To User's Page</button>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['user'],

    methods: {
        routeToUser() {
            return `/users/${this.user.id}`
        }
    }
}
</script>

<style>

</style>
