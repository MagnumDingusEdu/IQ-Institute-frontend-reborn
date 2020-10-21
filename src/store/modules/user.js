export default {
    state: {
        is_authenticated: false,
        auth_token: null,
        name: null,
        username: null,
        courses: null
    },
    getters: {},
    mutations: {
        login(store, payload) {
            store.is_authenticated = true;
            store.auth_token = payload.token;
            store.name = payload.name;
            store.username = payload.username;
            store.courses = payload.courses;
        },

        logout(store) {
            store.is_authenticated = false;
            store.auth_token = null;
            store.name = null;
            store.username = null;
            store.courses = null;
        }
    },
    actions: {},

}