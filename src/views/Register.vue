<template>
    <div class="register">
        <div class="card login-panel" style="width: 20rem;">
            <div class="card-body">
                <h5 class="card-title">Регистрация</h5>
                <div class="form-group">
                    <label for="name">Име</label>
                    <input type="text" class="form-control" id="name" @keyup.enter="registerUser()" v-model="name"
                           placeholder="Въведи име">
                </div>
                <div class="form-group">
                    <label for="email">И-мейл</label>
                    <input type="email" class="form-control" id="email" @keyup.enter="registerUser()" v-model="email"
                           placeholder="Въведи и-мейл">
                </div>
                <div class="form-group">
                    <label for="password">Парола</label>
                    <input type="password" class="form-control" id="password" @keyup.enter="registerUser()"
                           v-model="password"
                           placeholder="Въведи парола">
                </div>
                <button @click="registerUser()" class="btn btn-info">Регистрирай се</button>
            </div>
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
                this.$store.dispatch('register', {
                    email: this.email,
                    password: this.password,
                    name: this.name
                }).then(result => {
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