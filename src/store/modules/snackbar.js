export default {
    state: {
        visible: false,
        message: null,
    },
    getters: {},
    mutations: {
        showSnackbar(state, message) {
            state.message = message;
            state.visible = true;
        },

        dismissSnackbar(state) {
            state.message = null;
            state.visible = false;
        }
    },
    actions: {},

}