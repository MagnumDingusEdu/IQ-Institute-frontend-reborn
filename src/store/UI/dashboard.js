import axios from "axios";

export default {
    state: {
        current_folder_id: null,
        parent_folder_id: null,
        current_path: null,

        home_folder_id: null,

        directory_listing: [],
        sorting: null,
        favorites: null,

        current_video_id: null,
        current_video_title: null,
        video_playing: false,

        overlay: false,
        loading: false,

    },
    getters: {},
    mutations: {
        setDirectoryListing(state, payload) {
            state.directory_listing = payload.children;
            state.current_folder_id = payload.id;
            state.parent_folder_id = payload.parent;
            state.current_path = payload.path;

            if (state.parent_folder_id === null) state.home_folder_id = state.current_folder_id;
            return true;
        },

        sortDirectoryListing(state, prop) {
            state.directory_listing.sort(sortByProperty(prop));
        },

        playVideo(state, payload) {
            state.video_playing = true;
            state.current_video_id = payload.id;
            state.current_video_title = payload.title;

        },

        stopVideo(state) {
            state.video_playing = false;
        },

        enableOverlay(state) {
            state.overlay = true;
        },
        disableOverlay(state) {
            state.overlay = false;
        },

        stopLoading(state) {
            state.loading = false;
        },

        startLoading(state) {
            state.loading = true;
        },

    },
    actions: {
        getLecturesForPath(context, folder_id) {
            var auth_token = context.getters.authToken;
            context.commit('startLoading');

            var path = ''
            if (folder_id !== null) path = `detail/${folder_id}/`;


            axios.get(`lectures/${path}`, {headers: {'Authorization': `Token ${auth_token}`}})
                .then(response => {

                    context.commit('setDirectoryListing', response.data);
                    context.commit('sortDirectoryListing', 'type');
                    context.commit('stopLoading');
                })
                .catch((error) => {
                    if (!error.response) {
                        console.log('Please check your internet connection.', false);
                    } else if (error.response.status === 401) {

                        console.log('Invalid authentication token. Please logout and login again.', false);
                    } else {
                        console.log(`Unable to sign in. Error code : ${error.response.status}`, false);
                    }
                    context.commit('stopLoading');
                });
        },
        goToPreviousFolder(context) {
            const parent_folder_id = context.state.parent_folder_id;
            console.log(parent_folder_id);
            context.dispatch('getLecturesForPath', parent_folder_id.id).then({});
        }

    },


}


function sortByProperty(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;

        return 0;
    }
}