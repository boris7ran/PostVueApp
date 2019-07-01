<template>
    <div class="container">
        <ul v-for="(user, index) in users" :key=index>
            <li>    
                <SingleUser :user="user"/>
            </li>
        </ul>
    </div>
</template>

<script>
import SingleUser from '@/components/SingleUser.vue'
import { userService } from '@/services/UserService'


export default {
    components: {
        SingleUser
    },

    data() {
        return {
            users: []
        }
    },

    created () {
        userService.getUsers()
            .then(response => {
                this.users = response.data;
                console.log(response.data);
            }).catch(error => {
                alert(error);
            })
    },

    methods: {
        routeToUser(user) {
            return `/users/${user.id}`
        }
    }
}
</script>

<style>

</style>
