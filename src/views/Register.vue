<template>
    <div class="register">
        <div class="register-form" v-if="!user">
            <h1>Register</h1>
            <div class="form-field">
                <label for="name">Name </label><br>
                <input id="name" type="text" v-model="name">
            </div>
            <div class="form-field">
                <label for="email">Email </label><br>
                <input id="email" type="email" v-model="email">
            </div>
            <div class="form-field">
                <label for="password">Password </label><br>
                <input id="password" type="password" v-model="password">
            </div>
            <br>
            <button @click="registerUser()">Register</button>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import firebase from 'firebase'

    export default {
        name: 'register',
        data() {
            return {
                user: null,
                name: '',
                email: '',
                password: '',
            }
        },
        components: {},
        methods: {
            registerUser() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (done) {
                    console.log(done);
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
                    console.log(user);
                    self.user = user;
                } else {
                    // No user is signed in.
                }
            });
        }
    }
</script>

<style scoped>

</style>