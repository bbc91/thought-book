<template>
    <div id="app">
        <div id="menu">
            <h1 v-if="user">Hey, {{user.email}}</h1>
            <ul>
                <li>
                    <router-link tag="button" to="/">Home</router-link>
                    <router-link tag="button" to="/register">Register</router-link>
                    <button @click="logOut()" v-if="user">Logout</button>
                </li>
            </ul>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        data() {
            return {
                user: null
            }
        },
        methods: {
            logOut() {
                let self = this;
                firebase.auth().signOut().then(function (done) {
                    // Sign-out successful.
                    console.log(done);
                    self.user = null;
                }).catch(function (error) {
                    // An error happened.
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
