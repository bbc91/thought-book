import firebase from 'firebase';

const state = () => ({
    thoughts: []
});

const getters = {
    thoughtsList: state => {
        return state.thoughts
    }
};

const actions = {
    fetchThoughts({commit, state, rootState}) {
        const db = firebase.database();
        return new Promise(function (resolve, reject) {
            db.ref("thoughts").orderByChild("userUid").equalTo(rootState.auth.user.uid).once('value').then(function (thoughts) {
                let thoughtsList = [];
                thoughts.forEach(function (thought) {
                    // thoughtData will be the actual contents of the child
                    let thoughtData = thought.val();
                    thoughtsList.push(thoughtData);
                });
                commit('setThoughts', thoughtsList);
                resolve(thoughts);
            });
        });
    },
    createThought({commit, state, rootState}, data) {
        const db = firebase.database();
        return new Promise(function (resolve, reject) {
            // Get a key for a new Thought.
            let newThoughtKey = db.ref().child('thoughts').push().key;
            console.log(newThoughtKey);
            // Write the new thought's data simultaneously in the thoughts list
            let updates = {};
            updates['/thoughts/' + newThoughtKey] = data;
            return db.ref().update(updates, function (done) {
                resolve(done);
            });
        });
    }
};

const mutations = {
    setThoughts(state, thoughts) {
        state.thoughts = thoughts || []
    },
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}