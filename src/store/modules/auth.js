import firebase from 'firebase';

const state = () => ({
    user: null
});

const getters = {
    loggedUser: state => {
        return state.user
    }
};

const actions = {
    fetchUser({commit, state, rootState}) {
        return new Promise(function (resolve, reject) {
            firebase.auth().onAuthStateChanged(function (user) {
                commit('setUser', user);
                resolve(user);
            });
        });
    },
    register({commit, state, rootState}, data) {
        return firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(function (result) {
            console.log(result);
            return result.user.updateProfile({
                displayName: data.name
            }).then(function (res) {
                // Profile updated successfully!
                commit('setUser', res.user);
            }, function (error) {
                // An error happened.
            });
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    },
    login({commit, state, rootState}, data) {
        return firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(function (user) {
            commit('setUser', user);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    },
    logOut({commit, state, rootState}, data) {
        return firebase.auth().signOut().then(function (done) {
            // Sign-out successful.
            commit('setUser', null);
        }).catch(function (error) {
            // An error happened.
        });
    },
};

const mutations = {
    setUser(state, user) {
        state.user = user || null
    },
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}