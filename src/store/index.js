import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import auth from './modules/auth'
import thoughts from './modules/thoughts'

export default new Vuex.Store({
    state: {},
    modules: {
        auth,
        thoughts
    },
    mutations: {},
    actions: {}
})
