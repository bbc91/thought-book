<template>
    <div id="app">
        <b-navbar toggleable="md" type="dark" variant="info">
            <div class="container">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#">
                    <router-link to="/"><img style="max-width: 150px" src="./assets/logo.png"></router-link>
                </b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item :exact="true" to="/">Начало</b-nav-item>
                        <b-nav-item :exact="true" to="/diary" v-if="user">Дневник</b-nav-item>
                        <b-nav-item v-if="!user" :exact="true" to="/register">Регистрация</b-nav-item>
                        <b-nav-item :exact="true" to="/questions">Въпроси</b-nav-item>
                        <b-nav-item :exact="true" to="/contact">Контакти</b-nav-item>
                        <b-nav-item :exact="true" v-if="user" @click="logOut()">Изход</b-nav-item>

                    </b-navbar-nav>

                </b-collapse>
            </div>
        </b-navbar>
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
