import axios from 'axios';
import router from "@/router";

export default {
    state: {
        is_authenticated: false,
        auth_token: null,
        name: null,
        username: null,
        courses: null,

        sign_out_loading: false,
        top_alert: false,
        top_alert_message: '',
        top_alert_type: 'error',


    },
    getters: {
        authToken(state) {
            return state.auth_token;
        }
    },
    mutations: {
        login(store, payload) {
            store.is_authenticated = true;
            store.auth_token = payload.token;
            store.name = payload.name;
            store.username = payload.username;
            store.courses = payload.courses;
            store.sign_out_loading = false;
            store.email = payload.email;
        },

        logout(store) {
            store.is_authenticated = false;
            store.auth_token = null;
            store.name = null;
            store.username = null;
            store.courses = null;
        },

        showLoginAlert(store, payload) {
            store.top_alert = true;
            store.top_alert_message = payload.message;
            store.top_alert_type = payload.type;
        },

        dismissLoginAlert(store) {
            store.top_alert = false;
            store.top_alert_message = '';
        }
    },
    actions: {
        logout_user(context) {
            context.state.sign_out_loading = true;
            axios.post('users/logout/', {}, {headers: {'Authorization': `Token ${context.state.auth_token}`}}).then(
                (response) => {
                    response

                    context.commit('logout');

                    context.commit('showLoginAlert', {message: 'Logged out successfully.', type: 'success'})
                    context.state.sign_out_loading = false;
                    router.push('/login').then(r => {
                        r
                    });
                }
            ).catch((error) => {
                console.log(error);
            })
        },

        confirmLogin(context) {
            var token = context.state.auth_token;
            axios.post('users/confirm_login/', {"token": token}).then(
                (response) => {
                    response
                }).catch((error) => {

                if (error.response.status === 401) {
                    context.commit('showLoginAlert', {
                        message: "Your session has expired. Please login again.",
                        type: 'error'
                    });
                    context.commit('logout');
                    router.push('/login');
                } else if (error.response.status === 406) {
                    context.commit('showLoginAlert', {
                        message: "Your account has been deactivated. Please contact administrator for further details.",
                        type: 'error'
                    });
                    context.commit('logout');
                    router.push('/login');
                }
            })
        }


    },

}