<template>
    <div id="app">
        <div id="menu">
            <ul>
                <li>
                    <router-link tag="button" to="/">Home</router-link>
                    <router-link v-if="!user" tag="button" to="/register">Register</router-link>
                    <button @click="logOut()" v-if="user">Logout</button>
                </li>
            </ul>
        </div>
        <h2 v-if="user">Hey, {{user.email}}</h2>
        <router-view/>
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

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #menu {
        margin: 30px auto;
        text-align: center;
    }

    #menu li {
        display: inline-block;
    }

    #menu li button {
        padding: 5px 10px;
        margin: 5px;
    }
</style>
