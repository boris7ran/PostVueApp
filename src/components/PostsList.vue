<template>
    <div class="container">
        <div class="row">   
            {{ formatDate() }}
        </div>
        <input type="text" v-model="search">

        <table class="table table-striped title-bordered">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post, index) in filteredPosts" :key="index" >
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { userService } from '@/services/UserService'
import { date } from '@/mixins/mixin'

export default {
    mixins: [date],

    data () {
        return {
            posts: [],
            search: '',
        }
    },

    created () {
        userService.getUserPosts()
            .then(response => {
                this.posts = response.data;
                console.log(response);
            }).catch(error => {
                alert(error);
            });
    },

    computed: {
        filteredPosts () {
            return this.posts.filter( post => post.title.toLowerCase().includes(this.search.toLowerCase()) || post.body.toLowerCase().includes(this.search.toLowerCase() ));
        }
    }
}
</script>

<style>

</style>
