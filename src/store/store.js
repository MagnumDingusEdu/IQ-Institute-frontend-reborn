import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import User from './modules/user';
import Dashboard from './UI/dashboard';
import Snackbar from './modules/snackbar';

export const store = new Vuex.Store({
    state: {
        },
    getters: {},
    mutations: {},

    modules: {
        user: User,
        dashboard: Dashboard,
        snackbar: Snackbar,
    }
});