<template>
    <div class="home">
        <div class="register-form" v-if="!user">
            <h1>Login</h1>
            <div class="form-field">
                <label for="email">Email </label><br>
                <input @keyup.enter="login()" id="email" type="email" v-model="email">
            </div>
            <div class="form-field">
                <label for="password">Password </label><br>
                <input @keyup.enter="login()" id="password" type="password" v-model="password">
            </div>
            <br>
            <button @click="login()">Login</button>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import firebase from 'firebase'

    export default {
        name: 'home',
        data() {
            return {
                password: '',
                email: ''
            }
        },
        computed: {
            user() {
                return this.$store.getters.loggedUser;
            }
        },
        components: {},
        methods: {
            login() {
                this.$store.dispatch('login', {email: this.email, password: this.password}).then(result => {
                    console.log('login success');
                });
            }
        },
        created() {
            let self = this;
        }
    }
</script>
