import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: state => ({
        user: state.user,
    })

})

Vue.use(Vuex);

import User from './modules/user';
import Dashboard from './UI/dashboard';
import Snackbar from './modules/snackbar';

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},

    modules: {
        user: User,
        dashboard: Dashboard,
        snackbar: Snackbar,
    },
    plugins: [
        vuexLocal.plugin
    ]
});