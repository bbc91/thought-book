<template>
    <div class="register">
        <div class="register-form">
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

    export default {
        name: 'register',
        data() {
            return {
                name: '',
                email: '',
                password: '',
            }
        },
        components: {},
        methods: {
            registerUser() {
                let self = this;
                this.$store.dispatch('register', {email: this.email, password: this.password}).then(result => {
                    console.log('register success');
                    self.$router.push({path: '/'})
                });
            }
        },
        created() {
            let self = this;
        }
    }
</script>

<style scoped>

</style>