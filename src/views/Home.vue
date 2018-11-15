<template>
    <div class="home">
        <div class="register-form" v-if="!user">
            <h1>Login</h1>
            <div class="form-field">
                <label for="email">Email </label><br>
                <input id="email" type="email" v-model="email">
            </div>
            <div class="form-field">
                <label for="password">Password </label><br>
                <input id="password" type="password" v-model="password">
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
                user: null,
                password: '',
                email: ''
            }
        },
        components: {},
        methods: {
            login() {
                let self = this;
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function (user) {
                    self.user = user;
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });
            }
        },
        created() {
            let self = this;
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    self.user = user;
                } else {
                    // No user is signed in.
                }
            });
        }
    }
</script>
