import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

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
firebase.initializeApp(config);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
