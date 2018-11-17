<template>
    <div class="home">
        <b-jumbotron v-if="user" bg-variant="light" text-variant="dark" border-variant="info" :header="'Здравей, ' + user.displayName" lead="Добре дошъл в твоят дневник за Дисфункционални мисли и Когнитивно реструкториране.">
            <p class="lead">С редовно записване на мислите си, и реструкторирането им, ще постигнеш много!</p>
            <router-link class="btn btn-lg btn-info" to="/diary/create-thought">Добави мисъл</router-link>
        </b-jumbotron>

        <div v-if="!user" class="card login-panel" style="width: 20rem;">
            <div class="card-body">
                <h5 class="card-title">Вход</h5>
                <div class="form-group">
                    <label for="email">И-мейл</label>
                    <input type="email" class="form-control" id="email" @keyup.enter="login()" v-model="email"
                           placeholder="Въведи и-мейл">
                </div>
                <div class="form-group">
                    <label for="password">Парола</label>
                    <input type="password" class="form-control" id="password" @keyup.enter="login()" v-model="password"
                           placeholder="Въведи парола">
                </div>
                <button @click="login()" class="btn btn-info">Влез</button>
                <router-link to="/register" style="margin-top: 5px;" class="float-right">Регистрирай се</router-link>
            </div>
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
