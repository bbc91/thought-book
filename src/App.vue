<template>
    <div id="app">
        <div id="header" class="container">
            <div class="logo">
                <router-link to="/"><img src="./assets/logo.png"></router-link>
            </div>
            <div id="menu">
                <b-nav pills>
                    <b-nav-item :exact="true" to="/">Начало</b-nav-item>
                    <b-nav-item :exact="true" to="/diary" v-if="user">Дневник</b-nav-item>
                    <b-nav-item v-if="!user" :exact="true" to="/register">Регистрация</b-nav-item>
                    <b-nav-item :exact="true" to="/questions">Въпроси</b-nav-item>
                    <b-nav-item :exact="true" to="/contact">Контакти</b-nav-item>
                    <b-nav-item :exact="true" v-if="user" @click="logOut()">Изход</b-nav-item>
                </b-nav>
            </div>
        </div>
        <div class="container" style="min-height: 500px;">
            <router-view/>
        </div>
        <div class="container" id="footer">
            Автор: <a href="http://petertrifonov.com/" target="_blank">Петър Петров - Психолог</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
            user() {
                return this.$store.getters.loggedUser;
            }
        },
        methods: {
            logOut() {
                let self = this;
                this.$store.dispatch('logOut').then(result => {
                    console.log('logout success');
                    self.$router.push({path: '/'});
                });
            }
        },
        created() {
            let self = this;
        }
    }
</script>

<style>
    .form-field {
        margin-top: 10px;
    }

    .register-form {
        width: 300px;
        margin: 0 auto;
        text-align: left;
    }
</style>
