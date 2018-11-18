import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

Vue.use(BootstrapVue);
import VueCircleSlider from 'vue-circle-slider'
Vue.use(VueCircleSlider);

Vue.config.productionTip = false;
var firebase = require('firebase');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB87ZZt-sPTuhcZaiv265ix4iYHmzm6zmQ",
    authDomain: "thought-book-3d51f.firebaseapp.com",
    databaseURL: "https://thought-book-3d51f.firebaseio.com",
    projectId: "thought-book-3d51f",
    storageBucket: "thought-book-3d51f.appspot.com",
    messagingSenderId: "660272407132"
};
const firebaseApp = firebase.initializeApp(config);
Vue.prototype.$firebaseApp = firebaseApp;

// store.dispatch('fetchUser');

firebase.auth().onAuthStateChanged(function (user) {
    // console.log(user);
    if (user) {
        store.commit('setUser', user);
    } else {
        // No user is signed in.
    }
});

// function getUser() {
//
// }

//here we get all the initial data needed.
async function init() {

    await store.dispatch('fetchUser');

    //when all needed data is collected, start the app
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
}

init();
